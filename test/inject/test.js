const puppeteer = require("puppeteer");
const {testDirectDownload, resolvePath} = require("./testbase");
const pageutils = require("../pageutils");

const dummyItems = function (count) {
    let ret = [];
    for (let i = 0 ; i < count; i++) {
        ret.push({});
    }

    return ret;
};

let browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            "--disable-extensions-except=" + resolvePath( "../../build"),
            "--load-extension=" + resolvePath( "../../build"),
            "--lang=zh-CN,zh",
            "--no-sandbox"
        ],
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
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
    await page.addScriptTag({path: resolvePath("../../build/inject.js")});

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

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/staff/2017/07/039636.php",
        "blog.nogizaka46.com-staff-2017-07-039636.php/",
        [
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A0%E9%A3%9B%E9%B3%A5.JPG",
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A1%E4%BA%95%E4%B8%8A.JPG",
        ].concat(dummyItems(21)));
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

test("Test apparel.mdpr.jp news", async () => {
    await testDirectDownload(
        browser,
        "https://apparel.mdpr.jp/column/fashion_news/12057",
        "apparel.mdpr.jp-column-fashion_news-12057/",
        [
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160640/main4.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160643/sub14.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160719/sub9.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160638/sub10.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160646/sub24.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160652/sub34.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160658/sub42.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160701/sub53.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160706/sub63.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160710/sub71.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160714/sub8.jpg",
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test apparel.mdpr.jp photo page", async () => {
    await testDirectDownload(
        browser,
        "https://apparel.mdpr.jp/photo/12057",
        "apparel.mdpr.jp-photo-12057/",
        [
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160640/main4.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160643/sub14.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160719/sub9.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160638/sub10.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160646/sub24.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160652/sub34.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160658/sub42.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160701/sub53.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160706/sub63.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160710/sub71.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160714/sub8.jpg",
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
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
        [
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/184/167184/ltj07be0faa8psjyufy.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/184/167184/ltj07be0faa8psjyufy.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/180/167180/pqpoq9be1t1i9yzq49n.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/180/167180/pqpoq9be1t1i9yzq49n.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/181/167181/rl4v3qka2lrirqxaj1a.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/181/167181/rl4v3qka2lrirqxaj1a.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/182/167182/i558fmdnxnh5bsd3yfk.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/182/167182/i558fmdnxnh5bsd3yfk.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/183/167183/l2xbf3ihbiu8s9dntyq.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/183/167183/l2xbf3ihbiu8s9dntyq.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/185/167185/pkg6cwebm3d7b60ymp8.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/185/167185/pkg6cwebm3d7b60ymp8.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/186/167186/msxzyejran9bgdcwhzu.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/186/167186/msxzyejran9bgdcwhzu.jpg"
            }

        ]
    );
});

test("Test dwango.jp animeseiyu article with only 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/animeseiyu/40177-1908",
        "news.dwango.jp-animeseiyu-40177-1908/",
        [{
            retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/385/167385/okazp4b30ywjm1u8b4l.jpg"],
            url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/385/167385/okazp4b30ywjm1u8b4l.jpg"
        }]);
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
        ["https://cancam.jp/uploads/2019/09/CanCam201911_cover-20190919180345.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P7-20190919180348.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P9-20190919180349.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P28-20190919180356.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P29-20190919180358.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P22-20190919180353.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P23-20190919180355.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P56-20190919180938.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P57-20190919180403.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P78-20190919180406.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P72-20190919180405.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P21-20190919180351.jpg"]
    );
});

test("Test cancam.jp itgirl home page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/category/itgirl/marikokaji",
        "cancam.jp-archives-category-itgirl-marikokaji/",
        ["https://cancam.jp/uploads/2018/06/8573e8996cd2d1d57663c8b10ed9a8a2-20191219175830.png"]
    );
});

