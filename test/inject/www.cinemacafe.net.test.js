const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        browser(),
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
        browser(),
        "https://www.cinemacafe.net/article/img/2021/11/28/76016/542610.html",
        "www.cinemacafe.net-article-img-2021-11-28-76016-542610.html/",
        [
            "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542609.jpg",
            "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542610.jpg",
            "https://www.cinemacafe.net/imgs/p/ATDRThl-6oWF9fpps9341csCOg8ODQwLCgkI/542611.jpg"
        ]
    );
});

