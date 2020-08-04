try {
    const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
    const o = site.inject();
    completion({
        count: o.images.length,
        urls: o.images,
        supported: true
    });
} catch (e) {
    // not found
    completion({});
}
