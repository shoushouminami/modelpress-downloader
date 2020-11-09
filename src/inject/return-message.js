/**
 * This module exports a factory function to construct a new message object. This message object is used by front end to pass
 * download tasks to backend.
 * @type {{init: (function(): {ext: undefined, images: [], folder: string, host: string, remoteImages: {}, retry: boolean, supported: boolean})}}
 */
module.exports = {
    init: function () {
        return {
            href: window.location.href,
            host: window.location.host,
            supported: true,
            retry: false,
            scan: false, // if there is smart scan support for this page
            images: [],
            remoteImages: {}, // for example {"mdpr.jp": "1234567"}
            ext: undefined,
            folder: window.location.host + window.location.pathname.replace(/\//g, "-") + "/",
        };
    }
};

// images: [] an array of image urls. Instead of string representing the url directly, it can also be an object type like
// {url: "url", retries: ["retry url1", "retry url2"]}. The retry url is used if the url fails.
