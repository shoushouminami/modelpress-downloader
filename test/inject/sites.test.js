const sites = require("../../src/inject/sites");

test("Test sites.all", () => {
    expect(sites.all().length).toBe(119);
    let hosts = [];
    let urls = [];
    sites.all().forEach((module) => {
        if (typeof module.host === "string") {
            hosts.push(module.host);
        }

        if (module.url) {
            urls.push(module.url);
        }
    });
    [
        "times.abema.tv",
        "news.mynavi.jp",
        "mantan-web.jp",
        "natalie.mu",
        "this.kiji.is",
        "apress.jp",
        "www.cinematoday.jp",
        "popwave.jp",
        "spice.eplus.jp",
        "girlswalker.com",
        "www.walkerplus.com",
        "mikan-incomplete.com",
        "e-talentbank.co.jp",
        "plus.tver.jp",
        "entamenext.com",
        "cancam.jp",
        "ray-web.jp",
        "bisweb.jp",
        "bltweb.jp",
        "ananweb.jp",
        "www.nogizaka46.com",
        "www.hinatazaka46.com",
        "twitter.com",
        "www.instagram.com",
        "7gogo.jp",
        "nonno.hpplus.jp",
        "www.keyakizaka46.com",
        "fineboys-online.jp",
        "www.wws-channel.com",
        "www.news-postseven.com",
        "8760.news-postseven.com",
        "hominis.media",
        "www.edgeline-tokyo.com",
        "realsound.jp",
        "www.crank-in.net",
        "mainichikirei.jp",
        "www.rbbtoday.com",
        "www.tvlife.jp",
        "actresspress.com",
        "seigura.com",
        "www.fujitv-view.jp",
        "friday.kodansha.co.jp",
        "www.fashion-press.net",
        "lp.p.pia.jp",
        "sakurazaka46.com",
        "moviewalker.jp",
        "www.tokyoheadline.com",
        "girlsnews.tv",
        "www.astage-ent.com",
        "www.nikkansports.com",
        "yanmaga.jp",
        "ar-mag.jp",
        "hustlepress.co.jp",
        "jj-jj.net",
        "sumabo.jp",
        "i-voce.jp",
        "taishu.jp",
        "spur.hpplus.jp",
        "trilltrill.jp",
        "smart-flash.jp",
        "www.vivi.tv",
        "domani.shogakukan.co.jp",
        "encount.press",
        "www.vogue.co.jp",
        "anna-media.jp",
        "news.merumo.ne.jp",
        "www.lvtimes.net",
        "popnroll.tv",
        "www.mensnonno.jp",
        "moment.nikkan-gendai.com",
        "mer-web.jp",
        "friday.kodansha.co.jp",
        "seventeen-web.jp",
        "withonline.jp",
        "entameclip.com",
        "cmnow.jp",
        "www.thefirsttimes.jp",
        "hanako.tokyo",
        "www.cinemacafe.net",
        "25jigen.jp",
        "more.hpplus.jp",
        "www.excite.co.jp",
        "yorozoonews.jp",
        "baila.hpplus.jp",
        "sirabee.com",
        "www.animatetimes.com",
        "www.oricon.co.jp",
        "www.ytjp.jp",
        "wanibooks-newscrunch.com",
        "sweetweb.jp",
        "eiga.com",
        "tvbros.jp",
        "emomiu.jp",
        "www.lmaga.jp",
        "news.livedoor.com",
        "nikkan-spa.jp",
        "shueisha.online",
        "numero.jp",
        "www.tvguide.or.jp",
        "classy-online.jp",
        "www.billboard-japan.com",
        "korepo.com",
        "news.kstyle.com",
        "m.ex-m.jp",
        "www.tfm.co.jp",
        "trepo.jp",
        "www.fashionsnap.com",
        "www.koari.net",
        "www.cinema-life.net",
        "qjweb.jp",
        "www.sanspo.com"
    ].forEach(
        h => expect(hosts).toContain(h)
    )

    expect(urls).toContain("https://www.bilibili.com/read/home");
    expect(urls).toContain("https://mdpr.jp");
    expect(urls).toContain("https://thetv.jp");
});
