/**
 * This module exports a factory function to construct a new message object. This message object is used by front end to pass
 * download tasks to backend.
 * @type {{init: (function(): {ext: undefined, images: [], folder: string, host: string, remoteImages: {}, retry: boolean, supported: boolean})}}
 */
const utils = require("../utils");
module.exports = {
    init: function (message) {
        let o = message || {};
        Object.assign(o, {
            href: window.location.href,
            host: window.location.host,
            supported: true,
            retry: false,
            retryAfterMs: undefined, // popup will retry inject script 1 more time (if retry is true). defaults to 100ms.
            scan: false, // if there is smart scan support for this page
            scanState: "", // "started" or "stopped"
            images: [], // images: [] an array of image urls. Instead of string representing the url directly, it can also be an object type like
                        // {url: "url", retries: ["retry url1", "retry url2"]}. The retry url is used if the url fails.
                        // {type: "msg", filename: "1.jpg"} download through messaging exchange
                        // {type: "tab", imageUrl: "", websiteUrl: ""} // download through background tab
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
            options: {
                // "key": {"value": 1, "label": "Option Label", type: "range"|"checkbox"}
            }
        });

        o.originalFolder = o.folder;

        return o;
    },

    notSupported: function (message) {
        let o = message || this.init();
        o.supported = false;

        return o;
    },

    loading: function (message) {
        let o = message || this.init();
        o.loading = true;
        return o;
    },

    tabDownload: function (o, permissionRequest, redirectPage) {
        o.permissionRequest = permissionRequest;

        let anchor = window.location.href.split("#")[1];
        if (anchor && anchor.startsWith("mid_")) {
            let imageUrl = atob(anchor.replace("mid_", ""));
            window.open(imageUrl, "_self");
        }

        o.images = o.images.map(
            i => ({
                imageUrl: i.url,
                websiteUrl: redirectPage + "#mid_" + btoa(i.url),
                websiteCS: "inject-cs.js",
                type: "tab",
                filename: utils.getFileName(i.url),
                retries: i.retries == null ? undefined : i.retries.map(
                    retry => ({
                        websiteUrl: redirectPage + "#mid_" + btoa(retry),
                        imageUrl: retry
                    })
                )
            })
        );

        return o;
    }
};
