const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test column page", async () => {
    await testDirectDownload(
        browser(),
        "https://hanako.tokyo/column/kotobanoosusowake/260498/",
        "hanako.tokyo-column-kotobanoosusowake-260498-/",
        [
            "https://img.hanako.tokyo/2021/09/30114508/20210702h0080-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114511/20210702h0093-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114505/20210702h0025-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114740/20210702h0100-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114737/20210702h0068-1.jpg"
        ]
    );
});

test("Test food news page", async () => {
    await testDirectDownload(
        browser(),
        "https://hanako.tokyo/news/food/259876/",
        "hanako.tokyo-news-food-259876-/",
        [
            "https://img.hanako.tokyo/2021/02/08232730/DMA-cakew_058.jpg",
            "https://img.hanako.tokyo/2021/02/08232735/DMA-cakew_097.jpg",
            "https://img.hanako.tokyo/2021/02/02002729/e6c693867b988623580f0356f31d6e9e.jpg",
            "https://img.hanako.tokyo/2021/08/07031612/9d58bb34f36e44857a5481c8c2868678-3.jpg",
            "https://img.hanako.tokyo/2021/02/15130457/73d855c15c3fa8efeca3d3b8b8322fb9.jpg",
            "https://img.hanako.tokyo/2021/02/24014544/350648c8e4fe04c91b3dd8657c759a72-1.jpg"
        ]
    );
});

test("Test lifestyle news page", async () => {
    await testDirectDownload(
        browser(),
        "https://hanako.tokyo/news/lifestyle/186294/",
        "hanako.tokyo-news-lifestyle-186294-/",
        [
            "https://img.hanako.tokyo/2020/10/30184348/761b055d1131958a3000394aa8f3860a.jpg",
            "https://img.hanako.tokyo/2020/10/26162939/28-29.jpg",
            "https://img.hanako.tokyo/2020/10/04175218/HANAKO202008_095_page-0001.jpg",
            "https://img.hanako.tokyo/2020/10/04175209/HANAKO202006_099_page-0001.jpg",
            "https://img.hanako.tokyo/2020/10/04175213/HANAKO202007_091_page-0001.jpg",
            "https://img.hanako.tokyo/2020/09/24164401/KUR2080.jpg",
            "https://img.hanako.tokyo/2020/10/14164346/DSC_6086.jpg",
            "https://img.hanako.tokyo/2020/10/08015846/DSC_5368.jpg"
        ]
    );
});

test("Test special page with thumbnails", async () => {
    await testDirectDownload(
        browser(),
        "https://hanako.tokyo/special/257698/",
        "hanako.tokyo-special-257698-/",
        [
            "https://img.hanako.tokyo/2021/09/13180336/5f794dced421509d9b57a9fb436cd129.jpeg",
            "https://img.hanako.tokyo/2021/08/28034720/ktw_2255.jpg",
            "https://img.hanako.tokyo/2021/08/28043200/0d40a5e4a645fc6b96e767d64ac0878e-5.jpg",
            "https://img.hanako.tokyo/2021/09/11233319/DSC_8692.jpg",
            "https://img.hanako.tokyo/2021/09/16013357/DMA-IMG_8846.jpg",
            "https://img.hanako.tokyo/2020/06/19174108/htlw_0572.jpg"
        ]
    );
});
