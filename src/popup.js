// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let getFileName = function(url, ext) {
    var filename = url.split("?")[0].split("/");
    filename = filename[filename.length - 1];
    if (filename.indexOf(":") > -1) {
        filename = filename.split(":")[0];
    }

    if (ext) {
        return filename + "." + ext;
    }

    return filename;
};
/**
 * @param chrome
 * @param image <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve
 */
let download = function (chrome, image, resolve) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: image.folder + getFileName(image.url, image.ext)
        }, function () {
            if (resolve instanceof Function) {
                resolve();
            }
        });
};

let downloadWithOpenedTab = function (chrome, image, context, resolve, delay) {
    setTimeout(function () {
        console.debug("event=downloading_image totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
        download(chrome, {url: image.imageUrl, folder: context.folder}, resolve);
        context.finishCount++;
        if (context.finishCount === context.totalCount) {
            context.p = context.p.then(function () {
                return new Promise(function (resolve) {
                    if (context.tempTab) {
                        console.debug("event=removing_tab totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
                        chrome.tabs.remove(context.tempTab.id, function () {
                            resolve();
                        });
                    }
                });
            });
        }
    }, delay);
};

let downloadWithTab = function (chrome, image, context) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            if (context.tempTab == null) {
                return new Promise(function (resolve) {
                    console.debug("event=creating_new_tab totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
                    chrome.tabs.create({
                        active: false,
                        url: image.websiteUrl
                    }, function (tab) {
                        console.debug("event=created_new_tab totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
                        context.tempTab = tab;
                        downloadWithOpenedTab(chrome, image, context, resolve, 1000);
                    });
                });
            } else {
                return new Promise(function (resolve) {
                    console.debug("event=updating_tab totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
                    chrome.tabs.update(context.tempTab.id, {
                        url: image.websiteUrl
                    }, function () {
                        console.debug("event=updated_tab totalCount=%d finishCount=%d ", context.totalCount , context.finishCount);
                        downloadWithOpenedTab(chrome, image, context, resolve, 1000);
                    });
                });
            }
        });
    }
};

let displayInIframe = function(tabId, url, resolve, error) {
    chrome.tabs.sendMessage(tabId, {url: url}, function(response) {
        if (response) {
            if (response.status === "ok") {
                if (resolve instanceof Function) {
                    resolve();
                }
            } else {
                if (error instanceof Function) {
                    error("Something went wrong...");
                }
            }
        } else if (chrome.runtime.lastError) {
            if (error instanceof Function) {
                error(chrome.runtime.lastError.message);
            }
        }
    });
};

let downloadWithIframe = function (chrome, image, context, tabId) {
    if (image.websiteUrl) {
        context.p = context.p.then(function () {
            return new Promise(function (resolve) {
                console.debug("event=creating_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                displayInIframe(tabId, image.websiteUrl, function () {
                    console.debug("event=created_new_iframe totalCount=%d finishCount=%d ", context.totalCount, context.finishCount);
                    download(chrome, {url: image.imageUrl, folder: context.folder} , resolve);
                }, function (msg) {
                    console.error(msg);
                });
            });
        });
    }
};

let downloadWithButtonClick = function(chrome, image, context, tabId) {
    context.p = context.p.then(function () {
        return new Promise(function (resolve) {
            console.debug("event=clicking_button totalCount=%d finishCount=%d image=%s", context.totalCount, context.finishCount, image);
            chrome.tabs.sendMessage(tabId, image, function(response) {
                if (response) {
                    download(chrome, {url: response, folder: context.folder} , resolve);
                } else {
                    resolve();
                }
            });
        });
    });
};

let downloadButton = document.getElementById('download');
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "inject.js", matchAboutBlank: true},
        function (results) {
            console.debug(results);
            if (results && results.length && results[0].supported) {
                let message = results[0];
                if (message.images && message.images.length) {
                    document.getElementById("buttonText").innerText = chrome.i18n.getMessage("downloadButtonMessage", [message.images.length])
                    downloadButton.addEventListener("click", function () {
                        let imagesNeedTab = [];
                        let imagesNeedClick = [];
                        for (let image of message.images) {
                            if (typeof image === "string") {
                                download(chrome, {url: image, folder: message.folder, ext: message.ext});
                            } else if (typeof image === "object") {
                                if (image.websiteUrl && image.imageUrl) {
                                    imagesNeedTab.push(image);
                                } else if (image.liId && image.buttonId) {
                                    imagesNeedClick.push(image);
                                } else {
                                    console.error("event=unknown_object image=" + image);
                                }
                            } else {
                                console.error("event=unknown_type image=" + image);
                            }
                        }

                        if (imagesNeedTab.length || imagesNeedClick.length) {
                            let context = {
                                p: Promise.resolve(),
                                tempTab: null,
                                tempIframe: null,
                                folder: message.folder,
                                finishCount: 0,
                                totalCount: imagesNeedTab.length
                            };

                            if (imagesNeedTab.length) {
                                context.totalCount = imagesNeedTab.length;
                                for (let image of imagesNeedTab) {
                                    downloadWithIframe(chrome, image, context, tabs[0].id);
                                }
                            } else {
                                context.totalCount = imagesNeedClick.length;
                                for (let image of imagesNeedClick) {
                                    downloadWithButtonClick(chrome, image, context, tabs[0].id);
                                }
                            }
                        }
                    });
                } else {
                    downloadButton.disabled = "disabled";
                    downloadButton.innerText = chrome.i18n.getMessage("noImageMessage");
                }
            } else {
                downloadButton.hidden = "hidden";
                document.getElementById("supported-sites-title").innerText = chrome.i18n.getMessage("supportedSitesTitle");
                document.getElementById("supported-sites").hidden = false;
            }
        });
});

let supportedSites = [
    "https://mdpr.jp/",
    "https://tokyopopline.com/",
    "http://blog.nogizaka46.com/",
    "https://twitter.com/",
    ["https://www.instagram.com/", "instagram.com"],
    ["https://www.bilibili.com/read/home", "www.bilibili.com/read"],
    "https://news.dwango.jp",
    "https://www.facebook.com"
];

window.addEventListener("load", function(){
    let supportedSitesDiv = document.getElementById("supported-sites");
    let appendSite = function(iconUrl, siteUrl, displayUrl) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let a = document.createElement("a");
        div.appendChild(img);
        div.appendChild(document.createTextNode(" "));
        div.appendChild(a);

        img.src = iconUrl;
        img.alt = siteUrl;
        img.height = 10;
        a.href = siteUrl;
        a.innerText = displayUrl;
        a.addEventListener("click", function () {
            chrome.tabs.update({url:siteUrl});
        });

        supportedSitesDiv.appendChild(div);
    };

    for (const site of supportedSites) {
        if (typeof site === "string") {
            let url = new URL(site);
            appendSite("../images/" + url.host + ".ico", url.toString(), url.host + (url.pathname.length > 1 ?  (url.pathname) : ""));
        } else if (Array.isArray(site)) {
            let url = new URL(site[0]);
            appendSite("../images/" + url.host + ".ico", url.toString(), site[1]);
        }
    }
}, false);