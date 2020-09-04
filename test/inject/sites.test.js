const sites = require("../../src/inject/sites");

test("Test sites.all", () => {
    expect(sites.all().length).toBe(36);
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
    expect(hosts).toContain("www.facebook.com");
    expect(hosts).toContain("www.instagram.com");
    expect(hosts).toContain("7gogo.jp");
    expect(hosts).toContain("nonno.hpplus.jp");
    expect(hosts).toContain("www.keyakizaka46.com");
    expect(hosts).toContain("teens.mynavi.jp");
    expect(hosts).toContain("fineboys-online.jp");
    expect(hosts).toContain("www.wws-channel.com");
    expect(urls).toContain("https://www.bilibili.com/read/home");
    expect(urls).toContain("https://mdpr.jp");
    expect(urls).toContain("https://thetv.jp");
});
