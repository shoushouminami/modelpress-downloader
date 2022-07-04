const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test picture page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/picture/268878/",
        "entameclip.com-picture-268878-/",
        [
            "https://cdn.entameclip.com/2021/09/pic20210907NMB481.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB488.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB482.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB483.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB484.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB485.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB486.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB487.jpg"
        ]
    );
});

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/268885",
        "entameclip.com-news-268885/",
        [
            "https://cdn.entameclip.com/2021/09/pic20210907NMB481.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB482.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB483.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB484.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB485.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB486.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB487.jpg",
            "https://cdn.entameclip.com/2021/09/pic20210907NMB488.jpg"
        ]
    );
});

test("Test news page with full images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/198169",
        "entameclip.com-news-198169/",
        [
            "https://cdn.entameclip.com/2020/06/img20200623fukuyamaayami1.jpg",
            "https://cdn.entameclip.com/2020/06/img20200623fukuyamaayami2.jpg",
            "https://cdn.entameclip.com/2020/06/img20200623fukuyamaayami3.jpg"
        ]
    );
});

test("Test news page 2nd page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/news/253891/2/",
        "entameclip.com-news-253891-2-/",
        [
            "https://img.youtube.com/vi/5tc4yOr3_Hs/maxresdefault.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka462.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka463.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka464.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka465.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka466.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka467.jpg",
            "https://img.youtube.com/vi/ehkSCsVPKtw/maxresdefault.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka468.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka469.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4610.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4611.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4612.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4613.jpg",
            "https://img.youtube.com/vi/Uiif0KF5LBc/maxresdefault.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4614.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4615.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4616.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4617.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4618.jpg"
        ]
    );
});

test("Test picture page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://entameclip.com/picture/253886/",
        "entameclip.com-picture-253886-/",
        [
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka462.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka467.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka468.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka469.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4610.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4611.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4612.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4613.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4614.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4615.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4616.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4617.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka4618.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka461.png",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka463.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka464.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka465.jpg",
            "https://cdn.entameclip.com/2021/08/pic20210802nogizaka466.jpg"
        ]
    );
});
