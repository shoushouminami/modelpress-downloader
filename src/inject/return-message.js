/**
 * This module exports a factory function to construct a new message object. This message object is used by front end to pass
 * download tasks to backend.
 * @type {{init: (function(): {ext: undefined, images: [], folder: string, host: string, remoteImages: {}, retry: boolean, supported: boolean})}}
 */
module.exports = {
    init: function (message) {
        let o = message || {};
        Object.assign(o, {
            href: window.location.href,
            host: window.location.host,
            supported: true,
            retry: false,
            scan: false, // if there is smart scan support for this page
            scanState: "", // "started" or "stopped"
            images: [],
            remoteImages: {}, // for example {"mdpr.jp": "1234567"}
            ext: undefined,
            title: window.document.title.replace(/\//g, "-"),
            folder: (window.location.host + window.location.pathname).replace(/\//g, "-") + "/",
            fromTabId: 0, // tabId,
            loading: false, //  tells the runtime to show an in progress icon indicating images are loading
            headers: [], // extra HTTP headers to send when calling chrome.download(). such as [{ "name": "myname", "value": "myvalue"}]
            permissions_request: undefined  // request for optional permissions
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
    }
};


// images: [] an array of image urls. Instead of string representing the url directly, it can also be an object type like
// {url: "url", retries: ["retry url1", "retry url2"]}. The retry url is used if the url fails.
// {type: "msg", filename: "1.jpg"} download through messaging exchange
// {type: "tab", imageUrl: "", websiteUrl: ""} // download through background tab


