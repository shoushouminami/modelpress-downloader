/**
 * This module exports a factory function to construct a new message object. This message object is used by front end to pass
 * download tasks to backend.
 * @type {{init: (function(): {ext: undefined, images: [], folder: string, host: string, remoteImages: {}, retry: boolean, supported: boolean})}}
 */
const utils = require("../utils");

/**
 * Initialize and return a return message object.
 * 
 * If `original` is passed in, initialization is done by adding missing properties to the `original` object.
 * 
 * The `original` is then returned. This effectively allows overwrite to some properties during init.
 * 
 * @param {object} original 
 * @returns The `original` or a new return message object.
 */
function init(original = {}) {
    const o = Object.assign(original, {
        href: window.location.href,
        host: window.location.host,
        pathname: window.location.pathname,
        supported: true,
        retry: false,
        retryAfterMs: undefined, // popup will retry inject script 1 more time (if retry is true). defaults to 100ms.
        scan: false, // if there is smart scan support for this page
        scanState: "", // "started" or "stopped"
        images: [], // images: [] an array of image urls. Instead of string representing the url directly, it can also be an object type like
        // {url: "url", retries: ["retry url1", "retry url2"]}. The retry url is used if the url fails.
        // {type: "msg", filename: "1.jpg"} download through messaging exchange
        // {type: "tab", imageUrl: "", websiteUrl: ""} // download through background tab
        selectedIndexes: null, // allow user to select which images to download
        remoteImages: {}, // for example {"mdpr.jp": "1234567"}
        ext: undefined,
        title: window.document.title.replace(/\//g, "-"),
        folder: (window.location.host + window.location.pathname).replace(/\//g, "-") + "/",
        fromTabId: 0, // tabId,
        loading: false, //  tells the runtime to show an in progress icon indicating images are loading
        headers: [], // extra HTTP headers to send when calling chrome.download(). such as [{ "name": "myname", "value": "myvalue"}]
        permissionRequest: undefined,  // request for optional permissions
        ignoreJobId: false, // CS level override to ignore config DOWNLOAD_PREPEND_JOBID
        // if true then the config is ignored. othewise it is honored.
        options: {} /**
                         // "key": {"value": 1, "label": "Option Label", type: "range"|"checkbox"}
                "downloadPrependJobId": { // same as config.DOWNLOAD_PREPEND_JOBID
                    index: 999,
                    label: "Prepend sequence number to file name",
                    type: "checkbox",
                    checked: true,
                    userInteracted: false // whether this config is clicked by user on UI
                }
            */
    }, Object.assign({}, original));

    o.originalFolder = o.folder;

    return o;
}

function notSupported(message) {
    let o = init(message);
    o.supported = false;
    return o;
}

/**
 * Set property `loading` to true on the return message object.
 * @param {*} message 
 * @returns 
 */
function loading(message) {
    let o = init(message);
    o.loading = true;
    return o;
}

function tabDownload(o, permissionRequest, redirectPage) {
    o.permissionRequest = permissionRequest;

    let anchor = window.location.href.split("#")[1];
    if (anchor && anchor.startsWith("mid_")) {
        let imageUrl = atob(anchor.replace("mid_", ""));
        window.open(imageUrl, "_self");
    }

    o.images = o.images.map(
        img => {
            const url = typeof img === "string" ? img : img.url;
            return {
                url,
                websiteUrl: redirectPage + "#mid_" + btoa(url),
                websiteCS: "inject-cs.js",
                type: "tab",
                filename: utils.getFileName(url),
                retries: img.retries?.map(
                    retry => ({
                        websiteUrl: redirectPage + "#mid_" + btoa(retry),
                        url: retry
                    })
                )
            };
        } 
    );

    return o;
}

module.exports = {
    init,
    notSupported,
    loading,
    tabDownload
};
