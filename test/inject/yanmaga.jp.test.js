const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test columns page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/columns/articles/180",
        "yanmaga.jp-columns-articles-180/",
        [
            "https://eh96lnrmau.user-space.cdn.idcfcloud.net/uploads/trix_image/path/1651/55fb4a41-4f47-4875-8950-e319420812a4.jpg"
        ]
    );
});

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/columns/articles/344",
        "yanmaga.jp-columns-articles-344/",
        [
            "https://eh96lnrmau.user-space.cdn.idcfcloud.net/uploads/trix_image/path/2700/14be25c4-8b7f-4b69-b863-4a7abaf6009f.jpg"
        ]
    );
});

test("Test gravures page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/gravures/books/%E6%96%B0%E4%BA%95%E9%81%A5_%E3%83%9F%E3%82%B9%E3%83%9E%E3%82%AC%E3%82%AE%E3%83%A3%E3%83%AB%E5%8C%96%E8%A8%88%E7%94%BB01/f1997f48680074f37c2131e1cbee1aae",
        "yanmaga.jp-gravures-books-%E6%96%B0%E4%BA%95%E9%81%A5_%E3%83%9F%E3%82%B9%E3%83%9E%E3%82%AC%E3%82%AE%E3%83%A3%E3%83%AB%E5%8C%96%E8%A8%88%E7%94%BB01/",
        [
            {
                "filename": "i_0001.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0002.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0003.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0004.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0005.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0006.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0007.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0008.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0009.jpg",
                "type": "msg"
            },
            {
                "filename": "i_0010.jpg",
                "type": "msg"
            }
        ]
    );
});
