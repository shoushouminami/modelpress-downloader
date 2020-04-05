const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test natalie.mu news page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/owarai/news/363814",
        "natalie.mu-owarai-news-363814/",
        ["https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori2.jpg?imtype=",
            "https://ogre.natalie.mu/media/news/owarai/2020/0120/kowaimadori1.jpg?imtype="]);
});

test("Test natalie.mu gallery page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/eiga/gallery/news/363868/1317326",
        "natalie.mu-eiga-gallery-news-363868-1317326/",
        ["https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_02.jpg?imtype=",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_01.jpg?imtype=",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_04.jpg?imtype=",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_05.jpg?imtype=",
            "https://ogre.natalie.mu/media/news/eiga/2020/0120/bishokutantei_202001_03.jpg?imtype="]);
});

test("Test natalie.mu single image page", async () => {
    await testDirectDownload(
        browser,
        "https://natalie.mu/eiga/news/363866",
        "natalie.mu-eiga-news-363866/",
        ["https://ogre.natalie.mu/media/news/eiga/2020/0120/Mujica_202001_01.jpg?imtype="]);
});
