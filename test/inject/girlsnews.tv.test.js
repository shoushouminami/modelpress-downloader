const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {re, getLargeImg} = require("../../src/inject/girlsnews.tv.js");

test("Test re", () => {
    let m = "/w123/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "/abc/w123/def/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w288/ig20201109aya01.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w288/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w130/h90/ig20201109aya02.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w130/");
    expect(m[2]).toBe("h90/");
});

test("Test getLargeImg", function (){
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img202001110_youka.jpg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img202001110_youka.jpg");
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/ig20201109aya01.jpeg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/ig20201109aya01.jpeg");
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img20201101morisakitomomi3.jpg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img20201101morisakitomomi3.jpg");

})

// news category
test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://girlsnews.tv/news/503654",
        "girlsnews.tv-news-503654/",
        [
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260809komori01.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w288/img20260809komori01.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori02.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori02.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori01.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori01.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori02.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori02.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori03.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori03.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori07.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori07.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori06.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori06.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori01.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori01.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori04.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori04.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori05.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori05.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori10.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori10.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori08.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori08.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori09.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori09.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori11.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori11.jpg"]
            }
        ]
    );
});

// actress category
test("Test actress page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://girlsnews.tv/actress/503592",
        "girlsnews.tv-actress-503592/",
        [
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/885e6e2d609abd2a83cbacf7e0376154.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w288/885e6e2d609abd2a83cbacf7e0376154.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/f5f70878b4c813f5fba47004cf30f775.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/f5f70878b4c813f5fba47004cf30f775.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/8963b4a5f2a02b5856afb1ae3c5fb4e5.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/8963b4a5f2a02b5856afb1ae3c5fb4e5.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/95116b992e96b4b0154e16fd99587d18.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/95116b992e96b4b0154e16fd99587d18.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/4ac47cccc11c4b65e836347e9c71e886.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/4ac47cccc11c4b65e836347e9c71e886.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/f5270f57d2224fd2ddc3fc613f405fea.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/f5270f57d2224fd2ddc3fc613f405fea.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/05ec268a931e4086f57fcff27f81377c.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/05ec268a931e4086f57fcff27f81377c.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/230228b60e8abc6949d3a60cf1a80c0e.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/230228b60e8abc6949d3a60cf1a80c0e.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/1207a0901de653e600081a5e0c92bf5c.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/1207a0901de653e600081a5e0c92bf5c.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/96c5c77e2c32a40147dc3383430be1ea.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/96c5c77e2c32a40147dc3383430be1ea.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/2ce9ce86f27a85782e476b6130fdf765.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/2ce9ce86f27a85782e476b6130fdf765.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/3c2a340ed372577641dce03a1b6ef014.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/3c2a340ed372577641dce03a1b6ef014.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/6159b21984c82570c75e095ab6b13fc8.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/6159b21984c82570c75e095ab6b13fc8.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/d10bbb8a72ba5ec617cd7808f876fece.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/d10bbb8a72ba5ec617cd7808f876fece.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/de81b8ecf129fc4173ddaf8116eea805.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/de81b8ecf129fc4173ddaf8116eea805.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/b12027dbaeb6689d636a6f5f578ac959.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/b12027dbaeb6689d636a6f5f578ac959.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/ae5c89ccf1a57a461ec92b00ff842f9c.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/ae5c89ccf1a57a461ec92b00ff842f9c.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/77eb65f79a683d8a60259f2dabc9b719.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/77eb65f79a683d8a60259f2dabc9b719.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/5f9429d76f8e691ed65a33e691831b4f.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/5f9429d76f8e691ed65a33e691831b4f.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/71ae5c06d2d49b4d5fb7cddc08b5097a.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/71ae5c06d2d49b4d5fb7cddc08b5097a.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/9437a86bc27b1c59bd55adf0a6e299cc.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/9437a86bc27b1c59bd55adf0a6e299cc.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/d85b1f413f02d07c15d95e831f382ba4.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/d85b1f413f02d07c15d95e831f382ba4.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/adcd2330c6402bc2e58e5ce8eb913fc0.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/adcd2330c6402bc2e58e5ce8eb913fc0.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/21fe2c60bb5420f22da280d5308766a5.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/21fe2c60bb5420f22da280d5308766a5.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/79b88b9ce9995654ca372553db5d16e5.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/79b88b9ce9995654ca372553db5d16e5.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/800cb757d25373c592a0c5d26ea30daa.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/800cb757d25373c592a0c5d26ea30daa.jpg"]
            }
        ]
    );
});

