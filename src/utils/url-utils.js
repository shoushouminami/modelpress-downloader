function toFull(url, window) {
    if (url == null) return null;

    if (url.startsWith("http")) {
        return url;
    }

    if (window == null || window.window !== window) {
        window = require("../globals").getWindow();
    }

    if (url.startsWith("//")) {
        return "https:" + url;
    }

    return window.origin + (url.startsWith("/") ? "" : "/") + url;
}

function basename(url) {
    let arr = url.split("/");
    return arr[arr.length - 1];
}

function pathname(url) {
    if (url == null || url.startsWith("/")) {
        return url;
    }

    return new URL(url).pathname;
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

function removeYoutubeImg(url) {
    if (url && url.indexOf("img.youtube.com") == -1) {
        return url;
    }
}

function getYoutubeImgMaxRes(url) {
    if (url && url.indexOf("img.youtube.com") > -1) {
        if (url.indexOf("/mqdefault.jpg") > -1) {
            return url.replace("/mqdefault.jpg", "/maxresdefault.jpg")
        }
        if (url.indexOf("/hqdefault.jpg") > -1) {
            return url.replace("/hqdefault.jpg", "/maxresdefault.jpg")
        }
        return url.replace("/sddefault.jpg", "/maxresdefault.jpg")
    }
    return url;
}

/**
 * Syntax sugar to run a few filter functions on the target object.
 * Instead of write func1(func2(func3(targetOjb))),
 * one can write filters.on(targetObj).apply(func1, func2, func3, ...)
 * Or filters.on(targetObj).first(func1, ...).then(func2, func3, ...)
 * Or filters.first(func1, ...).then(func2, func3, ...)(targetObj)
 */
const filters = {
    on: function(targetObj) {
        const onTargetHandle = {
            apply: function (...filterFuncArray) {
                let temp = targetObj;
                for (const filterFunc of filterFuncArray) {
                    temp = filterFunc(temp);
                }
                return temp;
            },
            first: function (...filterFuncArray1) {
                return {
                    then: function (...filterFuncArray2){
                        return onTargetHandle.apply(...filterFuncArray1, ...filterFuncArray2);
                    }
                }
            }
        }
        return onTargetHandle;
    },
    chain: function(...filterFuncArray) {
        return function (targetObj) {
            return filters.on(targetObj).apply(...filterFuncArray);
        }
    },
    first: function (...filterFuncArray1) {
        return {
            then: function (...filterFuncArray2) {
                return function (targetObj) {
                    return filters.on(targetObj).first(...filterFuncArray1).then(...filterFuncArray2);
                }
            }
        }   
    }
}

/**
 * Guess the media type. Returns a string in "image", "video", "audio", "html", "text", or "unknown".
 * @param {string} url 
 */
function guessMediaType(url) {
    if (typeof url !== "string") return "unknown";

    // Special handling for data URLs: data:[<mediatype>][;base64],<data>
    if (url.startsWith("data:")) {
        // Strip "data:"
        const rest = url.slice(5);
        const commaIdx = rest.indexOf(",");
        if (commaIdx === -1) return "unknown";

        const meta = rest.slice(0, commaIdx); // e.g. "image/png;base64" or "text/html;charset=utf-8"
        const [mimePart] = meta.split(";");
        const mime = mimePart || "text/plain";

        const lowerMime = mime.toLowerCase();

        if (lowerMime.startsWith("image/")) return "image";
        if (lowerMime.startsWith("video/")) return "video";
        if (lowerMime.startsWith("audio/")) return "audio";
        if (
            lowerMime === "text/html" ||
            lowerMime === "application/xhtml+xml"
        ) {
            return "html";
        }
        if (
            lowerMime.startsWith("text/") ||
            lowerMime === "application/json" ||
            lowerMime === "application/xml" ||
            lowerMime === "application/javascript" ||
            lowerMime === "application/x-javascript"
        ) {
            return "text";
        }

        return "unknown";
    }

    const ext = require("../utils").getFileExt(url);
    // Image extensions
    const imageExt = new Set(["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "tiff", "ico"]);

    // Video extensions
    const videoExt = new Set(["mp4", "webm", "ogv", "mov", "avi", "mkv", "flv", "wmv", "m4v"]);

    // Audio extensions
    const audioExt = new Set(["mp3", "wav", "ogg", "m4a", "aac", "flac", "opus"]);

    // HTML extensions
    const htmlExt = new Set(["html", "htm"]);

    // Text extensions
    const textExt = new Set(["txt", "csv", "json", "xml", "js", "css"]);

    if (imageExt.has(ext)) return "image";
    if (videoExt.has(ext)) return "video";
    if (audioExt.has(ext)) return "audio";
    if (htmlExt.has(ext)) return "html";
    if (textExt.has(ext)) return "text";

    return "unknown";
}

exports.toFull = toFull;
exports.removeMwimgsSize = removeMwimgsSize;
exports.getEpisodeId = getEpisodeId;
exports.removeYoutubeImg = removeYoutubeImg;
exports.getYoutubeImgMaxRes = getYoutubeImgMaxRes;
exports.filters = filters;
exports.basename = basename;
exports.pathname = pathname;
exports.guessMediaType = guessMediaType;