test("Test cancam.jp archive article", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/711412",
        "cancam.jp-archives-711412/",
        ["https://cancam.jp/uploads/2019/09/01-20190920150029.jpg","https://cancam.jp/uploads/2019/09/02-20190920150031.jpg","https://cancam.jp/uploads/2019/09/03-20190920150033.jpg","https://cancam.jp/uploads/2019/09/abbfcb00ca660382d990baad8261f55b-20190920150035.jpg"]
    );
});

test("Test cancam.jp model home page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/archives/category/model/sayurimatsumura",
        "cancam.jp-archives-category-model-sayurimatsumura/",
        ["https://cancam.jp/uploads/2017/02/0ff87d29781c0b487703d1637e6dbb7e-20190620182123.jpg","https://cancam.jp/uploads/2017/11/DM4jzwIUEAAjm0C-20171107135337.jpg","https://cancam.jp/uploads/2017/02/sayurimatsumura_profile_gedan_1-20170301184924.jpg","https://cancam.jp/uploads/2017/02/sayurimatsumura_profile_gedan_2-20170301184925.jpg","https://cancam.jp/uploads/2017/02/sayurimatsumura_profile_gedan_3-20170301184925.jpg"]
    );
});

test("Test cancam.jp media collection page", async () => {
    await testDirectDownload(
        browser,
        "https://cancam.jp/medias/%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86",
        "cancam.jp-medias-%e3%80%90%e7%94%bb%e5%83%8f%e4%b8%80%e8%a6%a7%e3%80%91%e6%9d%be%e6%9d%91%e6%b2%99%e5%8f%8b%e7%90%86/",
        ["https://cancam.jp/uploads/2017/12/CanCam201802_cover-20171220165822.jpg","https://cancam.jp/uploads/2017/12/ACCU_1P-20171211185335.jpg","https://cancam.jp/uploads/2017/11/2285f0d5676d0576d15a0226aba3f613-20171108130452-20171108132029.jpg","https://cancam.jp/uploads/2017/09/IMG_9561-20170928135633.jpg","https://cancam.jp/uploads/2017/09/MG_8563-20170928135627.jpg","https://cancam.jp/uploads/2017/09/MG_8519-20170928135621.jpg","https://cancam.jp/uploads/2017/09/MG_8468-20170928135616.jpg","https://cancam.jp/uploads/2017/10/12aeb9453f9519d2a2e60374dedcf54f-20171001202913.jpg","https://cancam.jp/uploads/2017/10/bf90e36116ba7423ba35fd4abff303fa-20171001202908.jpg","https://cancam.jp/uploads/2017/10/dadd0a1bb09b0eefb6035608b7296431-20171001202902.jpg","https://cancam.jp/uploads/2017/10/8402-20171005165624.jpg","https://cancam.jp/uploads/2017/10/MG_8389-20171005165458.jpg","https://cancam.jp/uploads/2017/10/MG_8405-20171005165431.jpg","https://cancam.jp/uploads/2017/10/MG_8397-20171005165348.jpg","https://cancam.jp/uploads/2017/11/IMG_2287-20171123203840.jpg","https://cancam.jp/uploads/2017/10/MG_8396-20171005165311.jpg","https://cancam.jp/uploads/2017/10/MG_8386-20171005165251.jpg","https://cancam.jp/uploads/2017/10/MG_8377-20171005165233.jpg","https://cancam.jp/uploads/2017/10/MG_8369-20171005165217.jpg","https://cancam.jp/uploads/2017/09/asahinagu_11-20170922215716.jpg"]
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

// https://natalie.mu
test("Test natalie.mu news page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/owarai/news/363814",
        "natalie.mu-owarai-news-363814/",
        ["https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori2.jpg?imtype=jpg",
            "https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori1.jpg?imtype=jpg"]);
});

test("Test natalie.mu gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/eiga/gallery/news/363868/1317326",
        "natalie.mu-eiga-gallery-news-363868-1317326/",
        ["https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_02.jpg?imtype=jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_01.jpg?imtype=jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_04.jpg?imtype=jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_05.jpg?imtype=jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_03.jpg?imtype=jpg"]);
});