// gravureidol category, accessed via the www subdomain (altHosts)
test("Test www subdomain (gravureidol category)", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.girlsnews.tv/news/503683",
        "www.girlsnews.tv-news-503683/",
        [
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko05.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w288/img20260807nashiko05.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko06.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko06.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko07.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko07.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko01.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko01.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko02.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko02.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko03.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko03.jpg"]
            },
            {
                "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko04.jpg",
                "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko04.jpg"]
            }
        ]
    );
});

// unit category
test("Test unit page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://girlsnews.tv/unit/503822",
        "girlsnews.tv-unit-503822/",
        [
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/586fe5fe76ee75e75b177fff96474ca5.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w288/586fe5fe76ee75e75b177fff96474ca5.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/baaa8573d0bef702ce762feb31300b84.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/baaa8573d0bef702ce762feb31300b84.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/76d95e5a84e5c4c999c285a80a206bda.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/76d95e5a84e5c4c999c285a80a206bda.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/cf05ba50d86d69fa425185b378c333f5.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/cf05ba50d86d69fa425185b378c333f5.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/cd28ce2a42a7398b8115f1338114a620.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/cd28ce2a42a7398b8115f1338114a620.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/bee6bfc96688511e105f8c7c63d0829a.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/bee6bfc96688511e105f8c7c63d0829a.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/a5bdeae24f2769e8b5150976ba108059.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/a5bdeae24f2769e8b5150976ba108059.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/d12eaa73605acf005bf2e59d75942fa6.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/d12eaa73605acf005bf2e59d75942fa6.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/60bb1218827d173ac210e4d01e0237c2.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/60bb1218827d173ac210e4d01e0237c2.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/9c293b05f66e991345126387aead4849.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/9c293b05f66e991345126387aead4849.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/e4d159d748e1b2c9e0239ca9a4537de7.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/e4d159d748e1b2c9e0239ca9a4537de7.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/973111055be0298c4d4061903bb47d29.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/973111055be0298c4d4061903bb47d29.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/bd1f783cc21810c58167db61c0564d81.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/bd1f783cc21810c58167db61c0564d81.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/5456d328cb626051a2f6cfb324575ecf.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/5456d328cb626051a2f6cfb324575ecf.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/0ae2ee673973f15de6be6bd8f75bf53b.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/0ae2ee673973f15de6be6bd8f75bf53b.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/8f1fee3236e5b2c385a4e0e9433331d9.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/8f1fee3236e5b2c385a4e0e9433331d9.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/2735cb04498af952133cbd7a5c6f40f5.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/2735cb04498af952133cbd7a5c6f40f5.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/f3a612788417ee00a204f5f59a89fc7f.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/f3a612788417ee00a204f5f59a89fc7f.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/e4e407fd4551b0e1e67a3a38a79e0788.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/e4e407fd4551b0e1e67a3a38a79e0788.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/48115988c13125bc538502568a5c70b1.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/48115988c13125bc538502568a5c70b1.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/0a3010da82043e67dba17bbbf1169f6e.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/0a3010da82043e67dba17bbbf1169f6e.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/8f7aca650b5e80d8808de7836edf0466.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/8f7aca650b5e80d8808de7836edf0466.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/95701f63619c096b627f4ae4a7292d88.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/95701f63619c096b627f4ae4a7292d88.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/ba9c8972940de851d2dcb1780ac9450f.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/ba9c8972940de851d2dcb1780ac9450f.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/12d6da598e931b0393d30efba7ca1e77.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/12d6da598e931b0393d30efba7ca1e77.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/e0afe1e57fae3441aff5c76b9d7e5c83.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/e0afe1e57fae3441aff5c76b9d7e5c83.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/bcc7bcc478ca8c23b48556c74fbdea88.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/bcc7bcc478ca8c23b48556c74fbdea88.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/046bb493150cecdcf4eb6d597dec7c39.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/046bb493150cecdcf4eb6d597dec7c39.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/79c7d2c10eac7b89c75c8752f5b81ad3.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/79c7d2c10eac7b89c75c8752f5b81ad3.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/deb5732c514805bb15fecf80f324f32a.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/deb5732c514805bb15fecf80f324f32a.jpg"]},
            {"url": "https://girlsnews.tv/reimage/y2026/m08/w1000/6a2d57de032e26a34e95c8c115b07943.jpg", "retries": ["https://girlsnews.tv/reimage/y2026/m08/w130/h90/6a2d57de032e26a34e95c8c115b07943.jpg"]}
        ]
    );
});
