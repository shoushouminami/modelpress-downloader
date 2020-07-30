"use strict";
let o = require("./inject/return-message.js").init();
try {
    const site = require("./inject/" + require("./inject/hostMapping").check(window.location));
    o = site.inject();
} catch (e) {
    // not found
    o.supported = false;
}

window._mid = {o: o};
module.exports = o;