test("Test natalie.mu single image page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/eiga/news/363866",
        "natalie.mu-eiga-news-363866/",
        ["https://ogre.natalie.mu/media/news/eiga/2020/0120/Mujica_202001_01.jpg?imtype=jpg"]);
});

// https://girlswalker.com
test("Test girlswalker.com article page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/238732/",
        "girlswalker.com-archives-238732-/",
        ["https://girlswalker.com/wp-content/uploads/2020/01/0d40a5e4a645fc6b96e767d64ac0878e-6.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/01/384b71410a13f6e7eb9fbe615a00b656.jpg"]);
});

test("Test girlswalker.com gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/238732/%e7%84%a1%e9%a1%8c-48/",
        "girlswalker.com-archives-238732-%e7%84%a1%e9%a1%8c-48-/",
        ["https://girlswalker.com/wp-content/uploads/2020/01/0d40a5e4a645fc6b96e767d64ac0878e-6.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/01/384b71410a13f6e7eb9fbe615a00b656.jpg"]);
});

// https://this.kiji.is/
test("Test this.kiji.is news page", async () => {
    await testDirectDownload(
        browser,
        "https://this.kiji.is/594004166910264417",
        "this.kiji.is-594004166910264417/",
        ["https://nordot-res.cloudinary.com/ch/images/594004137030304865/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/594004146601296993/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/594004152825709665/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/594004158265787489/origin_1.jpg"]);
});

// https://dogatch.jp/
test("Test dogatch.jp image page", async () => {
    await testDirectDownload(
        browser,
        " https://dogatch.jp/news/nhk/73943/photo/0/",
        "dogatch.jp-news-nhk-73943-photo-0-/",
        ["https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/2529ace9ef979fcb49bdd7fc0cb2fe9f.jpg",
            "https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/77735540dd66bf9a751bc2c6202b1263.jpg",
            "https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/501576501292ebadb052e4a9d9a657d3.jpg"]);
});

test("Test dogatch.jp detail page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/nhk/73943/detail/",
        "dogatch.jp-news-nhk-73943-detail-/",
        ["https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/2529ace9ef979fcb49bdd7fc0cb2fe9f.jpg",
            "https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/77735540dd66bf9a751bc2c6202b1263.jpg",
            "https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/501576501292ebadb052e4a9d9a657d3.jpg"]);
});

test("Test dogatch.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/tbs/catari_73949/detail/",
        "dogatch.jp-news-tbs-catari_73949-detail-/",
        ["https://www.catari.jp/files/topics/6992_ext_01_0.jpg",
            "https://www.catari.jp/files/user/article/from_tbs/2020/01/13_0.jpg",
            "https://www.catari.jp/files/user/article/from_tbs/2020/01/13_1.jpg",
            "https://www.catari.jp/files/user/article/from_tbs/2020/01/13_2.jpg"]);
});

test("Test dogatch.jp single image article", async () => {
    await testDirectDownload(
        browser,
        "https://dogatch.jp/news/nhk/73941/detail/",
        "dogatch.jp-news-nhk-73941-detail-/",
        ["https://dogatch-static-data.s3-ap-northeast-1.amazonaws.com/prod/kanren_news/20200124/b3d4f1b0e973c0c707f8f7a1ca28f6cb.jpg"]);
});

//
test("Test thetv.jp image page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/news/detail/204813/1245284/",
        "thetv.jp-news-detail-204813-1245284-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"]);
});

