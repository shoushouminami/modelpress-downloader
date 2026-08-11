const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite beeeem.com", () => { 
    test("article/takaneko-maranyan", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://beeeem.com/article/takaneko-maranyan",
            "beeeem.com-article-takaneko-maranyan/",
            [
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/35026386-0c7b-43e2-e52c-ccf431eeb800/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/9fe90aa9-50c3-4584-cb3d-5ad5399ac900/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/81ca5940-5865-4f19-1c37-57869fa00d00/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/76e7ffe8-7846-4fca-9ec0-ec0be8eaf400/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/c12b82de-ef93-43af-aa3c-16d9858b8800/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/8268b75c-3322-42c0-bfcd-cc9e7ca8fb00/large"
            ]);
    });

    test("article/607904218657", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://beeeem.com/article/607904218657",
            "beeeem.com-article-607904218657/",
            [
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/06617b82-bf9d-4232-7769-0855e50ede00/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/b79c8539-797a-4de5-9ed6-f24cb2c11100/large",
                "https://imagedelivery.net/GAZ6B7nYxar6-1ZqFjo_3w/b1cdc5d6-cb0c-43ca-5341-e9df06c11f00/large"
            ]);
    });
});




