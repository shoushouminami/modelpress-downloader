const sites = require("../../src/inject/sites");

test("Test sites.all", () => {
    expect(sites.all().length).toBe(80);
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

    expect(hosts).toContain("times.abema.tv");
    expect(hosts).toContain("news.mynavi.jp");
    expect(hosts).toContain("tokyopopline.com");
    expect(hosts).toContain("news.dwango.jp");
    expect(hosts).toContain("mantan-web.jp");
    expect(hosts).toContain("natalie.mu");
    expect(hosts).toContain("this.kiji.is");
    expect(hosts).toContain("apress.jp");
    expect(hosts).toContain("www.cinematoday.jp");
    expect(hosts).toContain("popwave.jp");
    expect(hosts).toContain("spice.eplus.jp");
    expect(hosts).toContain("girlswalker.com");
    expect(hosts).toContain("www.walkerplus.com");
    expect(hosts).toContain("mikan-incomplete.com");
    expect(hosts).toContain("e-talentbank.co.jp");
    expect(hosts).toContain("dogatch.jp");
    expect(hosts).toContain("entamenext.com");
    expect(hosts).toContain("cancam.jp");
    expect(hosts).toContain("ray-web.jp");
    expect(hosts).toContain("bisweb.jp");
    expect(hosts).toContain("bltweb.jp");
    expect(hosts).toContain("ananweb.jp");
    expect(hosts).toContain("blog.nogizaka46.com");
    expect(hosts).toContain("www.hinatazaka46.com");
    expect(hosts).toContain("twitter.com");
    expect(hosts).toContain("www.instagram.com");
    expect(hosts).toContain("7gogo.jp");
    expect(hosts).toContain("nonno.hpplus.jp");
    expect(hosts).toContain("www.keyakizaka46.com");
    expect(hosts).toContain("fineboys-online.jp");
    expect(hosts).toContain("www.wws-channel.com");
    expect(hosts).toContain("www.news-postseven.com");
    expect(hosts).toContain("8760.news-postseven.com");
    expect(hosts).toContain("hominis.media");
    expect(hosts).toContain("www.edgeline-tokyo.com");
    expect(hosts).toContain("realsound.jp");
    expect(hosts).toContain("www.crank-in.net");
    expect(hosts).toContain("mainichikirei.jp");
    expect(hosts).toContain("www.rbbtoday.com");
    expect(hosts).toContain("www.tvlife.jp");
    expect(hosts).toContain("www.m-on-music.jp");
    expect(hosts).toContain("actresspress.com");
    expect(hosts).toContain("seigura.com");
    expect(hosts).toContain("www.fujitv-view.jp");
    expect(hosts).toContain("friday.kodansha.co.jp");
    expect(hosts).toContain("www.fashion-press.net");
    expect(hosts).toContain("lp.p.pia.jp");
    expect(hosts).toContain("sakurazaka46.com");
    expect(hosts).toContain("moviewalker.jp");
    expect(hosts).toContain("www.tokyoheadline.com");
    expect(hosts).toContain("girlsnews.tv");
    expect(hosts).toContain("www.astage-ent.com");
    expect(hosts).toContain("www.nikkansports.com");
    expect(hosts).toContain("yanmaga.jp");
    expect(hosts).toContain("ar-mag.jp");
    expect(hosts).toContain("hustlepress.co.jp");
    expect(hosts).toContain("jj-jj.net");
    expect(hosts).toContain("sumabo.jp");
    expect(hosts).toContain("i-voce.jp");
    expect(hosts).toContain("taishu.jp");
    expect(hosts).toContain("spur.hpplus.jp");
    expect(hosts).toContain("trilltrill.jp");
    expect(hosts).toContain("smart-flash.jp");
    expect(hosts).toContain("www.vivi.tv");
    expect(hosts).toContain("domani.shogakukan.co.jp");
    expect(hosts).toContain("style.nikkei.com");
    expect(hosts).toContain("encount.press");
    expect(hosts).toContain("www.vogue.co.jp");
    expect(hosts).toContain("anna-media.jp");
    expect(hosts).toContain("news.merumo.ne.jp");
    expect(hosts).toContain("www.lvtimes.net");
    expect(hosts).toContain("popnroll.tv");
    expect(hosts).toContain("www.mensnonno.jp");
    expect(hosts).toContain("moment.nikkan-gendai.com");
    expect(hosts).toContain("mer-web.jp");

    expect(urls).toContain("https://www.bilibili.com/read/home");
    expect(urls).toContain("https://mdpr.jp");
    expect(urls).toContain("https://thetv.jp");
});