test("Test thetv.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/news/detail/204813/",
        "thetv.jp-news-detail-204813-/",
        ["https://thetv.jp/i/nw/204813/1245283.jpg",
            "https://thetv.jp/i/nw/204813/1245284.jpg",
            "https://thetv.jp/i/nw/204813/1245285.jpg",
            "https://thetv.jp/i/nw/204813/1245286.jpg",
            "https://thetv.jp/i/nw/204813/1245287.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test talent.thetv.jp single image", async () => {
    await testDirectDownload(
        browser,
        "https://talent.thetv.jp/person/1000031439/",
        "talent.thetv.jp-person-1000031439-/",
        ["https://thetv.jp/i/tl/100/0031/1000031439_r.jpg"]);
});

test("Test thetv.jp program home page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/program/0000974553/",
        "thetv.jp-program-0000974553-/",
        ["https://thetv.jp/i/pg/series_images/0000974553_k.jpg"]);
});

test("Test thetv.jp matome home page", async () => {
    await testDirectDownload(
        browser,
        "https://thetv.jp/feature/matome/725/",
        "thetv.jp-feature-matome-725-/",
        ["https://thetv.jp/i/nw/matome/725.jpg"]);
});

test("Test apress.jp article with only embeded image", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10032",
        "apress.jp-archives-10032/",
        ["https://apress.jp/wp-content/uploads/2020/01/unnamed-file-1-3622492935-1578220996437.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/unnamed-file.jpg"]);
});

test("Test apress.jp article with image gallery", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10040",
        "apress.jp-archives-10040/",
        ["https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01684.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01685.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01697.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01700.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020-01710.jpg",
            "https://apress.jp/wp-content/uploads/2020/01/46%E6%88%90%E4%BA%BA%E5%BC%8F2020%E3%82%A2%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81-01850.jpg"].concat(dummyItems(35)));
});

test("Test apress.jp article with more embeded images", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/378",
        "apress.jp-archives-378/",
        ["https://apress.jp/wp-content/uploads/2017/08/44cacae9afc2f9b93fb1a26dfe515c93_d48380ce590f730b18556f6b96b1d2fc.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/724e5d568af58369b725a44834745548_ae5718e59903e9bba754a36ab9f61bb6.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/940046f44740816dd1ced5a728274cc1_355b7726b59ee4bbded40db2825f8a48.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/eb0aa41ddab8eaf803f3dc73896f192b_535e5ced904b9041401175b82c8c0754.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/9315ae2852f50ef930177ea1501dbe6b_9847b727b4263511d6544c6dedd3ea4c.jpg",
            "https://cdn.amebaowndme.com/madrid-prd/madrid-web/images/sites/230815/312194b91c563e2611cdc3c5e1cf1331_2b849365168ddc988ebbd442b4797983.jpg"].concat(dummyItems(47)));
});

test("Test apress.jp article with embeded images excluding ads", async () => {
    await testDirectDownload(
        browser,
        "https://apress.jp/archives/10003",
        "apress.jp-archives-10003/",
        ["https://apress.jp/wp-content/uploads/2019/12/main-8-2914344712-1577333035183.jpg",
            "https://apress.jp/wp-content/uploads/2019/12/main-9.jpg"]);
});

// news.mynavi.jp
test("Test news.mynavi.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/article/20190612-842046/",
        "news.mynavi.jp-article-20190612-842046-/",
        ["https://news.mynavi.jp/article/20190612-842046/images/001l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l.jpg"].concat(dummyItems(12)),
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page, 1000);
            }
        })
});

test("Test news.mynavi.jp image gallery", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
        "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
        ["https://news.mynavi.jp/article/20190612-842046/images/001l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l.jpg"].concat(dummyItems(12)));
});

test("Test news.mynavi.jp article with only inline image", async () => {
    await testDirectDownload(
        browser,
        "https://news.mynavi.jp/article/20200201-965589/",
        "news.mynavi.jp-article-20200201-965589-/",
        ["https://news.mynavi.jp/article/20200201-965589/index_images/index.jpg"]
    );
});

