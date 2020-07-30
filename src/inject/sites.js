const modulesWithHostname = {};
const modules = [];
const get = function (location) {
    if (modulesWithHostname[location.host]) {
        return modulesWithHostname[location.host];
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

const register = function (siteModule) {
    if (validate(siteModule)) {
        modules.push(siteModule);
        if (typeof siteModule.host === "string") {
            if (modulesWithHostname[siteModule.host]) {
                console.error("Duplicated site script: " + siteModule.host);
                throw Error("Duplicated site script: " + siteModule.host);
            }
            modulesWithHostname[siteModule.host] = siteModule;
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
    require("./mantan-web.jp"),
    require("./natalie.mu"),
    require("./this.kiji.is"),
    require("./thetv.jp"),
    require("./apress.jp"),
    require("./www.cinematoday.jp"),
    require("./popwave.jp"),
    require("./spice.eplus.jp"),
    require("./girlswalker.com"),
    require("./mikan-incomplete.com"),
    require("./e-talentbank.co.jp"),
    require("./dogatch.jp"),
    require("./entamenext.com"),
    require("./cancam.jp"),
    require("./ray-web.jp"),
    require("./bltweb.jp"),
    require("./blog.nogizaka46.com"),
    require("./hinatazaka46.com"),
    require("./7gogo.jp"),
    require("./twitter.com"),
    require("./www.facebook.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
]);
