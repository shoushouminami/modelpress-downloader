
const supportedHost = {};
const hostFilters = [];

module.exports = {
    get: function (host) {
        if (supportedHost[host]) {
            return supportedHost[host];
        }

        for (const f of hostFilters) {
            if (f.filter(host)) {
                return f.module;
            }
        }

        return false;
    },
    register: function (host, m) {
        supportedHost[host] = m || function () {};
    },

    registerHostFilter: function (func, m) {
        hostFilters.push({
            filter: func,
            module: m || function(){}
        });
    }
};

require("./mdpr.jp.js");