const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test.skip("Test columns page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/columns/articles/180",
        "yanmaga.jp-columns-articles-180/",
        [
            "https://eh96lnrmau.user-space.cdn.idcfcloud.net/uploads/trix_image/path/1651/55fb4a41-4f47-4875-8950-e319420812a4.jpg"
        ]
    );
});

test.skip("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/columns/articles/344",
        "yanmaga.jp-columns-articles-344/",
        [
            "https://eh96lnrmau.user-space.cdn.idcfcloud.net/uploads/trix_image/path/2700/14be25c4-8b7f-4b69-b863-4a7abaf6009f.jpg"
        ]
    );
});

test("Test manga page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/comics/%E9%87%91%E7%94%B0%E4%B8%80%EF%BC%93%EF%BC%97%E6%AD%B3%E3%81%AE%E4%BA%8B%E4%BB%B6%E7%B0%BF/f7aaa92fbbe6ed2ec7a87fe85419ed15",
        "yanmaga.jp-comics-%E9%87%91%E7%94%B0%E4%B8%80%EF%BC%93%EF%BC%97%E6%AD%B3%E3%81%AE%E4%BA%8B%E4%BB%B6%E7%B0%BF-f7aaa92fbbe6ed2ec7a87fe85419ed15/",
        dummyItems(29)
    );
});

test("episodes/54714d64c642c/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://younganimal.com/episodes/54714d64c642c/",
        "younganimal.com-episodes-54714d64c642c-/",
        dummyItems(30));
});
