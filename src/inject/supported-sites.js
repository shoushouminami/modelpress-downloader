const supportedHost = {};
const modulesWithHostFilter = [];

module.exports = {
    get: function (host) {
        if (supportedHost[host]) {
            return supportedHost[host];
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
            supportedHost[host] = siteMoudle;
        } else if (typeof siteMoudle.host === "function") {
            modulesWithHostFilter.push(siteMoudle);
        }
    } else {
        console.warn("Bad module: " + siteMoudle);
    }
};

const files = ["mdpr.jp.js"];

for (const f of files) {
    register(require("./" + f));
}

