const {testDirectDownload, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test girlswalker.com article page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/279372/",
        "girlswalker.com-archives-279372-/",
        [
            "https://img.girlswalker.com/wp-content/uploads/2021/06/997b784b25f98ab4bd763a8356bcf795.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2021/06/4f771f815eefbd8fdf7ca9c686a24bb2.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2021/06/kanojyo.png",
            "https://img.girlswalker.com/wp-content/uploads/2021/06/873f3de27e2dadccf0889f1eff55e8e0.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2021/06/c3be389a5c0f3fb1c3221fc1f885cf3d.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test girlswalker.com gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/238732/%e7%84%a1%e9%a1%8c-48/",
        "girlswalker.com-archives-238732-%e7%84%a1%e9%a1%8c-48-/",
        [
            "https://img.girlswalker.com/wp-content/uploads/2020/01/0d40a5e4a645fc6b96e767d64ac0878e-6.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/01/384b71410a13f6e7eb9fbe615a00b656.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        });
});

test("Test girlswalker.com article page lazy load", async () => {
    await testDirectDownload(
        browser,
        "https://girlswalker.com/archives/256147/",
        "girlswalker.com-archives-256147-/",
        [
            "https://girlswalker.com/wp-content/uploads/2020/08/642d295b13e606fae7f5c437262e1824.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/4eaeb54a2540708fbce3d358e92194b3.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/f4d3f0fdb7d87b5b55298a79ac3805d6.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/7f48913e05670e2e397bae7d3ed05d52.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/19399cedcd3bb46776e6f8953252f127.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/32b6fce7b994fc0d1445664441e7096a.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/e489997e2cf4c3d86cc8a057109162ff.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/7d4d5eff839b554179f9f90f2827522f.jpg",
            "https://girlswalker.com/wp-content/uploads/2020/08/a3c9410d2414986c21d5434813ac2a37.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/68d27bc6aaf35fbbd73d99096525ac82.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/642d295b13e606fae7f5c437262e1824.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/32b6fce7b994fc0d1445664441e7096a.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/e489997e2cf4c3d86cc8a057109162ff.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/19399cedcd3bb46776e6f8953252f127.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/4eaeb54a2540708fbce3d358e92194b3.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/7d4d5eff839b554179f9f90f2827522f.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/f4d3f0fdb7d87b5b55298a79ac3805d6.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/a3c9410d2414986c21d5434813ac2a37.jpg",
            "https://img.girlswalker.com/wp-content/uploads/2020/08/7f48913e05670e2e397bae7d3ed05d52.jpg"
        ]);
});
