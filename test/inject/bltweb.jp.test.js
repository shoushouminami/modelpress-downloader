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
        [
            "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_724/https://bltweb.jp/wp/wp-content/uploads/2019/12/20191215_BLT2020-02_NEWYEAR_H1_STORE.jpg",
           "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_723/https://bltweb.jp/wp/wp-content/uploads/2019/12/d65a7000af282857e9caa178de0ea148.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://bltweb.jp/wp/wp-content/uploads/2019/12/8751914e48f26781804ae4ea5569ec3f.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_857/https://bltweb.jp/wp/wp-content/uploads/2019/12/BLT2020-02_3rd-4th_SPECIAL-BOOK-1.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_406,h_601/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kubo.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_406,h_601/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_yoda.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_405,h_599/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_endo.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_405,h_599/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-N46_kaki.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_405,h_599/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-hayasi.jpg",
     "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_406,h_601/https://bltweb.jp/wp/wp-content/uploads/2019/12/4L-ishida.jpg"
      ]
    );
});
