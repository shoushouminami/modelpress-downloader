const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test bltweb.jp page", async () => {
    await testDirectDownload(
        browser,
        "https://bltweb.jp/2019/12/10/blt2020newyear_n46_3-4_store/",
        "bltweb.jp-2019-12-10-blt2020newyear_n46_3-4_store-/",
        ["https://bltweb.jp/wp/wp-content/uploads/2019/12/20191215_BLT2020-02_NEWYEAR_H1_STORE.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/d65a7000af282857e9caa178de0ea148.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/8751914e48f26781804ae4ea5569ec3f.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/BLT2020-02_3rd-4th_SPECIAL-BOOK-1.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kubo.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_yoda.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_endo.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kaki.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-hayasi.jpg", "https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-ishida.jpg"]
    );
});
