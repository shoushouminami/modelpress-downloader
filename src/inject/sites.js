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
    require("./www.rbbtoday.com"),
    require("./news.mynavi.jp"),
    require("./teens.mynavi.jp"),
    require("./www.fujitv-view.jp"),
    require("./tokyo.whatsin.jp"),
    require("./tokyopopline.com"),
    require("./news.dwango.jp"),
    require("./mantan-web.jp"),
    require("./mainichikirei.jp"),
    require("./natalie.mu"),
    require("./actresspress.com"),
    require("./hominis.media"),
    require("./www.edgeline-tokyo.com"),
    require("./this.kiji.is"),
    require("./thetv.jp"),
    require("./www.wws-channel.com"),
    require("./apress.jp"),
    require("./realsound.jp"),
    require("./www.m-on-music.jp"),
    require("./www.musicvoice.jp"),
    require("./seigura.com"),
    require("./www.cinematoday.jp"),
    require("./www.news-postseven.com"),
    require("./diet.news-postseven.com"),
    require("./popwave.jp"),
    require("./spice.eplus.jp"),
    require("./fineboys-online.jp"),
    require("./girlswalker.com"),
    require("./www.walkerplus.com"),
    require("./mikan-incomplete.com"),
    require("./e-talentbank.co.jp"),
    require("./dogatch.jp"),
    require("./www.tvlife.jp"),
    require("./entamenext.com"),
    require("./nonno.hpplus.jp"),
    require("./cancam.jp"),
    require("./ray-web.jp"),
    require("./bisweb.jp"),
    require("./ananweb.jp"),
    require("./www.fashion-press.net"),
    require("./bltweb.jp"),
    require("./www.crank-in.net"),
    require("./blog.nogizaka46.com"),
    require("./www.keyakizaka46.com"),
    require("./www.hinatazaka46.com"),
    require("./7gogo.jp"),
    require("./twitter.com"),
    require("./www.facebook.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
]);
