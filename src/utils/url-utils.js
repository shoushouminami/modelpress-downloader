function toFull(url, window) {
    if (url.startsWith("http")) {
        return url;
    }

    if (window === undefined) {
        window = require("../globals").getWindow();
    }

    return window.origin + (url.startsWith("/") ? "" : "/") + url;
}

exports.toFull = toFull;
