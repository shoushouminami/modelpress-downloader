function toFull(url, window) {
    if (url.startsWith("http")) {
        return url;
    }

    return window.origin + (url.startsWith("/") ? "" : "/") + url;
}

exports.toFull = toFull;
