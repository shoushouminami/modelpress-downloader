const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test www.tokyo-sports.co.jp", () => {
    test("articles/photo/370007", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tokyo-sports.co.jp/articles/photo/370007",
            "www.tokyo-sports.co.jp-articles-photo-370007/",
            [
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/a/4/800w/img_a4aa8ce9ad0662d2f339bead6194d306126287.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/a/4/-/img_a4aa8ce9ad0662d2f339bead6194d306126287.jpg"
                }
            ]);
    });

    test("articles/-/370007", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tokyo-sports.co.jp/articles/-/370007",
            "www.tokyo-sports.co.jp-articles---370007/",
            [
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/a/4/820w/img_a4aa8ce9ad0662d2f339bead6194d306126287.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/a/4/-/img_a4aa8ce9ad0662d2f339bead6194d306126287.jpg"
                }
            ]);
    });

    test("articles/-/370403", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tokyo-sports.co.jp/articles/-/370403",
            "www.tokyo-sports.co.jp-articles---370403/",
            [
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/f/5/820w/img_f5e5f07758999c402441131df5bce3c3172240.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/f/5/-/img_f5e5f07758999c402441131df5bce3c3172240.jpg"
                },
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/5/f/800w/img_5fa09a609283629df62f77f3e781ba0d379240.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/5/f/-/img_5fa09a609283629df62f77f3e781ba0d379240.jpg"
                }
            ]);
    });

    test("articles/photo/370403", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.tokyo-sports.co.jp/articles/photo/370403",
            "www.tokyo-sports.co.jp-articles-photo-370403/",
            [
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/f/5/800w/img_f5e5f07758999c402441131df5bce3c3172240.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/f/5/-/img_f5e5f07758999c402441131df5bce3c3172240.jpg"
                },
                {
                    "thumbnail": "https://tokyo-sports.ismcdn.jp/mwimgs/5/f/1640w/img_5fa09a609283629df62f77f3e781ba0d379240.jpg",
                    "url": "https://tokyo-sports.ismcdn.jp/mwimgs/5/f/-/img_5fa09a609283629df62f77f3e781ba0d379240.jpg"
                }
            ]);
    });
});
