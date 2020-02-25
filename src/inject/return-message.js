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

// images: [] an array of image urls. Instead of string representing the url directly, it can also be an object type like
// {url: "url", retries: ["retry url1", "retry url2"]}. The retry url is used if the url fails.
