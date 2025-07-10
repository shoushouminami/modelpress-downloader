function toFull(url, window) {
    if (url.startsWith("http")) {
        return url;
    }

    if (window == null || window.window !== window) {
        window = require("../globals").getWindow();
    }

    return window.origin + (url.startsWith("/") ? "" : "/") + url;
}

function removeMwimgsSize(url) {
    if (url == null) return url;
    let m = url.match(/^https:\/\/[a-z0-9.-]+\/mwimgs\/.+\/.+(\/\d+[a-z]*\/).+\.(jpg|png|jpeg)(\?.*)?$/)
    if (m && m[1]) {
        url = url.replace(m[1], "/-/")
    }
    return url;
}

function getEpisodeId(url) {
    if (url == null) return url;
    let m = url.match(/^https:\/\/.*\/episode\/(\d+)$/);
    if (m && m[1]) {
        return m[1]
    }
}

exports.toFull = toFull;
exports.removeMwimgsSize = removeMwimgsSize;
exports.getEpisodeId = getEpisodeId;
