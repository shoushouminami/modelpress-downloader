const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.cinema-life.net", () => {

    test("p260916_btpa/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.cinema-life.net/p260916_btpa/",
            "www.cinema-life.net-p260916_btpa-/",
            dummyItems(14)
        );
    });

    test("Test news article", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.cinemacafe.net/article/2021/11/28/76016.html",
            "www.cinemacafe.net-article-2021-11-28-76016.html/",
            [
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542609.jpg",
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542610.jpg",
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542611.jpg"
            ]
        );
    });

    test("Test image page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.cinemacafe.net/article/img/2021/11/28/76016/542610.html",
            "www.cinemacafe.net-article-img-2021-11-28-76016-542610.html/",
            [
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542609.jpg",
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542610.jpg",
                "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542611.jpg"
            ]
        );
    });

    test("p260924_ubpb/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.cinema-life.net/p260924_ubpb/",
            "www.cinema-life.net-p260924_ubpb-/",
            [
                "http://www.cinema-life.net/wp-content/uploads/48c6150bb07371a0c32dfab03073fb9a.jpg",
                "http://www.cinema-life.net/wp-content/uploads/d687edc3a67130266b94d6340cb9f46b.jpg",
                "http://www.cinema-life.net/wp-content/uploads/459465a5d809ac10201340d27e3e3fa4.jpg"
            ]);
    });
})


