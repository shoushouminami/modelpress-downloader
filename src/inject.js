module.exports.inject = function () {
    let o = require("./inject/return-message.js").init();
    try {
        const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
        o = site.inject();
    } catch (e) {
        // not found
        if (require("./is-dev")) {
            console.error(e);
        }
        o.supported = false;
    }

    return o;
}
