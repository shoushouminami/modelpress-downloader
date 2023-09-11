const utils = require("../utils.js");
function getLargeImg(url) {
    url = utils.removeTrailingResolutionNumbers(utils.removeQuery(url));

    // turn webp into jpg url
    let webpPattern = /^(https?:\/\/.*)\/files\/rcms_conv_webp\/files\/topics\/(.*)_[\d]{10,}.webp/i; // webp pattern e.g. https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_11_1560759726.webp
    if (url.match(webpPattern)) {
        let m = url.match(webpPattern);
        url = m[1] + "/files/topics/" + m[2];
        if (!url.endsWith(".jpg")) {
            url += ".jpg";
        }
    }

    let pattern = /.*(\.w[0-9]+\.v[0-9]+).jpg$/i; // jpg pattern with width and timestamp, e.g. https://hayabusa.io/abema/programs/89-42_s0_p156158/thumb001.w800.v1559579567.jpg
    if (url.match(pattern)) {
        url = url.replace(url.match(pattern)[1], "");
    }

    // https://times-abema.ismcdn.jp/mwimgs/2/8/1448w/img_282140be4f76eec3bfce4658a720451f268882.jpg
    let pattern2 = /^https?:\/\/.*\/mwimgs\/[0-9a-z]+\/[0-9a-z]+\/(\d+w)\/.*\.jpg$/i
    if (url.match(pattern2)) {
        url = url.replace(url.match(pattern2)[1], "2000w");
    }

    return utils.removeDataUrl(url);
}

const getLargeImgWithRetry = url => {
    let filtered = getLargeImg(url);
    if (filtered === null) {
        return null;
    }

    return {url: filtered, retries: [utils.removeQuery(url)]};
};

const inject =  function() {
    let o = require("./return-message").init();
    for (const selector of [
        "main article .article-body .figure img",
        "main article .article-body .m-teaser-main img",
        "main article .article-body .article-gallery-wrap figure img",
        "main article .article-body .article-thumb figure img",
    ]) {
        utils.pushArray(o.images,
            utils.findLazyImagesWithCssSelector(
                document,
                selector,
                getLargeImgWithRetry)
        );
    }
    return o;
};

module.exports = {
    host: "times.abema.tv",
    inject: inject
};
