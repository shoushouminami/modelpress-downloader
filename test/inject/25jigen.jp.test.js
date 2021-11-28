const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test interview page", async () => {
    await testDirectDownload(
        browser(),
        "https://25jigen.jp/interview/58776",
        "25jigen.jp-interview-58776/",
        [
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030530.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030699.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030534.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030574.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030631.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030640.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030649.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/L1030669.jpg"
        ]
    );
});

test("Test news page", async () => {
    await testDirectDownload(
        browser(),
        "https://25jigen.jp/report/58496",
        "25jigen.jp-report-58496/",
        [
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_2.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_21.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_1.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_3.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_4.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_5.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_6.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_7.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_8.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_9.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_10.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_11.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_12.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_13.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_14.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_17.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_18.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_19.jpg",
            "https://25jigen.jp/wp-content/uploads/2021/11/shura_20.jpg"
        ]
    );
});

test("Test work page", async () => {
        await testDirectDownload(
            browser(),
            "https://25jigen.jp/work/58733",
            "25jigen.jp-work-58733/",
            [
                    "https://25jigen.jp/wp-content/uploads/2021/11/kabaddi_main.jpg"
            ]
        );
});

