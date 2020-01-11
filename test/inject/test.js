const puppeteer = require("puppeteer");
const {testDirectDownload, resolvePath} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            "--disable-extensions-except=../build",
            "--load-extension=../build",
            "--lang=zh-CN,zh",
            "--no-sandbox"
        ],
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    });
});

afterAll(async () => {
    await browser.close();
});

// Test blog.nogizaka46.com
test("Test http://blog.nogizaka46.com/fourth/2019/06/051125.php", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/06/051125.php",
        "blog.nogizaka46.com-fourth-2019-06-051125.php/",
        [
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0004.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0001.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0002.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0003.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0000.jpg"
        ]);
});

test("Image url is in href of parent A node and hosted on awalker.jp", async () => {
    const page = await browser.newPage();
    await page.goto("http://blog.nogizaka46.com/momoko.oozono/2019/09/052573.php");
    await page.addScriptTag({path: resolvePath("./mock.js")});
    await page.addScriptTag({path: resolvePath("../../src/inject.js")});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid["ext"]).toBeUndefined();
    expect(mid["o"]).toBeDefined();
    expect(mid["o"]["supported"]).toBeTruthy();
    expect(mid["o"]["images"]).toStrictEqual([
        {
            "imageUrl": "http://dcimg.awalker.jp/i/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22",
        }
    ]);
    expect(mid["o"]["folder"]).toBe("blog.nogizaka46.com-momoko.oozono-2019-09-052573.php/");
    page.close();
});

test("Image url is in src of IMG node", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/06/051238.php",
        "blog.nogizaka46.com-fourth-2019-06-051238.php/",
        [
        "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0003.jpg",
        "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0004.jpg",
        "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0000.jpg",
        "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0001.jpg",
        "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0002.jpg"
    ]);
});

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/12/053960.php",
        "blog.nogizaka46.com-fourth-2019-12-053960.php/",
        [
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384354682.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384536971.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384538742.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384540660.jpg"
        ]);
});

// Test mdpr.jp
test("Test https://mdpr.jp/news/detail/1844622", async () => {
    await testDirectDownload(
        browser,
        "https://mdpr.jp/news/detail/1844622",
        "mdpr.jp-news-detail-1844622/",
        [
            "https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg",
            "https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg",
            "https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg",
            "https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg",
            "https://img-mdpr.freetls.fastly.net/article/a2dA/wm/a2dADq2nRw44R-VCTCAy5bZGZzviIvhDjUyC5e6GDek.jpg"
        ]);
});

test("Test https://mdpr.jp/photo/detail/6942679", async () => {
    await testDirectDownload(
        browser,
        "https://mdpr.jp/photo/detail/6942679",
        "mdpr.jp-photo-detail-6942679/",
        [
            "https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg",
            "https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg",
            "https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg",
            "https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg",
            "https://img-mdpr.freetls.fastly.net/article/a2dA/wm/a2dADq2nRw44R-VCTCAy5bZGZzviIvhDjUyC5e6GDek.jpg"
        ]);
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
        ]);
});

