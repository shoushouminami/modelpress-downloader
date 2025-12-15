const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test news.ntv.co.jp", () => {
    test("category/culture/0214f9501ed147ad80f3d715cbc0c079/image?p=8", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ntv.co.jp/category/culture/0214f9501ed147ad80f3d715cbc0c079/image?p=8",
            "news.ntv.co.jp-category-culture-0214f9501ed147ad80f3d715cbc0c079-image/",
            [
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/6bc4fc6e-b394-4eec-975d-bd82e939da23.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/46139a03-cc6d-4ced-9439-a5e4ed9f73dd.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/98d81d43-10a9-4e0f-8236-6b9b252366be.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/0da63c5a-2c60-4a59-8ac1-a2e637e57147.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/d6ce45bc-4e6d-4862-ae2f-80a461957e31.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/3dd9382c-32d7-4a80-9950-542327afc323.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/8aaba0e2-c76d-4ae3-b190-82fcb8e043d5.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/d5e8a677-be88-4f9a-b610-e813fec33ff9.jpg"
            ]);
    });

    test("category/culture/0214f9501ed147ad80f3d715cbc0c079", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://news.ntv.co.jp/category/culture/0214f9501ed147ad80f3d715cbc0c079",
            "news.ntv.co.jp-category-culture-0214f9501ed147ad80f3d715cbc0c079/",
            [
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/46139a03-cc6d-4ced-9439-a5e4ed9f73dd.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/98d81d43-10a9-4e0f-8236-6b9b252366be.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/0da63c5a-2c60-4a59-8ac1-a2e637e57147.jpg",
                "https://news.ntv.co.jp/gimage/n24/articles/08523c001a464dc3991ba0c3b740226f/d6ce45bc-4e6d-4862-ae2f-80a461957e31.jpg"
            ]);
    });
    
});
