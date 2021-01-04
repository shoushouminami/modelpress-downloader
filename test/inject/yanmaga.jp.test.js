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

test("Test scanning page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://yanmaga.jp/gravures/books/%E5%8A%A0%E8%97%A4%E5%B0%8F%E5%A4%8F%E3%80%81%E3%82%B0%E3%83%A9%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%81%8B%EF%BC%9F%E3%82%A8%E3%83%A2%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%81%8B%EF%BC%9F/5088e1998c9e196a6a1d1f6212b90db3",
        "yanmaga.jp-gravures-books-%E5%8A%A0%E8%97%A4%E5%B0%8F%E5%A4%8F%E3%80%81%E3%82%B0%E3%83%A9%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%81%8B%EF%BC%9F%E3%82%A8%E3%83%A2%E3%81%8B%E3%82%89%E8%A6%8B%E3%82%8B%E3%81%8B%EF%BC%9F/",
        [
            {
                "filename": "2.jpg",
                "type": "msg",
                "url": "2.jpg"
            }
        ],
        {
            preretry: async function (page) {
                await pageutils.wait(6000);
                await pageutils.scrollToTop(page);
            },
            sizeMatch: function (expected, actual) {
                expect(actual).toBeGreaterThan(6);
            }
        }
    );
});
