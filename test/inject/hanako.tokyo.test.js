const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("learn/260498/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hanako.tokyo/learn/260498/",
        "hanako.tokyo-learn-260498-/",
        [
            "https://img.hanako.tokyo/2021/09/30114508/20210702h0080-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114511/20210702h0093-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114505/20210702h0025-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114737/20210702h0068-1.jpg",
            "https://img.hanako.tokyo/2021/09/30114740/20210702h0100-1.jpg",
            "https://img.hanako.tokyo/2022/08/04150412/logo-Rena-Yamazaki-NEW.jpg"
        ]);
});

test("food/259876/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hanako.tokyo/food/259876/",
        "hanako.tokyo-food-259876-/",
        [
            "https://img.hanako.tokyo/2021/02/08232735/DMA-cakew_097.jpg",
            "https://img.hanako.tokyo/2021/02/08232730/DMA-cakew_058.jpg",
            "https://img.hanako.tokyo/2021/02/02002729/e6c693867b988623580f0356f31d6e9e.jpg",
            "https://img.hanako.tokyo/2021/08/07031612/9d58bb34f36e44857a5481c8c2868678-3.jpg",
            "https://img.hanako.tokyo/2021/02/15130457/73d855c15c3fa8efeca3d3b8b8322fb9.jpg",
            "https://img.hanako.tokyo/2021/02/24014544/350648c8e4fe04c91b3dd8657c759a72-1.jpg"
        ]);
});

test("learn/186294/#heading-4", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hanako.tokyo/learn/186294/#heading-4",
        "hanako.tokyo-learn-186294-/",
        [
            "https://img.hanako.tokyo/2020/10/26162939/28-29.jpg",
            "https://img.hanako.tokyo/2020/10/04175213/HANAKO202007_091_page-0001.jpg",
            "https://img.hanako.tokyo/2020/10/04175218/HANAKO202008_095_page-0001.jpg",
            "https://img.hanako.tokyo/2020/10/04175209/HANAKO202006_099_page-0001.jpg",
            "https://img.hanako.tokyo/2020/10/08015846/DSC_5368.jpg",
            "https://img.hanako.tokyo/2020/09/24164401/KUR2080.jpg",
            "https://img.hanako.tokyo/2020/10/14164346/DSC_6086.jpg",
            "https://img.hanako.tokyo/2020/09/14175740/unnamed.jpg",
            "https://img.hanako.tokyo/2020/05/12122816/top_SDGs.jpg"
        ]);
});

test("learn/257698/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hanako.tokyo/learn/257698/",
        "hanako.tokyo-learn-257698-/",
        [
            "https://img.hanako.tokyo/2021/09/17151203/ccb26bc28554d743572ee15fc92e901a.jpg"
        ]);
});
