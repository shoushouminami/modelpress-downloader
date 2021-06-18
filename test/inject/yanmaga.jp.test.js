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
        "https://yanmaga.jp/gravures/books/%E9%87%8E%E7%94%B0%E3%81%99%E3%81%BF%E3%82%8C_%E3%83%A4%E3%83%B3%E3%83%9E%E3%82%AC%E3%82%A2%E3%82%B6%E3%83%BC%E3%81%A3%E3%81%99%EF%BC%81YM2021%E5%B9%B429%E5%8F%B7/deae139a33d133e2526123e14a9cf62d",
        "yanmaga.jp-gravures-books-%E9%87%8E%E7%94%B0%E3%81%99%E3%81%BF%E3%82%8C_%E3%83%A4%E3%83%B3%E3%83%9E%E3%82%AC%E3%82%A2%E3%82%B6%E3%83%BC%E3%81%A3%E3%81%99%EF%BC%81YM2021%E5%B9%B429%E5%8F%B7/",
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
