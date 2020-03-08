const moduleWithHostname = {};
const modulesWithHostFilter = [];
const get = function (location) {
    if (moduleWithHostname[location.host]) {
        return moduleWithHostname[location.host];
    }

    for (const f of modulesWithHostFilter) {
        if (f.host(location.host, location)) {
            return f;
        }
    }

    return false;
};

module.exports = {
    get: get
};

const register = function (siteMoudle) {
    if (siteMoudle.inject && typeof siteMoudle.inject === "function" && siteMoudle.host) {
        if (typeof siteMoudle.host === "string") {
            if (moduleWithHostname[siteMoudle.host]) {
                throw new Error("Duplicated site script: " + siteMoudle.host);
            }
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
register(require("./times.abema.tv"));
register(require("./natalie.mu"));
register((require("./girlswalker.com")));
register(require("./entamenext.com"));
register(require("./news.mynavi.jp"));
register(require("./apress.jp"));
register(require("./thetv.jp"));
register(require("./dogatch.jp"));
register(require("./this.kiji.is"));
register(require("./mantan-web.jp"));
register(require("./bltweb.jp"));
register(require("./cancam.jp"));
register(require("./mikan-incomplete.com"));

(function(siteModuleList){
    for(const siteModule of siteModuleList) {
        register(siteModule);
    }
})([
    require("./popwave.jp"),
    require("./www.facebook.com"),
    require("./news.dwango.jp"),
    require("./tokyopopline.com"),
    require("./twitter.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
    require("./blog.nogizaka46.com")
]);
