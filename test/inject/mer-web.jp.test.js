const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mer-web.jp/fashion/364790/",
        "mer-web.jp-fashion-364790-/",
        [
            "https://mer-web.jp/wp-content/uploads/2021/05/8089e50294910c6cb163e5cb54ad137b.png",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0372-1.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0330-2-e1622077538626.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0423-1.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0403-1-e1622077574409.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0400-1-e1622077601240.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0212-1-e1622077626945.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0238.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0241-1-e1622077721380.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0236-1-e1622077751454.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0040-1-e1622077778733.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0151-1.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0083-1-e1622077808810.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0086-1-e1622077838401.jpg",
            "https://mer-web.jp/wp-content/uploads/2021/05/DSF0437-1.jpg"
        ]
    );
});

