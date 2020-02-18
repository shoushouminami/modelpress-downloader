const moduleWithHostname = {};
const modulesWithHostFilter = [];

module.exports = {
    get: function (host) {
        if (moduleWithHostname[host]) {
            return moduleWithHostname[host];
        }

        for (const f of modulesWithHostFilter) {
            if (f.host(host)) {
                return f;
            }
        }

        return false;
    },
};

const register = function (siteMoudle) {
    if (siteMoudle.inject && typeof siteMoudle.inject === "function" && siteMoudle.host) {
        if (typeof siteMoudle.host === "string") {
            moduleWithHostname[siteMoudle.host] = siteMoudle;
        } else if (typeof siteMoudle.host === "function") {
            modulesWithHostFilter.push(siteMoudle);
        }
    } else {
        console.warn("Bad module: " + siteMoudle);
    }
};

register(require("./mdpr.jp"));
register(require("./spice.eplus.jp"));
