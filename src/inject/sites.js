const modulesWithHostname = {};
const modules = [];
const {Index} = require("../utils/flexsearch.bundle");
const index = new Index({
    tokenize: "forward"
});
const logger = require("../logger2")(module.id);

function getByWindowLocation(location) {
    return getByHost(location.host);
}

function getByHost(host) {
    const m = modulesWithHostname[host];
    logger.debug("Get module by host=", host, "module=", m);
    return m;
}

function validate(siteModule) {
    if (siteModule.inject &&
        typeof siteModule.inject === "function" &&
        siteModule.host &&
        typeof siteModule.host === "string") {
        if (typeof siteModule.host !== "string" && !siteModule.hidden && !siteModule.url) {
            logger.error("Missing site url: " + siteModule);
        }

        if (siteModule.altHosts) {
            if (!Array.isArray(siteModule.altHosts) || !siteModule.altHosts.every(h => typeof h === "string")) {
                logger.error("altHosts not array or host not string: " + siteModule);
            }
        }

        return true;
    }

    logger.error("Bad module: " + siteModule);
    return false;
}

function registerHostToModule(host, siteModule) {
    if (modulesWithHostname[host]) {
        logger.error("Duplicate site module", host);
        throw Error("Duplicate site module: " + host);
    }
    modulesWithHostname[host] = siteModule;
}

function register(siteModule) {
    if (validate(siteModule)) {
        let len = modules.push(siteModule);
        index.add(len - 1, siteModule.host + " " + siteModule.url + " " +
            siteModule.host.split("\.").join(" ") +
            (siteModule.altHosts ? siteModule.altHosts.map(h => h.split("\.").join(" ")).join(" "): ""));
        registerHostToModule(siteModule.host, siteModule);
        (siteModule.altHosts || []).forEach(h => registerHostToModule(h, siteModule));

    }
}

(function(siteModuleList){
    for(const siteModule of siteModuleList) {
        register(siteModule);
    }
})([
    require("./mdpr.jp"),
    require("./www.oricon.co.jp"),
    require("./bezzy.jp"),
    require("./times.abema.tv"),
    require("./shueisha.online"),
    require("./wpb.shueisha.co.jp"),
    require("./www.rbbtoday.com"),
    require("./www.nikkansports.com"),
    require("./moment.nikkan-gendai.com"),
    require("./nikkan-spa.jp"),
    require("./www.sanspo.com"),
    require("./www.sponichi.co.jp"),
    require("./prtimes.jp"),
    require("./news.mynavi.jp"),
    require("./www.fujitv-view.jp"),
    require("./friday.kodansha.co.jp"),
    require("./www.daily.co.jp"),
    require("./www.tokyoheadline.com"),
    require("./bunshun.jp"),
    require("./www.ytjp.jp"),
    require("./www.thefirsttimes.jp"),
    require("./hanako.tokyo"),
    require("./yorozoonews.jp"),
    require("./mantan-web.jp"),
    require("./mainichikirei.jp"),
    require("./mainichi.jp"),
    require("./news.merumo.ne.jp"),
    require("./www.excite.co.jp"),
    require("./natalie.mu"),
    require("./news.livedoor.com"),
    require("./wanibooks-newscrunch.com"),
    require("./actresspress.com"),
    require("./hominis.media"),
    require("./mezamashi.media"),
    require("./emomiu.jp"),
    require("./www.edgeline-tokyo.com"),
    require("./this.kiji.is"),
    require("./thetv.jp"),
    require("./www.wws-channel.com"),
    require("./lp.p.pia.jp"),
    require("./trepo.jp"),
    require("./www.lvtimes.net"),
    require("./www.lmaga.jp"),
    require("./apress.jp"),
    require("./encount.press"),
    require("./girlsnews.tv"),
    require("./glassgirl.info"),
    require("./www.crank-in.net"),
    require("./www.billboard-japan.com"),
    require("./realsound.jp"),
    require("./www.musicvoice.jp"),
    require("./seigura.com"),
    require("./25jigen.jp"),
    require("./www.astage-ent.com"),
    require("./www.cinematoday.jp"),
    require("./www.cinemacafe.net"),
    require("./www.cinema-life.net"),
    require("./www.news-postseven.com"),
    require("./j7p.jp"),
    require("./popwave.jp"),
    require("./popnroll.tv"),
    require("./spice.eplus.jp"),
    require("./fineboys-online.jp"),
    require("./girlswalker.com"),
    require("./www.walkerplus.com"),
    require("./moviewalker.jp"),
    require("./eiga.com"),
    require("./mikan-incomplete.com"),
    require("./sirabee.com"),
    require("./e-talentbank.co.jp"),
    require("./www.tvlife.jp"),
    require("./tvbros.jp"),
    require("./www.tvguide.or.jp"),
    require("./entamenext.com"),
    require("./entameclip.com"),
    require("./www.entax.news"),
    require("./qjweb.jp"),
    require("./korepo.com"),
    require("./news.kstyle.com"),
    require("./www.koari.net"),
    require("./bltweb.jp"),
    require("./websunday.net"),
    require("./smart-flash.jp"),
    require("./yanmaga.jp"),
    require("./www.animatetimes.com"),
    require("./www.vogue.co.jp"),
    require("./nonno.hpplus.jp"),
    require("./www.mensnonno.jp"),
    require("./jj-jj.net"),
    require("./cancam.jp"),
    require("./sweetweb.jp"),
    require("./ray-web.jp"),
    require("./bisweb.jp"),
    require("./ar-mag.jp"),
    require("./ananweb.jp"),
    require("./anna-media.jp"),
    require("./www.fashion-press.net"),
    require("./www.fashionsnap.com"),
    require("./numero.jp"),
    require("./classy-online.jp"),
    require("./i-voce.jp"),
    require("./spur.hpplus.jp"),
    require("./more.hpplus.jp"),
    require("./baila.hpplus.jp"),
    require("./maquia.hpplus.jp"),
    require("./trilltrill.jp"),
    require("./www.vivi.tv"),
    require("./domani.shogakukan.co.jp"),
    require("./mer-web.jp"),
    require("./seventeen-web.jp"),
    require("./withonline.jp"),
    require("./cmnow.jp"),
    require("./dot.asahi.com"),
    require("./www.nogizaka46.com"),
    require("./www.keyakizaka46.com"),
    require("./www.hinatazaka46.com"),
    require("./sakurazaka46.com"),
    require("./7gogo.jp"),
    require("./twitter.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
    require("./m.ex-m.jp"),
    require("./www.tfm.co.jp"),
    require("./storage.mainichikirei.jp"),
    require("./www.nhk.or.jp"),
    require("./www.bubkaweb.com"),
]);

function all() {
    return modules.slice();
}

function search(query) {
    const result = index.search(query);
    const ret = [];
    for (const r of result) {
        ret.push(modules[r]);
    }

    return ret;
}

module.exports = {
    getByWindowLocation: getByWindowLocation,
    getByHost: getByHost,
    all: all,
    search: search
}
