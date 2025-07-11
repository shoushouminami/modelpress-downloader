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

exports.toFull = toFull;
exports.removeMwimgsSize = removeMwimgsSize;
exports.getEpisodeId = getEpisodeId;
exports.removeYoutubeImg = removeYoutubeImg;
exports.getYoutubeImgMaxRes = getYoutubeImgMaxRes;
exports.filters = filters;
