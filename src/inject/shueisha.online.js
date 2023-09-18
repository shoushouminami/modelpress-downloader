const utils = require("../utils.js");
const messaging = require("../messaging");
const globals = require("../globals");
const logger = require("../logger2")(module.id);
const window = globals.getWindow();
// array of { dom: dom, filename: image.title, promise: Promise, dataUrl: string }
const moduleCachedImages = window._midImages = window._midImages || [];

function getLargeImg(url) {
    let parts = url.split("/");
    if (parts.length - 2 > -1) {
       let size = parts[parts.length - 2];
       if (["100", "200", "400", "800", "1600", "3200"].includes(size)) {
           parts[parts.length - 2] = "0";
       }
    }
    return parts.join("/");
}

function toCachedImage(url) {
    url = getLargeImg(url);
    const filename = utils.getFileName(url);
    moduleCachedImages.push({
        filename: filename,
        promise: new Promise(function (resolve) {
            fetch(url).then(
                resp => resp.blob()
            ).then(
                blob => {
                    let reader = new FileReader();
                    reader.onload = function () {
                        resolve(this.result)
                    }
                    reader.readAsDataURL(blob);
                }
            );
        }),
    });

    return {
        type: "msg",
        filename: filename,
        url: url
    }
}

function registerRuntimeListener() {
    // listen for "msg" query
    messaging.listenOnRuntime("getImageUrl", function (msg, sendResponse) {
        logger.debug("received getImageUrl message filename=", msg.filename);
        if (msg.filename) {
            for (const image of moduleCachedImages) {
                if (image.filename === msg.filename) {
                    logger.debug("found image filename=", msg.filename, "msg=", msg);
                    image.promise.then(function (dataUrl) {
                        logger.debug("sending getImageUrl response image.filename=", image.filename,
                            "msg.filename=", msg.filename,
                            "dataUrl.length=", dataUrl && dataUrl.length);
                        sendResponse({
                            url: dataUrl,
                            filename: msg.filename
                        });
                    });
                }
            }

            return true; // async response
        }
    });
}

module.exports = {
    inject: function () {
        registerRuntimeListener();

        let o = require("./return-message.js").init();
        for (const selector of [
            ".post-media-element figure.el-Media_Figure picture img", // article figure image
            ".bl-Gallery_Container .bl-Gallery_CarouselPaginationItems-item picture img",
        ]) {
            utils.pushArray(
                o.images,
                utils.findLazyImagesWithCssSelector(
                    document,
                    selector,
                    toCachedImage
                )
            );
        }

        return o;
    },
    host: "shueisha.online",
};
