const utils = require("../utils.js");
const getLargeImg = (url) => {
    url = utils.filterTrailingResolutionNumbers(utils.removeQuery(url));
    // turn webp into jpg url
    let webpPattern = /^(https?:\/\/.*)\/files\/rcms_conv_webp\/files\/topics\/(.*)_[\d]{10,}.webp/i; // webp pattern e.g. https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_11_1560759726.webp
    if (url.match(webpPattern)) {
        let m = url.match(webpPattern);
        url = m[1] + "/files/topics/" + m[2] + ".jpg";
    }

    let pattern = /.*(\.w[0-9]+\.v[0-9]+).jpg$/i; // jpg pattern with width and timestamp, e.g. https://hayabusa.io/abema/programs/89-42_s0_p156158/thumb001.w800.v1559579567.jpg
    if (url.match(pattern)) {
        url = url.replace(url.match(pattern)[1], "");
    }

    return utils.nullIfDataUrl(url);
};

const getLargeImgWithRetry = url => {
    let filtered = getLargeImg(url);
    if (filtered === null) {
        return null;
    }

    return {url: filtered, retries: [utils.removeQuery(url)]};
};

const inject =  function() {
    let o = require("./return-message").init();
    utils.pushArray(o.images, utils.findImagesWithCssSelector(document, "main.main article.blog-article div.blog-body__item img", getLargeImgWithRetry));
    return o;
};

module.exports = {
    host: "times.abema.tv",
    inject: inject
};
