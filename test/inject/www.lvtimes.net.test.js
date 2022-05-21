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

test("Test star article", async () => {
    await testDirectDownload(
        browser(),
        "https://www.lvtimes.net/star/31282/",
        "www.lvtimes.net-star-31282-/",
        [
            "https://www.lvtimes.net/wp-content/uploads/2022/05/main-24-700x366.jpg",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-0c13b6a1335553dab5fb5ccfad80bb90-1617x2287.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-f9ad610c478091192f5122f0064e713c-1181x683.jpg?format=jpeg&auto=webp&quality=85%2C75&width=1950&height=1350&fit=bounds",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-87bde6434872b7ed7920802fecedec67-2599x1831.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-f41a62301cd9e1101fa2b4b7dcc34a9a-2599x1831.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-8a36e8e541e8a66a91bf9a5dff93cab5-2599x1831.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds",
            "https://prcdn.freetls.fastly.net/release_image/10201/204/10201-204-ded7bd3189bd1ee201f154af0bf235fc-2599x1831.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds"
        ]
    );
});

