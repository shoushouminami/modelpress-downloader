"use strict";
try {
    const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
    if (site.scan) {
        site.scan();
    }
} catch (e) {
    // not found
    if (require("./is-dev")) {
        console.error(e);
    }
    o.supported = false;
}
