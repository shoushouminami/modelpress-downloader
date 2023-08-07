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

test("column/24388/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://beauty.oricon.co.jp/column/24388/",
        "beauty.oricon.co.jp-column-24388-/",
        [
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/25e9ce8258fb3f6cb38d73703e9cabc482716f6e88292d0015394268012ca3b1.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/6c34ae8b282737219ff6588dc763b77b2583a353e1c2f2260fb3ab5baa3bc2ee.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/a3464c619abba95d2eb48662212917dda2f22060561b71f37da0e2ddd898a1c9.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/0901ce7ced24a599c23d2ec24a8fb200d0699a8e918dcef0e0ba7f18316ad930.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/9f8d4fd67a4b30776fda52c88f96ed52f756efa59407e05c3d81c32780e96072.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/f72301636378406fe2b9f5060ada201475036493f5561596a1aa14a185e5ea57.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/38a6c52f638cbfb2b1afe04690d90ec829f52c0063b42a381ecab6b20866def1.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/51dc297ad384bf6eb8fd1f25a0a5a840d162f1d1097a675fbb88bd2883a9efdb.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/cc376b5636cc2083936e73c085cd3a05c0eec421fabe15bbcd12661a81f0bc38.jpg"
        ]);
});

test("column/24388/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://beauty.oricon.co.jp/column/24388/",
        "beauty.oricon.co.jp-column-24388-/",
        [
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/25e9ce8258fb3f6cb38d73703e9cabc482716f6e88292d0015394268012ca3b1.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/6c34ae8b282737219ff6588dc763b77b2583a353e1c2f2260fb3ab5baa3bc2ee.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/a3464c619abba95d2eb48662212917dda2f22060561b71f37da0e2ddd898a1c9.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/0901ce7ced24a599c23d2ec24a8fb200d0699a8e918dcef0e0ba7f18316ad930.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/9f8d4fd67a4b30776fda52c88f96ed52f756efa59407e05c3d81c32780e96072.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/f72301636378406fe2b9f5060ada201475036493f5561596a1aa14a185e5ea57.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/38a6c52f638cbfb2b1afe04690d90ec829f52c0063b42a381ecab6b20866def1.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/51dc297ad384bf6eb8fd1f25a0a5a840d162f1d1097a675fbb88bd2883a9efdb.jpg",
            "https://beauty-cdn.oricon.co.jp/img/column/1/E1690107869416/detail/cc376b5636cc2083936e73c085cd3a05c0eec421fabe15bbcd12661a81f0bc38.jpg"
        ]);
});
