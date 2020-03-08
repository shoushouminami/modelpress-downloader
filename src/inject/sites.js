const modulesWithHostname = {};
const modulesWithHostFilter = [];
const modules = [];
const get = function (location) {
    if (modulesWithHostname[location.host]) {
        return modulesWithHostname[location.host];
    }

    for (const f of modulesWithHostFilter) {
        if (f.host(location.host, location)) {
            return f;
        }
    }

    return false;
};

module.exports = {
    get: get,
    all: function () {
        return modules.slice();
    }
};

const validate = function (siteMoudle) {
    if (siteMoudle.inject &&
        typeof siteMoudle.inject === "function" &&
        siteMoudle.host &&
        (typeof siteMoudle.host === "function" || typeof siteMoudle.host === "string")) {

        if (typeof siteMoudle.host !== "string" && !siteMoudle.hidden && !siteMoudle.url) {
            console.error("Missing site url: " + siteMoudle);
        }

        return true;
    }

    console.warn("Bad module: " + siteMoudle);
    return false;
};

const register = function (siteMoudle) {
    if (validate(siteMoudle)) {
        if (typeof siteMoudle.host === "string") {
            if (modulesWithHostname[siteMoudle.host]) {
                console.error("Duplicated site script: " + siteMoudle.host);
                throw Error("Duplicated site script: " + siteMoudle.host);
            }
            modulesWithHostname[siteMoudle.host] = siteMoudle;
            modules.push(siteMoudle);
        } else if (typeof siteMoudle.host === "function") {
            modulesWithHostFilter.push(siteMoudle);
            modules.push(siteMoudle);
        }
    }
};

(function(siteModuleList){
    for(const siteModuleName of siteModuleList) {
        register(siteModuleName);
    }
})([
    require("./mdpr.jp"),
    require("./times.abema.tv"),
    require("./news.mynavi.jp"),
    require("./tokyopopline.com"),
    require("./news.dwango.jp"),
    require("./popwave.jp"),
    require("./mikan-incomplete.com"),
    require("./mantan-web.jp"),
    require("./thetv.jp"),
    require("./apress.jp"),
    require("./natalie.mu"),
    require("./spice.eplus.jp"),
    require("./girlswalker.com"),
    require("./this.kiji.is"),
    require("./dogatch.jp"),
    require("./entamenext.com"),
    require("./cancam.jp"),
    require("./bltweb.jp"),
    require("./blog.nogizaka46.com"),
    require("./twitter.com"),
    require("./www.facebook.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
]);
