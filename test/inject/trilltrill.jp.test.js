const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/3841342", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trilltrill.jp/articles/3841342",
            "trilltrill.jp-articles-3841342/",
            [
                    "https://media.trilltrill.jp/articles/3841342/description-image.101af58594b7a31003da22298368ba4b",
                    "https://media.trilltrill.jp/articles/3841342/description-image.a748fa31b1b486291f05e6d6b134ce3a",
                    "https://media.trilltrill.jp/articles/3841342/description-image.63c76729f9be6219cfdf7663d64cb913",
                    "https://media.trilltrill.jp/articles/3841342/description-image.df1800d9b4ae1cefeaa84a04547a9a84"
            ]);
});

test("articles/3837736/photos/5", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://trilltrill.jp/articles/3837736/photos/5",
            "trilltrill.jp-articles-3837736-photos-5/",
            [
                    "https://media.trilltrill.jp/articles/3837736/description-image.f66a7f676d3ab52600a840e9248234f9?s=origin",
                    "https://media.trilltrill.jp/articles/3837736/description-image.5bb32a7214c7a8203fe78cfb57c9ea99?s=origin",
                    "https://media.trilltrill.jp/articles/3837736/description-image.5701daee37bb775ff727697d5acb9722?s=origin",
                    "https://media.trilltrill.jp/articles/3837736/description-image.0ab2c567a5b58e50e8afdf84235f6ec4?s=origin",
                    "https://media.trilltrill.jp/articles/3837736/description-image.22b697e70851df58b1d0da2a9537a0bc?s=origin"
            ]);
});
