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
