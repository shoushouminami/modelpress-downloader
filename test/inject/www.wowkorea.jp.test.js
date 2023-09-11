const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("topic/read/54024.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.wowkorea.jp/topic/read/54024.html",
        "www.wowkorea.jp-topic-read-54024.html/",
        [
            "https://www.wowkorea.jp/img/topic/10/54024/128781_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128782_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128783_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128784_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128785_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128786_1280W.webp"
        ]);
});

test("topic/img/54024/3.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.wowkorea.jp/topic/img/54024/3.html",
        "www.wowkorea.jp-topic-img-54024-3.html/",
        [
            "https://www.wowkorea.jp/img/topic/10/54024/128781_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128782_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128783_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128784_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128785_1280W.webp",
            "https://www.wowkorea.jp/img/topic/10/54024/128786_1280W.webp"
        ]);
});

test("news/pickup/408385.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.wowkorea.jp/news/pickup/408385.html",
        "www.wowkorea.jp-news-pickup-408385.html/",
        [
            "https://www.wowkorea.jp/img/news/81/408385/296460_1280W.webp",
            "https://www.wowkorea.jp/img/news/81/408385/296462_1280W.webp",
            "https://www.wowkorea.jp/img/news/81/408385/296463_1280W.webp",
            "https://www.wowkorea.jp/img/news/81/408385/296464_1280W.webp"
        ]);
});
