const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser = getBrowserFactory(beforeAll, afterAll);

test("Test photo article", async () => {
    await testDirectDownload(
        browser(),
        "https://www.lvtimes.net/photo/8618/",
        "www.lvtimes.net-photo-8618-/",
        [
            "https://www.lvtimes.net/wp-content/uploads/2021/05/193171510_196000489039741_5973976942584882628_n.jpg",
            "https://www.lvtimes.net/wp-content/uploads/2021/05/192178301_833412847273898_5318750382192420648_n.jpg",
            "https://www.lvtimes.net/wp-content/uploads/2021/05/193002352_115303537349145_6417694314375242054_n.jpg"
        ]
    );
});

test("Test review article", async () => {
    await testDirectDownload(
        browser(),
        "https://www.lvtimes.net/review/7433/",
        "www.lvtimes.net-review-7433-/",
        [
            "https://www.lvtimes.net/wp-content/uploads/2021/05/main-61-scaled.jpg",
            "https://www.lvtimes.net/wp-content/uploads/2021/05/sub1-39-scaled.jpg"
        ]
    );
});

test("Test start article", async () => {
    await testDirectDownload(
        browser(),
        "https://www.lvtimes.net/star/8339/",
        "www.lvtimes.net-star-8339-/",
        [
            "https://www.lvtimes.net/wp-content/uploads/2021/05/main-110.jpg",
            "https://www.lvtimes.net/wp-content/uploads/2021/05/sub1-67.jpg"
        ]
    );
});

