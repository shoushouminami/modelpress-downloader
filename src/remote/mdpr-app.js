const ga = require("../google-analytics");
const utils = require("../utils.js");
// const utils = require("../utils/utils-mock");
const logger = require("../logger");

let state = {
    canDownloadMobile: false,
    startedFetchMobile: false,
    finishedFetchMobile: false,
    fetchStatus: 0,
    addedCount: 0
};

/**
 * get all images from mdpr mobile apis
 * @param articleId {String}
 * @param currentImages {[String]}
 * @param callback {function(addedImages:[String])} - the callback function which will receive an array of additional image urls when successful. On
 *                  failure it will receive an empty array.
 * @param domains {[String]?}- The domains to try in order
 */
export function fetchMdprMobileImages(articleId, currentImages, callback, domains){
    if (!articleId || !articleId.match(/^\d+$/) || !callback || !(callback instanceof Function)) {
        console.error("Invalid article id: " + articleId + " or callback " + callback);
        callback([]);
        return;
    }

    ga.trackEvent("mdpr_remote", "fetch");
    state.startedFetchMobile = true;

    // Test code begins
    // setTimeout(function () {
    //     state.fetchStatus = 0;
    //     let arr = [];
    //     for (let i = 0 ; i < 999; i++) {
    //         arr.push("abc" + i);
    //     }
    //     callback(arr);
    // }, 1000);
    // return;
    // Test code ends

    if (!domains) {
        domains = ["app2-mdpr.freetls.fastly.net", "app-mdpr.freetls.fastly.net", "app1-mdpr.freetls.fastly.net"];
    }

    if (domains.length > 0) {
        const domain = domains.shift();
        const url = "https://" + domain + "/api/images/dialog/article?index=0&image_id=0&article_id=" + articleId;
        utils.fetchUrl(url)
            .then(function (respText) {
                let resp = undefined;
                let list = [];
                try {
                    resp = JSON.parse(respText);
                    logger.debug("Retrieved remote images count=", resp.list && resp.list.length, resp);
                } catch (e) {
                    logger.error("Failed parsing JSON: ", e);
                }

                if (resp && resp.list && resp.list.length) {
                    utils.pushArray(list, resp.list);
                }

                ga.trackEvent("mdpr_remote", "success", "count", list.length);

                state.addedCount = 0;

                let added = [];
                list.filter(image => currentImages.indexOf(image.url) === -1)
                    .forEach(image => {
                        state.addedCount++;
                        added.push(image.url);
                    });

                state.fetchStatus = 200;
                state.finishedFetchMobile = true;
                callback(added);
            }, function (status, statusText) {
                ga.trackEvent("mdpr_remote", "failure", state.fetchStatus, 1);
                console.error("Failed loading remote images", url, status, statusText);
                if (domains.length > 0) {
                    // retry on other domains
                    fetchMdprMobileImages(articleId, currentImages, callback, domains);
                } else {
                    state.fetchStatus = status;
                    state.finishedFetchMobile = true;
                    callback([]);
                }
            });
    }
}

// Used in Chrome permission request
const ORIGINS = ["https://*.freetls.fastly.net/"];

export function requestAppPerm(callback) {
    ga.trackEvent("mdpr_remote", "perm_ask");
    chrome.permissions.request({
        origins: ORIGINS
    }, function(granted) {
        state.canDownloadMobile = granted;
        ga.trackEvent("mdpr_remote", granted ? "perm_grant": "perm_deny");
        callback(granted);
    });
}

export function getAppFetchStatus() {
    if (state.startedFetchMobile && !state.finishedFetchMobile) {
        return "started";
    }

    if (state.finishedFetchMobile) {
        if (state.fetchStatus === 200 || state.fetchStatus === 404) {
            return state.fetchStatus + "";
        }

        return "error";
    }
}

export function isAppPermGranted() {
    return state.canDownloadMobile;
}

export function getAddedCount() {
    return state.addedCount;
}

/**
 * Checks if app permission is granted and calls the callback function with `granted`
 * @param callback {function(granted:boolean)}
 */
export function checkAppPerm(callback) {
    chrome.permissions.contains({
        origins: ORIGINS
    }, function (granted) {
        state.canDownloadMobile = granted;
        callback(granted);
    });
}

export function removeAppPerm(callback) {
    chrome.permissions.remove({
        origins: ORIGINS
    }, callback);
}
