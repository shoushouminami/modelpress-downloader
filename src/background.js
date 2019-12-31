'use strict';

const downloadQueue = [];

let getFileName = function(url, ext) {
    var filename = url.split("?")[0].split("/");
    filename = filename[filename.length - 1];
    if (filename.indexOf(":") > -1) {
        filename = filename.split(":")[0];
    }

    if (ext) {
        return filename + "." + ext;
    }

    return filename;
};

/**
 * @param chrome
 * @param image <code> {url: "", folder: "abc/", ext: "jpg"} </code>
 * @param resolve
 */
let download = function (chrome, image, resolve) {
    chrome.downloads.download(
        {
            url: image.url,
            saveAs: false,
            method: "GET",
            filename: image.folder + getFileName(image.url, image.ext)
        }, function () {
            if (resolve instanceof Function) {
                resolve();
            }
        });
};
