const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");

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
        "https://yanmaga.jp/gravures/books/%E5%A4%8F%E7%9B%AE%E7%B6%BE%E3%81%8C%E6%92%AE%E3%82%8B%EF%BC%81%E3%83%8A%E3%83%84%E3%83%A1%E3%82%AB%E3%83%A1%E3%83%A9%E7%AC%AC5%E5%9B%9E_%E3%82%B2%E3%82%B9%E3%83%88_%E8%B1%8A%E7%94%B0%E3%83%AB%E3%83%8A/dba3540a411fd05896acbf42b6fca012",
        "yanmaga.jp-gravures-books-%E5%A4%8F%E7%9B%AE%E7%B6%BE%E3%81%8C%E6%92%AE%E3%82%8B%EF%BC%81%E3%83%8A%E3%83%84%E3%83%A1%E3%82%AB%E3%83%A1%E3%83%A9%E7%AC%AC5%E5%9B%9E_%E3%82%B2%E3%82%B9%E3%83%88_%E8%B1%8A%E7%94%B0%E3%83%AB%E3%83%8A/",
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
