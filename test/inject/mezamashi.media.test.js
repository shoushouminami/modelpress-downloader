const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/-/7421", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/articles/-/7421",
        "mezamashi.media-articles---7421/",
        [
            "https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/f/0/-/img_f074d5677df930967d58fafc9f1cbf7a181559.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/0/3/-/img_0362ad4959c248eb91bdb0925f716a76135404.jpg?q=100"
        ]);
});

test("articles/gallery/7421", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/articles/gallery/7421",
        "mezamashi.media-articles-gallery-7421/",
        [
            "https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/f/0/-/img_f074d5677df930967d58fafc9f1cbf7a181559.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/0/3/-/img_0362ad4959c248eb91bdb0925f716a76135404.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/1/e/-/img_1ecf832e52a9f936272270052b80864876963.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/6/4/-/img_6441e0884bc0f363ad15f879f9c549c7182959.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/9/8/-/img_98a12611c011d18482a3e6678c2a57ce99349.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/2/9/-/img_29d3d84632ab8d48e630e2922bc745aa96856.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/4/f/-/img_4fcac1f2ed79f3e15b14aea2ef706178150143.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/8/4/-/img_847d6d957cfeb8b3d88850d52ae99e73197128.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/4/5/-/img_4554ecbce7d75ddabc85cdf6b625cb8c121536.jpg?q=100"
        ]);
});

test("articles/-/138512", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/articles/-/138512",
        "mezamashi.media-articles---138512/",
        [
            "https://mezamashi.ismcdn.jp/mwimgs/8/7/-/img_87552f7c035239cb73e4ac1060c6e8c5182028.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/6/8/-/img_68033b9f259ce6f46cee0290bb488396527407.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/6/c/-/img_6c5339b08a052015c907cf8e8f5463ea824642.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/8/d/-/img_8de906d7642a818ca6ca48ccf580524a828830.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/a/6/-/img_a69beb5cbfa5d1864f464d5b6fbe8c2c793657.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/e/f/-/img_efab3f0710507d6bd6a46c48927b13511042562.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/a/8/-/img_a8c6e2b8e5f7474030c4a4edafc79c8e975765.jpg?q=100"
        ]);
});


test("articles/-/138512?page=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/articles/-/138512?page=2#google_vignette",
        "mezamashi.media-articles---138512/",
        [
            "https://mezamashi.ismcdn.jp/mwimgs/8/7/-/img_87552f7c035239cb73e4ac1060c6e8c5182028.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/c/0/-/img_c0d3ebd4ef65af1bda6051c532a339ea529390.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/2/b/-/img_2b93ca9db093598d6ec0f7f6383eb964872302.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/8/0/-/img_801f27c94e52bca254c7fb2509c474ac883217.jpg?q=100"
        ]);
});

test("articles/gallery/138512?image=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/articles/gallery/138512?image=2",
        "mezamashi.media-articles-gallery-138512/",
        [
            "https://mezamashi.ismcdn.jp/mwimgs/8/7/-/img_87552f7c035239cb73e4ac1060c6e8c5182028.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/6/8/-/img_68033b9f259ce6f46cee0290bb488396527407.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/6/c/-/img_6c5339b08a052015c907cf8e8f5463ea824642.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/8/d/-/img_8de906d7642a818ca6ca48ccf580524a828830.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/a/6/-/img_a69beb5cbfa5d1864f464d5b6fbe8c2c793657.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/e/f/-/img_efab3f0710507d6bd6a46c48927b13511042562.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/a/8/-/img_a8c6e2b8e5f7474030c4a4edafc79c8e975765.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/c/0/-/img_c0d3ebd4ef65af1bda6051c532a339ea529390.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/2/b/-/img_2b93ca9db093598d6ec0f7f6383eb964872302.jpg?q=100",
            "https://mezamashi.ismcdn.jp/mwimgs/8/0/-/img_801f27c94e52bca254c7fb2509c474ac883217.jpg?q=100"
        ]);
});
