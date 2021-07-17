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
    require("./style.nikkei.com"),
    require("./times.abema.tv"),
    require("./www.rbbtoday.com"),
    require("./www.nikkansports.com"),
    require("./moment.nikkan-gendai.com"),
    require("./news.mynavi.jp"),
    require("./www.fujitv-view.jp"),
    require("./friday.kodansha.co.jp"),
    require("./www.daily.co.jp"),
    require("./www.tokyoheadline.com"),
    require("./news.dwango.jp"),
    require("./mantan-web.jp"),
    require("./mainichikirei.jp"),
    require("./news.merumo.ne.jp"),
    require("./natalie.mu"),
    require("./actresspress.com"),
    require("./hominis.media"),
    require("./www.edgeline-tokyo.com"),
    require("./this.kiji.is"),
    require("./thetv.jp"),
    require("./www.wws-channel.com"),
    require("./lp.p.pia.jp"),
    require("./www.lvtimes.net"),
    require("./apress.jp"),
    require("./encount.press"),
    require("./girlsnews.tv"),
    require("./hustlepress.co.jp"),
    require("./www.crank-in.net"),
    require("./realsound.jp"),
    require("./www.m-on-music.jp"),
    require("./www.musicvoice.jp"),
    require("./seigura.com"),
    require("./www.astage-ent.com"),
    require("./www.cinematoday.jp"),
    require("./www.news-postseven.com"),
    require("./8760.news-postseven.com"),
    require("./popwave.jp"),
    require("./popnroll.tv"),
    require("./spice.eplus.jp"),
    require("./fineboys-online.jp"),
    require("./girlswalker.com"),
    require("./www.walkerplus.com"),
    require("./moviewalker.jp"),
    require("./mikan-incomplete.com"),
    require("./e-talentbank.co.jp"),
    require("./dogatch.jp"),
    require("./www.tvlife.jp"),
    require("./sumabo.jp"),
    require("./entamenext.com"),
    require("./exweb.jp"),
    require("./bltweb.jp"),
    require("./taishu.jp"),
    require("./smart-flash.jp"),
    require("./yanmaga.jp"),
    require("./www.vogue.co.jp"),
    require("./nonno.hpplus.jp"),
    require("./www.mensnonno.jp"),
    require("./jj-jj.net"),
    require("./cancam.jp"),
    require("./ray-web.jp"),
    require("./bisweb.jp"),
    require("./ar-mag.jp"),
    require("./ananweb.jp"),
    require("./anna-media.jp"),
    require("./www.fashion-press.net"),
    require("./i-voce.jp"),
    require("./spur.hpplus.jp"),
    require("./trilltrill.jp"),
    require("./www.vivi.tv"),
    require("./domani.shogakukan.co.jp"),
    require("./mer-web.jp"),
    require("./blog.nogizaka46.com"),
    require("./www.keyakizaka46.com"),
    require("./www.hinatazaka46.com"),
    require("./sakurazaka46.com"),
    require("./7gogo.jp"),
    require("./twitter.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
]);
