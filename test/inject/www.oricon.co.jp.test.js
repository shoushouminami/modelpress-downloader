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

test("photo/7246/316129/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.oricon.co.jp/photo/7246/316129/",
        "www.oricon.co.jp-photo-7246-316129-/",
        [
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675700769.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675637605.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675608120.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675610128.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675618389.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675624838.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675617579.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675615938.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675624206.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675622512.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675605613.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675607213.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675615316.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675623417.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675620011.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675604683.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675612897.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675626446.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675627369.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675620843.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675636065.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675629753.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675631258.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675723143.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675719644.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675717206.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675632741.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675634461.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675628245.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675639224.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675640127.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675726091.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675709766.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675691876.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675686312.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675681106.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675683490.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675689274.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675694700.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675696905.jpg",
            "https://contents.oricon.co.jp/photo/img/7000/7246/detail/img660/1657675698648.jpg"
        ]);
});

test("special/101801/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://beauty.oricon.co.jp/special/101801/",
            "beauty.oricon.co.jp-special-101801-/",
            [
                    "https://beauty-cdn.oricon.co.jp/special_img/101000/101801/detail/img660/1680252339104.jpg",
                    "https://beauty-cdn.oricon.co.jp/special_img/101000/101801/detail/img660/1680252357787.jpg",
                    "https://beauty-cdn.oricon.co.jp/special_img/101000/101801/detail/img660/1680252399984.jpg",
                    "https://beauty-cdn.oricon.co.jp/special_img/101000/101801/detail/img660/1680252453165.png",
                    "https://beauty-cdn.oricon.co.jp/special_img/101000/101801/detail/img660/1680252512805.png"
            ]);
});