// Twitter
test("Twitter tweet with 1 image", async () => {
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto("https://twitter.com/nogizaka46/status/1149196527375511552");
    await page.addScriptTag({path: resolvePath("./mock.js")});
    await page.addScriptTag({path: resolvePath("../../src/inject.js")});

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

test("Twitter tweet with 2 images", async () => {
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto("https://twitter.com/nogizaka_goods/status/1149876704451497984");
    await page.addScriptTag({path: resolvePath("./mock.js")});
    await page.addScriptTag({path: resolvePath("../../src/inject.js")});

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

// tokyopopline.com
test("Test tokyopopline.com", async () => {
    await testDirectDownload(
        browser,
        "https://tokyopopline.com/archives/120390",
        "tokyopopline.com-archives-120390/",
        ["https://tokyopopline.com/images/2019/09/35aa78b184a2d03872048d9f935cf013.jpg",
            "https://tokyopopline.com/images/2019/09/e2b04f74e8f47d7b1fd9a87bcaa0188c.jpg",
            "https://tokyopopline.com/images/2019/09/78572fb300b61a74dc1ec33f8c8c4424.jpg",
            "https://tokyopopline.com/images/2019/09/729501a0b060b68cda4bb2a97aab4a52.jpg",
            "https://tokyopopline.com/images/2019/09/ff4b19d5911f472538d5cea0c3d6e029.jpg",
            "https://tokyopopline.com/images/2019/09/44e9a4c23de9ad87377180e75be4179a.jpg",
            "https://tokyopopline.com/images/2019/09/2e1d5ed03d8839391fe8293d9f3e68c8.jpg"]);
});

// dwango.jp
test("Test dwango.jp entertainment article", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/entertainment/40172-1908",
        "news.dwango.jp-entertainment-40172-1908/",
        ["https://news-img.dwango.jp/uploads/medium/file/000/167/184/167184/ltj07be0faa8psjyufy.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/180/167180/pqpoq9be1t1i9yzq49n.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/181/167181/rl4v3qka2lrirqxaj1a.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/182/167182/i558fmdnxnh5bsd3yfk.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/183/167183/l2xbf3ihbiu8s9dntyq.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/185/167185/pkg6cwebm3d7b60ymp8.jpg",
            "https://news-img.dwango.jp/uploads/medium/file/000/167/186/167186/msxzyejran9bgdcwhzu.jpg"]);
});

test("Test dwango.jp animeseiyu article with only 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/animeseiyu/40177-1908",
        "news.dwango.jp-animeseiyu-40177-1908/",
        ["https://news-img.dwango.jp/uploads/medium/file/000/167/385/167385/okazp4b30ywjm1u8b4l.jpg"]);
});

// http://popwave.jp/
test("Test popwave.jp archives article", async () => {
    await testDirectDownload(
        browser,
        "http://popwave.jp/archives/6586",
        "popwave.jp-archives-6586/",
        ["http://popwave.jp/wp-content/uploads/2019/08/collage.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub2.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub6.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub5.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub4.jpg",
            "http://popwave.jp/wp-content/uploads/2019/08/sub3.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

// https://mikan-incomplete.com
test("Test mikan-incomplete.com game article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/game/55932",
        "mikan-incomplete.com-game-55932/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/449.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/124.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/179-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/207.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/226-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/173-2.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/174.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/238.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/268.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/316-2.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/332.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/410.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/414.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/426.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/430.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/442.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/088-1.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/114.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/186.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/214.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/230.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/301.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/444.jpg"]);
});

test("Test mikan-incomplete.com character article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/character/55983",
        "mikan-incomplete.com-character-55983/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/08d1ca8582b80c45a5b3b3d278e576c8.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/024423ecc3cd13d0cd6c054656bcae05.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/0e8bc1e7970b1324d77e045ba8d3b1a4.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/18a7f4f545a16ca9c72551e79046d033.jpg",
            "https://mikan-incomplete.com/wp-content/uploads/2019/09/f1ea29a728dafa39c6df1e680d98475a.jpg"]);
});

test("Test mikan-incomplete.com girls/news-girls article", async () => {
    await testDirectDownload(
        browser,
        "https://mikan-incomplete.com/girls/news-girls/55579",
        "mikan-incomplete.com-girls-news-girls-55579/",
        ["https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-941773-17-1.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-941773-17.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-448624-9.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-890535-11.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-155733-7.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-175733-6.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-347954-4.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-870129-5.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-990737-3.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-446123-8.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-211403-13.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-234826-14.jpg","https://mikan-incomplete.com/wp-content/uploads/2019/09/d1735-397-954803-15.jpg"]
    );
});

// cancam.jp
test("Test cancam.jp magzine main page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/cancam201911",
        "cancam.jp-cancam201911/",
        ["https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_cover-20190919180345.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P7-20190919180348.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P9-20190919180349.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P28-20190919180356.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P29-20190919180358.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P22-20190919180353.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P23-20190919180355.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P56-20190919180938.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P57-20190919180403.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P78-20190919180406.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P72-20190919180405.jpg","https://cancam.jp/wp-content/uploads/2019/09/CanCam201911_P21-20190919180351.jpg"]
    );
});

test("Test cancam.jp itgirl home page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/category/itgirl/marikokaji",
        "cancam.jp-archives-category-itgirl-marikokaji/",
        ["https://cancam.jp/wp-content/uploads/2018/06/8573e8996cd2d1d57663c8b10ed9a8a2-20191219175830.png"]
    );
});

