const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test photo page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ar-mag.jp/articles/photo/6149",
        "ar-mag.jp-articles-photo-6149/",
        [
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/0/6/790wm/img_064541828047ebf8f20f896e7ec90b0b96007.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/0/6/-/img_064541828047ebf8f20f896e7ec90b0b96007.jpg"
            },
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/a/5/790wm/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/a/5/-/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"
            },
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/0/1/790wm/img_0102e7705851a33c5b9ba14ee44d83bc84952.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/0/1/-/img_0102e7705851a33c5b9ba14ee44d83bc84952.jpg"
            }
        ]
    );
});

test("Test article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ar-mag.jp/articles/-/6149",
        "ar-mag.jp-articles---6149/",
        [
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/0/1/790wm/img_0102e7705851a33c5b9ba14ee44d83bc84952.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/0/1/-/img_0102e7705851a33c5b9ba14ee44d83bc84952.jpg"
            },
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/a/5/100wm/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/a/5/-/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"
            },
            {
                "retries": [
                    "https://arweb.ismcdn.jp/mwimgs/0/6/100wm/img_064541828047ebf8f20f896e7ec90b0b96007.jpg"
                ],
                "url": "https://arweb.ismcdn.jp/mwimgs/0/6/-/img_064541828047ebf8f20f896e7ec90b0b96007.jpg"
            }
        ]
    );
});

test("Test article page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ar-mag.jp/articles/-/6698?display=full",
        "ar-mag.jp-articles---6698/",
        [
            {
                "retries": [],
                "url": "https://ar-mag.jp/mwimgs/2/4/-/img_243424df8bf8404884229a19cb4a6608201613.png"
            },
            {
                "retries": [],
                "url": "https://ar-mag.jp/mwimgs/1/9/-/img_193ecfa3ade2f6fa9ca64c9a521145ef284015.png"
            },
            {
                "retries": [],
                "url": "https://ar-mag.jp/mwimgs/0/f/-/img_0f56b5b85eb126e419485dc0bb71d592261906.png"
            }
        ]
    );
});
