const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("owarai/news/363814", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/owarai/news/363814",
        "natalie.mu-owarai-news-363814/",
        [
            "https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori2.jpg",
            "https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori1.jpg"
        ]);
});

test("eiga/gallery/news/363868/1317326", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/eiga/gallery/news/363868/1317326",
        "natalie.mu-eiga-gallery-news-363868-1317326/",
        [
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_02.jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_01.jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_04.jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_05.jpg",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_03.jpg"
        ]);
});

test("eiga/news/363866", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/eiga/news/363866",
        "natalie.mu-eiga-news-363866/",
        [
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/Mujica_202001_01.jpg"
        ]);
});

test("music/pp/kashiwagiyuki02/page/3", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/music/pp/kashiwagiyuki02/page/3",
        "natalie.mu-music-pp-kashiwagiyuki02-page-3/",
        [
            "https://ogre.natalie.mu/media/pp/static/music/kashiwagiyuki02/pc_header_min.jpg",
            "https://ogre.natalie.mu/media/pp/static/music/kashiwagiyuki02/photo08s.jpg",
            "https://ogre.natalie.mu/media/pp/static/music/kashiwagiyuki02/photo09s.jpg",
            "https://ogre.natalie.mu/media/pp/static/music/kashiwagiyuki02/photo10s.jpg",
            "https://ogre.natalie.mu/media/pp/static/music/kashiwagiyuki02/photo11.jpg"
        ]);
});

test("eiga/pp/telasa_batsuichi", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/eiga/pp/telasa_batsuichi",
        "natalie.mu-eiga-pp-telasa_batsuichi/",
        [
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_47.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_51.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_1398.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_1338.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_16.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_0722.jpg"
        ]);
});

test("eiga/pp/telasa_batsuichi/page/2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://natalie.mu/eiga/pp/telasa_batsuichi/page/2",
        "natalie.mu-eiga-pp-telasa_batsuichi-page-2/",
        [
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_31.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_63.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_1231.jpg",
            "https://ogre.natalie.mu/media/pp/telasa_batsuichi/telasa_batsuichi_0707.jpg"
        ]);
});
