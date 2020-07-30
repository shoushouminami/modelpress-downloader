let o = require("./inject/return-message.js").init();

try {
    const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
    o = site.inject();
    completion(o.images);
} catch (e) {
    // not found
    o.supported = false;
    completion([]);
}