// times.abema.tv
test("Test times.abema.tv article with images", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7039728",
        "times.abema.tv-posts-7039728/",
        ["https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_0.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_1.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_2.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_3.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_og_4.jpg",
            "https://hayabusa.io/abema/series/283-10/thumb.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test times.abema.tv article with images 2", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7006935",
        "times.abema.tv-posts-7006935/",
        ["https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_0.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_13.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_1.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_2.jpg",
            "https://hayabusa.io/abema/programs/89-42_s0_p156158/thumb001.jpg"].concat(dummyItems(15)),
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 70);
            }
        });
});

test("Test times.abema.tv article with images and data url", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/posts/7040578",
        "times.abema.tv-posts-7040578/",
        ["https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_1.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_3.jpg",
            "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_6.jpg",
            "https://hayabusa.io/abema/programs/90-1354_s5_p3/thumb001.jpg"],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        });
});

//spice.eplus.jp
test("Test spice.eplus.jp images page", async () => {
    await testDirectDownload(
        browser,
        "https://spice.eplus.jp/articles/264390/images/811327",
        "spice.eplus.jp-articles-264390-images-811327/",
        ["https://spice.eplus.jp/images/utpB1FdcWOGlN0DJLlfjN2B7U5BKIuxlLQ0pW2kEJd5lrWh6a7cZVuQkqGkB2LfE",
            "https://spice.eplus.jp/images/IMntr6jQBRgjtc3cteh2i9bKlQ9acOo6zxOCO7TMeSMsk3jAFwJ4viG3fMPBy6Oz",
            "https://spice.eplus.jp/images/bbr5Mg3eXHNGqra1duHmyIVi9YpHF40bbEYHOFBO29vXb4kvEELld9GrrLxj2FH4",
            "https://spice.eplus.jp/images/hgKfYRVyjFtquTHj2UiFoVLr8yW2hA8zXgG5YNtfvF6PXBqRIzGuMY4sj8bWr2QV",
            "https://spice.eplus.jp/images/IaGQLUNAWyfuspzryq0L2qxoz8Lbhap0uCTgo1BRyfjdwchplyofgqd67PrHC70E",
            "https://spice.eplus.jp/images/QSnDFCUJO2jL5SMmkTJwpoLJdzGZQYYFB2rf6drUzBZKFMMaYN6GTCRiT96wZQhV",
            "https://spice.eplus.jp/images/rIZxrAxtJCZ7sriLPecd5OAB3GnfGFVv0amwKRtuFL8zTOb0XDaleM6wwEVsyVFr"],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test spice.eplus.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://spice.eplus.jp/articles/264390",
        "spice.eplus.jp-articles-264390/",
        ["https://spice.eplus.jp/images/utpB1FdcWOGlN0DJLlfjN2B7U5BKIuxlLQ0pW2kEJd5lrWh6a7cZVuQkqGkB2LfE",
            "https://spice.eplus.jp/images/IMntr6jQBRgjtc3cteh2i9bKlQ9acOo6zxOCO7TMeSMsk3jAFwJ4viG3fMPBy6Oz",
            "https://spice.eplus.jp/images/bbr5Mg3eXHNGqra1duHmyIVi9YpHF40bbEYHOFBO29vXb4kvEELld9GrrLxj2FH4",
            "https://spice.eplus.jp/images/hgKfYRVyjFtquTHj2UiFoVLr8yW2hA8zXgG5YNtfvF6PXBqRIzGuMY4sj8bWr2QV",
            "https://spice.eplus.jp/images/IaGQLUNAWyfuspzryq0L2qxoz8Lbhap0uCTgo1BRyfjdwchplyofgqd67PrHC70E",
            "https://spice.eplus.jp/images/QSnDFCUJO2jL5SMmkTJwpoLJdzGZQYYFB2rf6drUzBZKFMMaYN6GTCRiT96wZQhV",
            "https://spice.eplus.jp/images/rIZxrAxtJCZ7sriLPecd5OAB3GnfGFVv0amwKRtuFL8zTOb0XDaleM6wwEVsyVFr"]);
});