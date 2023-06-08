const {getSiteModule} = require("../src/inject");

test("Test getSiteModule", () => {
    expect(getSiteModule({host: "google.com"})).toBeUndefined();
    expect(getSiteModule({host: "mdpr.jp"})).toBe(require("../src/inject/mdpr.jp"));
    expect(getSiteModule({host: "talent.thetv.jp"})).toBe(require("../src/inject/thetv.jp"));
    expect(getSiteModule({host: "www.tfm.co.jp"}))
        .toBe(require("../src/inject/www.tfm.co.jp"));
    expect(getSiteModule({host: "tfm.co.jp"}))
        .toBe(require("../src/inject/www.tfm.co.jp"));
    expect(getSiteModule({host: "m.ex-m.jp"}))
        .toBe(require("../src/inject/m.ex-m.jp"));
    expect(getSiteModule({host: "m.ldhgirls-m.jp"}))
        .toBe(require("../src/inject/m.ex-m.jp"));
    expect(getSiteModule({host: "plus.ananweb.jp"}))
        .toBe(require("../src/inject/ananweb.jp"));
    expect(getSiteModule({host: "nordot.app"}))
        .toBe(require("../src/inject/this.kiji.is"));
    expect(getSiteModule({host: "friday.gold"}))
        .toBe(require("../src/inject/friday.gold"));
    expect(getSiteModule({host: "www.mina.ne.jp"}))
        .toBe(require("../src/inject/www.mina.ne.jp"));
});
