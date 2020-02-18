module.exports = {
    init: function () {
        return {
            host: window.location.host,
            supported: true,
            retry: false,
            images: [],
            remoteImages: {}, // for example {"mdpr.jp": "1234567"}
            ext: undefined,
            folder: window.location.host + window.location.pathname.replace(/\//g, "-") + "/",
        };
    }
};