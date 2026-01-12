const ga = require("./google-analytics");
const downloader = require("./downloader");
const utils = require("./utils");
const messaging = require("./messaging");
const React = require("react");
const ReactDOM = require("react-dom");
const mdprApp = require("./remote/mdpr-app");
const logger = require("./logger2")(module.id);
const { wait } = require("./utils/async-utils");
const config = require("./config");
const { createSiteOptions, forEachOptionValueChanged, DOWNLOAD_PREPEND_JOBID } = require("./site-options.js");
const { guessMediaType, thumbnail } = require("./utils/url-utils");
const { getCallStack } = require("./utils/js-utils");
const { prepareDownloadJobs, getConfigSetJobId } = require("./downloader");

ga.bootstrapGA4();

//remember activeTabId so we only accept CS updateMessage from this tab
let activeTabId = null; 

/**
 * Recursively enhance A element so a click on the element would update the active chrome tab.
 * Runs callback before navigating.
 */
function addClickListenerForLinks(element, callback) {
    if (element && element.nodeName === "A") {
        element.addEventListener("click", function (e) {
            if (typeof callback === "function") {
                callback();
            }
            chrome.tabs.update({url:element.href}, function () {
                wait(1000).then(() => window.close());
            });
        })
    }

    if (element && element.childNodes) {
        for (const child of element.childNodes) {
            addClickListenerForLinks(child, callback);
        }
    }
}

let message = require("./inject/return-message").notSupported();
/** @type {ReturnType<typeof createSiteOptions>} */
let siteOptions = null;

const { PopupComponent, createThrottledEventEmitter } = require("./components/popup-component");

let renderEventEmitter = createThrottledEventEmitter(); // used to notify the PopupComponent to re-render.
let popupKey = 1;

function updatePopupUI() {
    logger.debug("update popup UI", "message=", message);
    ReactDOM.render(
        <PopupComponent
            key={popupKey++} // just need something unique
            supported={message.supported}
            count={message.images && message.images.length}
            loading={message.loading}
            hasAppImage={message.remoteImages != null && Object.keys(message.remoteImages).length > 0}
            hasAppPerm={mdprApp.isAppPermGranted()}
            appFetchStatus={mdprApp.getAppFetchStatus()}
            appImageCount={mdprApp.getAddedCount()}
            downloadHandler={downloadHandler}
            siteOptions={siteOptions}
            optionHandler={optionHandler}
            getImageThumbnails={getImageThumbnails}
            imagePickerHandler={imagePickerHandler}
            renderEvent={renderEventEmitter}
        />,
        document.getElementById("react-root"),
        function () {
            addClickListenerForLinks(document.getElementById("supportRequest"), () => {
                ga.trackEventGA4("support_link_click");
            });
        }
    );
}



function getImageThumbnails() {
    const jobs = prepareDownloadJobs(message);
    const thumbnails = message.images.map((img) => {
        const mediaType = guessMediaType(typeof img === "string" ? img : img.url, message.ext, img.filename);
        const isVideo = mediaType === "video";

        if (img.thumbnail) {
            return {
                src: img.thumbnail,
                isVideo
            };
        }

        // load image url for "msg" and "msg_seq"
        // trigger loading of the image/video and return spinner (loading) as thumbnail
        // continue to switch statement below if the image is already loaded
        if ((img.type == "msg" || img.type == "msg_seq") && !img.loaded) {
            if (!img.loading) { // no need to load again if it is in the middle of loading
                const triggerRerenderThumbnails = (imageFromResp) => {
                    if (imageFromResp) {
                        renderEventEmitter.emit();
                    }
                };
                if (img.type === "msg") {
                    downloader.getImageUrlFromContentScriptIfNotLoaded(img, img.context, triggerRerenderThumbnails);
                } else {
                    downloader.getImageUrlFromContentScriptInSeq(img, img.context, triggerRerenderThumbnails, 250);
                }
            }
            // returns spinner to show the image/video is loading
            return {
                src: thumbnail("spinner"),
                className: "thumbnail_small"
            };
        }

        // show thumbnail according to media type
        switch (mediaType) {
            case "image":
                if (img.type !== "tab") {
                    // return the image url itself as thumbnail
                    return {
                        src: typeof img === "string" ? img : img.url
                    };
                }
            case "video":
            case "audio":
            case "html":
            case "text":
            case "unknown":
                return {
                    src: thumbnail(mediaType),
                    isVideo
                };
        }
    });

    // assign filename (from job.images) to thumbnail object.
    // image not selected as job will not show filename
    jobs.forEach(job => {
        job.images.forEach((jobImage) => {
            thumbnails[jobImage.index].label = jobImage.folderFilename;
        });
    });

    return thumbnails;
}

function downloadHandler(resolve) {
    function _downloadHandler() {
        const jobs = prepareDownloadJobs(message);
        const totalImageCount = jobs.reduce((sum, job) => sum + job.images.length, 0);
        ga.trackEventGA4("download", {
            "domain": message.host,
            "count": totalImageCount
        });
        forEachOptionValueChanged({}, message.options, (optionName, field, prevValue, currentValue) => {
            logger.debug("site option", optionName, field, prevValue, currentValue);
            ga.trackEventGA4("opt_" + optionName, {
                "domain": message.host,
                "opt_value": currentValue
            });
        });
        ga.trackEventGA4("picker_select", {
            "domain": message.host,
            "opt_value": (message.selectedIndexes != null) && message.selectedIndexes.length > 0 && (message.selectedIndexes.length !== message.images.length)
        });
        
        jobs.forEach((job, index) => {
            downloader.downloadInBackgroundFallbackInPopup(
                job,
                () => {
                    // only the last job calls resolve, which closes the popup window
                    if (index === jobs.length - 1) {
                        resolve();
                    }
                });
        });
    }

    // proceed to download when no permission request
    if (message.permissionRequest == null) {
        _downloadHandler();
        return;
    }

    // needs permission request before download
    ga.trackEventGA4("optional_perm_req", {
        "domain": message.host
    });

    chrome.permissions.request(
        message.permissionRequest,
        (granted) => {
            if (granted) {
                ga.trackEventGA4("optional_perm_granted", {
                    "domain": message.host
                });
                _downloadHandler();
            } else {
                ga.trackEventGA4("optional_perm_not_granted", {
                    "domain": message.host
                });
            }
        });
}



