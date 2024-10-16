const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/photo/212359?pid=c64b44147a9ba2f94b3fde14e05b0808386215", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://dot.asahi.com/articles/photo/212359?pid=c64b44147a9ba2f94b3fde14e05b0808386215",
        "dot.asahi.com-articles-photo-212359/",
        [
            "https://aeradot.ismcdn.jp/mwimgs/c/6/-/img_c64b44147a9ba2f94b3fde14e05b0808386215.jpg",
            "https://aeradot.ismcdn.jp/mwimgs/d/0/-/img_d0b1f3415f72183322c87d07820755be5085530.jpg"
        ]);
});

test("articles/-/236268?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://dot.asahi.com/articles/-/236268?page=1",
        "dot.asahi.com-articles---236268/",
        [
            "https://aeradot.ismcdn.jp/mwimgs/4/6/-/img_46d7df9e35db1ba62d7f90b09d525bdc490689.jpg"
        ]);
});

test("articles/-/236268?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://dot.asahi.com/articles/-/236268?page=1",
        "dot.asahi.com-articles---236268/",
        [
            "https://aeradot.ismcdn.jp/mwimgs/4/6/-/img_46d7df9e35db1ba62d7f90b09d525bdc490689.jpg"
        ]);
});
