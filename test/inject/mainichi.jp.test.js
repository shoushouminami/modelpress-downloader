const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test.skip("articles/20250703/k00/00m/200/425000c", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichi.jp/articles/20250703/k00/00m/200/425000c",
        "mainichi.jp-articles-20250703-k00-00m-200-425000c/",
        [
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200065000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200066000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200067000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200068000p/9.jpg"
        ]);
});

test.skip("articles/20250703/k00/00m/200/423000c", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichi.jp/articles/20250703/k00/00m/200/423000c",
        "mainichi.jp-articles-20250703-k00-00m-200-423000c/",
        [
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200057000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200058000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200059000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200060000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200061000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200062000p/9.jpg",
            "https://cdn.mainichi.jp/vol1/2025/07/04/20250704k0000m200063000p/9.jpg"
        ]);
});

test("graphs/20250705/mpj/00m/050/131000f/20250705mpj00m050132000p", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichi.jp/graphs/20250705/mpj/00m/050/131000f/20250705mpj00m050132000p",
        "mainichi.jp-graphs-20250705-mpj-00m-050-131000f-20250705mpj00m050132000p/",
        dummyItems(27)
    );
});

test("news/2393314/photo/2/?anc=284", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/news/2393314/photo/2/?anc=284",
        "www.oricon.co.jp-news-2393314-photo-2-/",
        [
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181514_p_o_33660651.jpg",
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181514_p_o_55606543.jpg",
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181514_p_o_99183065.jpg",
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181515_p_o_69509688.jpg",
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181515_p_o_79304512.jpg",
            "https://contents.oricon.co.jp/upimg/news/2394000/2393314/20250630_181515_p_o_80948342.jpg"
        ]);
});

