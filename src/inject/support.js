const supportedSites = require("./supported-sites");
module.exports = function (host) {
    supportedSites[host] = true;
};