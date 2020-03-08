"use strict";
const utils = require("./utils.js");
let o = require("./inject/return-message.js").init();
const sites = require("./inject/supported-sites.js");

const site = sites.get(window.location);
if (site) {
    o = site.inject();
} else {
    o.supported = false;
}

window._mid = {o: o};
module.exports = o;
