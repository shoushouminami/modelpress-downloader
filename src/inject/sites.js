const modulesWithHostname = {};
const modules = [];
const {Index} = require("../utils/flexsearch.bundle");
const index = new Index({
    tokenize: "forward"
});

function get(location) {
    if (modulesWithHostname[location.host]) {
        return modulesWithHostname[location.host];
    }

    return false;
}

function validate(siteMoudle) {
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
}

function register(siteModule) {
    if (validate(siteModule)) {
        let len = modules.push(siteModule);
        index.add(len - 1, siteModule.host + " " + siteModule.url + " " + siteModule.host.split("\.").join(" "));
        if (typeof siteModule.host === "string") {
            if (modulesWithHostname[siteModule.host]) {
                console.error("Duplicated site script: " + siteModule.host);
                throw Error("Duplicated site script: " + siteModule.host);
            }
            modulesWithHostname[siteModule.host] = siteModule;
        }
    }
}

(function(siteModuleList){
    for(const siteModuleName of siteModuleList) {
        register(siteModuleName);
    }
})([
    require("./mdpr.jp"),
    require("./www.oricon.co.jp"),
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
    require("./www.thefirsttimes.jp"),
    require("./hanako.tokyo"),
    require("./yorozoonews.jp"),
    require("./mantan-web.jp"),
    require("./mainichikirei.jp"),
    require("./news.merumo.ne.jp"),
    require("./www.excite.co.jp"),
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
    require("./www.musicvoice.jp"),
    require("./okmusic.jp"),
    require("./seigura.com"),
    require("./25jigen.jp"),
    require("./www.astage-ent.com"),
    require("./www.cinematoday.jp"),
    require("./www.cinemacafe.net"),
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
    require("./sirabee.com"),
    require("./e-talentbank.co.jp"),
    require("./plus.tver.jp"),
    require("./www.tvlife.jp"),
    require("./sumabo.jp"),
    require("./entamenext.com"),
    require("./entameclip.com"),
    require("./exweb.jp"),
    require("./bltweb.jp"),
    require("./taishu.jp"),
    require("./smart-flash.jp"),
    require("./yanmaga.jp"),
    require("./www.animatetimes.com"),
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
    require("./more.hpplus.jp"),
    require("./baila.hpplus.jp"),
    require("./trilltrill.jp"),
    require("./www.vivi.tv"),
    require("./domani.shogakukan.co.jp"),
    require("./mer-web.jp"),
    require("./seventeen-web.jp"),
    require("./withonline.jp"),
    require("./cmnow.jp"),
    require("./www.loveteen.jp"),
    require("./www.nogizaka46.com"),
    require("./www.keyakizaka46.com"),
    require("./www.hinatazaka46.com"),
    require("./sakurazaka46.com"),
    require("./7gogo.jp"),
    require("./twitter.com"),
    require("./www.bilibili.com"),
    require("./www.instagram.com"),
]);

exports.get = get;
exports.all = function (){
    return modules.slice();
}

exports.search = function (query) {
    const result = index.search(query);
    const ret = [];
    for (const r of result) {
        ret.push(modules[r]);
    }

    return ret;
}