test("Test cancam.jp archive article", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/711412",
        "cancam.jp-archives-711412/",
        ["https://cancam.jp/wp-content/uploads/2019/09/01-20190920150029.jpg","https://cancam.jp/wp-content/uploads/2019/09/02-20190920150031.jpg","https://cancam.jp/wp-content/uploads/2019/09/03-20190920150033.jpg","https://cancam.jp/wp-content/uploads/2019/09/abbfcb00ca660382d990baad8261f55b-20190920150035.jpg"]
    );
});

test("Test cancam.jp model home page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/category/model/sayurimatsumura",
        "cancam.jp-archives-category-model-sayurimatsumura/",
        ["https://cancam.jp/wp-content/uploads/2017/02/0ff87d29781c0b487703d1637e6dbb7e-20190620182123.jpg","https://cancam.jp/wp-content/uploads/2017/11/DM4jzwIUEAAjm0C-20171107135337.jpg","https://cancam.jp/wp-content/uploads/2017/02/sayurimatsumura_profile_gedan_1-20170301184924.jpg","https://cancam.jp/wp-content/uploads/2017/02/sayurimatsumura_profile_gedan_2-20170301184925.jpg","https://cancam.jp/wp-content/uploads/2017/02/sayurimatsumura_profile_gedan_3-20170301184925.jpg"]
    );
});

test("Test cancam.jp media collection page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/medias/%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86",
        "cancam.jp-medias-%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86/",
        ["https://cancam.jp/wp-content/uploads/2017/12/CanCam201802_cover-20171220165822.jpg","https://cancam.jp/wp-content/uploads/2017/12/ACCU_1P-20171211185335.jpg","https://cancam.jp/wp-content/uploads/2017/11/2285f0d5676d0576d15a0226aba3f613-20171108130452-20171108132029.jpg","https://cancam.jp/wp-content/uploads/2017/09/IMG_9561-20170928135633.jpg","https://cancam.jp/wp-content/uploads/2017/09/MG_8563-20170928135627.jpg","https://cancam.jp/wp-content/uploads/2017/09/MG_8519-20170928135621.jpg","https://cancam.jp/wp-content/uploads/2017/09/MG_8468-20170928135616.jpg","https://cancam.jp/wp-content/uploads/2017/10/12aeb9453f9519d2a2e60374dedcf54f-20171001202913.jpg","https://cancam.jp/wp-content/uploads/2017/10/bf90e36116ba7423ba35fd4abff303fa-20171001202908.jpg","https://cancam.jp/wp-content/uploads/2017/10/dadd0a1bb09b0eefb6035608b7296431-20171001202902.jpg","https://cancam.jp/wp-content/uploads/2017/10/8402-20171005165624.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8389-20171005165458.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8405-20171005165431.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8397-20171005165348.jpg","https://cancam.jp/wp-content/uploads/2017/11/IMG_2287-20171123203840.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8396-20171005165311.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8386-20171005165251.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8377-20171005165233.jpg","https://cancam.jp/wp-content/uploads/2017/10/MG_8369-20171005165217.jpg","https://cancam.jp/wp-content/uploads/2017/09/asahinagu_11-20170922215716.jpg"]
    );
});

test("Test bltweb.jp page", async () => {
    await testDirectDownload(
        browser,
        "https://bltweb.jp/2019/12/10/blt2020newyear_n46_3-4_store/",
        "bltweb.jp-2019-12-10-blt2020newyear_n46_3-4_store-/",
        ["https://bltweb.jp/wp/wp-content/uploads/2019/12/20191215_BLT2020-02_NEWYEAR_H1_STORE.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/d65a7000af282857e9caa178de0ea148.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/8751914e48f26781804ae4ea5569ec3f.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/BLT2020-02_3rd-4th_SPECIAL-BOOK-1.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kubo.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_yoda.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_endo.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kaki.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-hayasi.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-ishida.jpg"]
    );
});

// the websit is blocked in some countries
test("Test mantan-web.jp page", async () => {
    await testDirectDownload(
        browser,
        "https://mantan-web.jp/article/20191228dog00m200028000c.html",
        "mantan-web.jp-article-20191228dog00m200028000c.html/",
        ["https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/001_size10.jpg"
            , "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/002_size10.jpg"
            , "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/003_size10.jpg"
            , "https://storage.mantan-web.jp/images/2019/12/28/20191228dog00m200028000c/004_size10.jpg"]
    );
});