const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite trilltrill.jp", () => { 
    test("articles/4933834/photos/12", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trilltrill.jp/articles/4933834/photos/12",
            "trilltrill.jp-articles-4933834-photos-12/",
            [
                "https://media.trilltrill.jp/articles/4933834/description-image.d0efdd0576e9e56baf7c3e96c10235cf?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.11dfe7ab63168f9b1f09781df9dbbf56?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.391240c09c989752fb1a0c87be107469?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.c140bdcb1e3bd545caa510c67a3e6d51?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.e62f3e595f615213a6358c0b2d26f4c3?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.6bb72343c8b333fa4200d5fc80745c62?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.fb3e6203eea51ee5663b34f7f48a2110?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.abcc0f3894b00a7a3108845e890ce532?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.2f9849fd5ed666d823a4a2465207f256?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.c03a35f93783acc36d4de346308e7493?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.525801aca0cfffb8b36d564b6030d243?s=origin",
                "https://media.trilltrill.jp/articles/4933834/description-image.d8cd8a493f0c66267d1f69b8b6ab3b3a?s=origin"
            ]);
    });
    test("articles/4910111", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trilltrill.jp/articles/4910111",
            "trilltrill.jp-articles-4910111/",
            [
                "https://media.trilltrill.jp/articles/4910111/description-image.9b2ff061b18d09c81f7acfd2ac3cc63a",
                "https://media.trilltrill.jp/articles/4910111/description-image.bcbbd9e62df8b835347f35d06e45d9ee",
                "https://media.trilltrill.jp/articles/4910111/description-image.77179cb99047bd8c79db3d7fc3dc462b",
                "https://media.trilltrill.jp/articles/4910111/description-image.ef5a0d82cb9cb24a703e477d0f218b19",
                "https://media.trilltrill.jp/articles/4910111/description-image.ee1cc17f40ef62b643429f007ce5a5f2"
            ]);
    });
});

