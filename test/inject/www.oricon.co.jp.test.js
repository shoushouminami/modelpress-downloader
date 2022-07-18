const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/news/2242652/",
        "www.oricon.co.jp-news-2242652-/",
        [
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220718_005226_p_o_57805098.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220710_204908_p_o_78935595.jpg"
        ]
    );
});

test("news/2242652/full/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/news/2242652/full/",
        "www.oricon.co.jp-news-2242652-full-/",
        [
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220718_005226_p_o_57805098.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220710_204908_p_o_78935595.jpg"
        ]);
});

test("news/2242652/photo/1/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/news/2242652/photo/1/",
        "www.oricon.co.jp-news-2242652-photo-1-/",
        [
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220718_005226_p_o_57805098.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242652/20220710_204908_p_o_78935595.jpg"
        ]);
});

test("news/2242515/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/news/2242515/",
        "www.oricon.co.jp-news-2242515-/",
        [
            "https://contents.oricon.co.jp/upimg/news/2243000/2242515/20220715_193336_p_o_68013585.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242515/20220715_193338_p_o_46511553.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242515/20220715_193340_p_o_74874057.jpg",
            "https://contents.oricon.co.jp/upimg/news/2243000/2242515/20220715_193342_p_o_55679230.jpg"
        ]);
});
