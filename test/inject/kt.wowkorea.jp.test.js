const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://kt.wowkorea.jp/news-read/54024.html",
        "kt.wowkorea.jp-news-read-54024.html/",
        [
            "https://kt.wowkorea.jp/img/news/10/54024/128781_560.jpg",
            "https://kt.wowkorea.jp/img/news/10/54024/128782_560.jpg",
            "https://kt.wowkorea.jp/img/news/10/54024/128783_560.jpg",
            "https://kt.wowkorea.jp/img/news/10/54024/128784_560.jpg",
            "https://kt.wowkorea.jp/img/news/10/54024/128785_560.jpg",
            "https://kt.wowkorea.jp/img/news/10/54024/128786_560.jpg"
        ]
    );
});