/** 
 * Call createSiteOptions() for the 1st time to initialize functions getAllOptions, persistOption, and userInteracted.
 * If the functions are already initialized, calling this function is no-op.
*/
function createSiteOptionsOnce(host, defaultOptions) {
    if (siteOptions == null) {
        logger.debug("func=createSiteOptionsOnce with host=", host, "defaultOptions=", defaultOptions, "stack=", getCallStack());
        siteOptions = createSiteOptions({
            host: host,
            options: defaultOptions
        });
    } else {
        logger.debug("func=createSiteOptionsOnce site options already created stack=", getCallStack())
    }
}

function optionHandler(optName, optNewValue, updatedOptionsMap) {
    logger.debug("func=optionHandler updated name=", optName, "value=", optNewValue,"optionsMap=", updatedOptionsMap);
    ga.trackEventGA4("opt_change_" + optName, {
        "domain": message.host,
        "opt_value": optNewValue
    });
    message.options = updatedOptionsMap;
    notifyCSOptionsChanged();
}

function notifyCSOptionsChanged() {
    messaging.sendToCS(message.fromTabId, "optionsChanged", {
        host: message.host,
        options: siteOptions.getAllOptions()
    });
}

/**
 * Called when image picker is used to select images to download. 
 * @param {int[]} selectedIndexes 
 */
function imagePickerHandler(selectedIndexes = []) {
    message.selectedIndexes = selectedIndexes;
    // no need to update UI as this event is propogated from UI
}

function startFetchMdprMobileImages(articleId) {
    mdprApp.fetchMdprMobileImages(articleId, message.images,function (newImages) {
        utils.pushArray(message.images, newImages);
        updatePopupUI();
    });
    updatePopupUI();
}

function updateMessage(result, tabId) {
    logger.debug("func=updateMessage result=", result, "tabId=", tabId);
    if (result) {
        logger.debug("\n!!!! TEST CASE !!!!\n\n" + utils.printTestAssertion(result));
        message = result;

        // Fetch site options from local storage (if not yet done so)
        createSiteOptionsOnce(message.host, message.options);
        
        message.options = siteOptions.getAllOptions();

        // Patch the config flag config.DOWNLOAD_PREPEND_JOBID
        // in messsage.options so the UI displays the correct checkbox.
        // Use the CS level flag if user clicked, otherwise use the extension level flag
        if (message.options && message.options[DOWNLOAD_PREPEND_JOBID]) {
            message.options[DOWNLOAD_PREPEND_JOBID].checked = getConfigSetJobId(message);
        }

        message.fromTabId = tabId;
        if (message.remoteImages && message.remoteImages["mdpr.jp"]) {
            mdprApp.checkAppPerm(function (granted) {
                if (granted) {
                    startFetchMdprMobileImages(message.remoteImages["mdpr.jp"]);
                }
                updatePopupUI();
            })
        }
    }
    ga.trackEventGA4(message.supported ? "website_supported" : "website_not_supported", {
        "domain": message.host
    })
    updatePopupUI();
}

// listen for updateResult message from content script
messaging.listen("updateResult", function (msg){
    if (activeTabId && msg?._sender?.tab?.id === activeTabId) {
        logger.debug("updateResult message=", msg, "from tabId=", msg._sender?.tab?.id);
        updateMessage(msg, message.fromTabId);
    } else {
        logger.warn("Igoring updateResult message=", msg, "from tabId=", msg?._sender?.tab?.id);
    }
});

// listen for getSiteOptions message from content script
messaging.listen("getSiteOptions", function (msg, sendResp) {
    if (msg && msg.host && msg.options) {
        if (activeTabId && msg._sender?.tab?.id !== activeTabId) {
            logger.warn("Ignoring getSiteOptions from different tab content script host=", msg.host, "options=", msg.options);
            return;
        }
        
        createSiteOptionsOnce(msg.host, msg.options);
        const allOptions = siteOptions.getAllOptions();
        logger.debug("host=", msg.host, "options=", allOptions);
        sendResp({
            host: msg.host,
            options: allOptions
        });
    }
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    // inject script with 1 retry.
    const tabId = tabs[0].id;
    activeTabId = tabId;
    // tear down the content script injected before. removing event listeners etc.
    messaging.sendToCS(tabId, "tearDown", {
        before: Date.now()
    });
    chrome.scripting.executeScript(
        {
            target: {"tabId": tabId},
            files: ["inject-cs.js"]
        },
        function (results) {
            if (results && results.length > 0) {
                const result = results[0].result;
                logger.debug("results[0].result=", result, "retry=", result?.retry);
                if (result?.retry) {
                    // retry in result.retryAfterMs or by default 100ms
                    const retryMs = result.retryAfterMs || 100;
                    wait(retryMs)
                        .then(() => {
                            chrome.scripting.executeScript(
                                {
                                    target: {"tabId": tabId},
                                    files: ["inject-cs.js"]
                                },
                                function (results) {
                                    updateMessage(results && results[0].result, tabId);
                                });
                        });
                } 

                updateMessage(results[0].result, tabId);
            } else {
                updateMessage(null, tabs[0].id);
            }
        });
});
