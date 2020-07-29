const {testDirectDownload, resolvePath, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    if (browser) {
        await browser.close();
    }
});


// bilibili/read
test("Test https://www.bilibili.com/read/cv2820325", async () => {
    await testDirectDownload(
        browser,
        "https://www.bilibili.com/read/cv2820325",
        "www.bilibili.com-read-cv2820325/",
        [
            "https://i0.hdslb.com/bfs/article/d18f00ce510e209b689eaee6832f820157f3dbc5.jpg",
            "https://i0.hdslb.com/bfs/article/f6ff12a812a1c49de69b20d620b1cb3225cec051.jpg",
            "https://i0.hdslb.com/bfs/article/f904750e2dd1ac5b5ce88fa832c4e1ea53c7c048.jpg",
            "https://i0.hdslb.com/bfs/article/363276193da02eeaa6a2acfceebdb04b8edee308.jpg",
            "https://i0.hdslb.com/bfs/article/51f18ffc742682c944d23ce10a93ef92c46b82f0.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page,70);
            }
        });
});

// Twitter
test.skip("Twitter tweet with 1 image", async () => {
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto("https://twitter.com/nogizaka46/status/1149196527375511552", {timeout: 10000, waitUtil: ["load", "domcontentloaded", "networkidle0"]});
    await page.addScriptTag({path: resolvePath("./mock.js")});
    await page.addScriptTag({path: resolvePath("../../build/inject.js")});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid["o"]).toBeDefined();
    expect(mid["o"]["supported"]).toBeTruthy();
    expect(mid["o"]["images"]).toHaveLength(1);
    expect(mid["o"]["folder"]).toBe("twitter.com-nogizaka46-status-1149196527375511552/");
    if (mid["o"]["ext"]) {
        expect(mid["o"]["ext"]).toBe("jpg");
        expect(mid["o"]["images"][0]).toContain("https://pbs.twimg.com/media/D_LEJgFU0AAHed4?format=jpg&name=large");
    } else {
        expect(mid["o"]["images"][0]).toContain("https://pbs.twimg.com/media/D_LEJgFU0AAHed4.jpg:large");
    }

    page.close();
});

test.skip("Twitter tweet with 2 images", async () => {
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto("https://twitter.com/nogizaka_goods/status/1149876704451497984", {timeout: 10000, waitUtil: ["load", "domcontentloaded", "networkidle0", "networkidle2"]});
    await page.addScriptTag({path: resolvePath("./mock.js")});
    await page.addScriptTag({path: resolvePath("../../build/inject.js")});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid["o"]).toBeDefined();
    expect(mid["o"]["supported"]).toBeTruthy();
    expect(mid["o"]["images"]).toHaveLength(2);
    expect(mid["o"]["folder"]).toBe("twitter.com-nogizaka_goods-status-1149876704451497984/");
    if (mid["o"]["ext"]) {
        expect(mid["o"]["ext"]).toBe("jpg");
        let images = ["https://pbs.twimg.com/media/D_UpoYuUwAAjmkl?format=jpg&name=large",
            "https://pbs.twimg.com/media/D_UppaaUcAAMzmN?format=jpg&name=large"];
        for (const image of images) {
            expect(mid["o"]["images"]).toContain(image);
        }
    } else {
        let images = ["https://pbs.twimg.com/media/D_UpoYuUwAAjmkl.jpg:large",
            "https://pbs.twimg.com/media/D_UppaaUcAAMzmN.jpg:large"];
        for (const image of images) {
            expect(mid["o"]["images"]).toContain(image);
        }
    }

    page.close();
});

// the website is blocked in some countries
test("Test mantan-web.jp page", async () => {
    await testDirectDownload(
        browser,
        "https://mantan-web.jp/article/20191228dog00m200028000c.html",
        "mantan-web.jp-article-20191228dog00m200028000c.html/",
        [{
            retries: ["https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size9.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size8.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size7.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size10.jpg"
        }
            , {
            retries: ["https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size9.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size8.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size7.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size10.jpg"
        }
            , {
            retries: ["https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size9.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size8.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size7.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size10.jpg"
        }
            , {
            retries: ["https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size9.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size8.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size7.jpg", "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size6.jpg"],
            url: "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size10.jpg"
        }]
    );
});


// https://this.kiji.is/
test("Test this.kiji.is news page", async () => {
    await testDirectDownload(
        browser,
        "https://this.kiji.is/661084856750736481",
        "this.kiji.is-661084856750736481/",
        ["https://nordot-res.cloudinary.com/ch/images/661084824142857313/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/661084830553883745/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/661084837809210465/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/661084846522303585/origin_1.jpg"]);
});

