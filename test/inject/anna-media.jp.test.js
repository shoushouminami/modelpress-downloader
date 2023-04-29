const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("Test gurume news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://anna-media.jp/archives/423205",
        "anna-media.jp-archives-423205/",
        [
            "https://anna-media.jp/wp-content/uploads/2021/04/rome4.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/rome1.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/d43737-50-887312-4.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/d43737-50-306679-2.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/d43737-50-550090-3.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/d43737-50-225696-0.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/rome2.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/rome3.jpg"
        ]
    );
});

test("Test fashion news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://anna-media.jp/archives/423672",
        "anna-media.jp-archives-423672/",
        [
            "https://anna-media.jp/wp-content/uploads/2021/04/fashion.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/1.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/3-1.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/1-1.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/4-2.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/1-2.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/27.jpg"
        ]
    );
});

test("Test gurume news page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://anna-media.jp/archives/427072",
        "anna-media.jp-archives-427072/",
        [
            "https://anna-media.jp/wp-content/uploads/2021/05/a5e3a4745e75bb32c974e65a52b15ce9.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/ce26e01487c814a92156c53e939a48db.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/6ebf278a5355e8a12dcfaa48f049b79f.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/30cc0c541c33c28d97490f2f81bf6cf4.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/59ecc9eced6e6c9495aec1cb5327926a.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/8ff74bd89f5ce6f5c95cfded3db98b41.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/10919a58e6ef8e88db271ffdb1ac6cac.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/04d9739a3aebb071c6001cbe8e7c4bd6.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/05/100-21040712.jpg"
        ]
    );
});

test("Test odekake news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://anna-media.jp/archives/424944",
        "anna-media.jp-archives-424944/",
        [
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173255.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420171826.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420171954.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420172548.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420172553.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420172556.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173050.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420172602.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173057.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173430.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173413.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173416.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173415.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173419.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173417.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173927.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173948.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173947.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173951.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173943.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420173946.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174527.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174007.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174010.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174015.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174332.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174334.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174600.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174442.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174441.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174439.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174424.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420174431.jpg",
            "https://anna-media.jp/wp-content/uploads/2021/04/20210420175027.jpg"
        ]
    );
});

test("archives/714764", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://anna-media.jp/archives/714764",
        "anna-media.jp-archives-714764/",
        [
            "https://anna-media.jp/wp-content/uploads/2023/04/23-04harukaze-kairo.jpg",
            "https://anna-media.jp/wp-content/uploads/2023/04/23-04harukaze-kairo3.jpg",
            "https://anna-media.jp/wp-content/uploads/2023/04/23-04harukaze-kairo4.jpg",
            "https://anna-media.jp/wp-content/uploads/2023/04/23-04harukaze-kairo2.jpg"
        ]);
});
