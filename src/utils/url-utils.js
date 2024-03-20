function toFull(url, window) {
    if (url.startsWith("http")) {
        return url;
    }

    if (window === undefined) {
        window = require("../globals").getWindow();
    }

    return window.origin + (url.startsWith("/") ? "" : "/") + url;
}

function removeMwimgsSize(url) {
    if (url == null) return url;
    let m = url.match(/^https:\/\/[a-z0-9.-]+\/mwimgs\/.+\/.+(\/\d+[a-z]+\/).+\.(jpg|png|jpeg)$/)
    if (m && m[1]) {
        url = url.replace(m[1], "/-/")
    }
    return url;
}

exports.toFull = toFull;
exports.removeMwimgsSize = removeMwimgsSize;
