const {getSiteModule} = require("../src/inject");

test("Test getSiteModule", () => {
    expect(getSiteModule({host: "google.com"})).toBeUndefined();
    expect(getSiteModule({host: "mdpr.jp"})).toBe(require("../src/inject/mdpr.jp"));
    expect(getSiteModule({host: "talent.thetv.jp"})).toBe(require("../src/inject/thetv.jp"));
});
