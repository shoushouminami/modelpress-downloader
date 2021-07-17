const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.daily.co.jp/gossip/2021/07/04/0014470949.shtml",
        "www.daily.co.jp-gossip-2021-07-04-0014470949.shtml/",
        [
            {
                "retries": [
                    "https://i.daily.jp/gossip/2021/07/04/Images/14470950.jpg"
                ],
                "url": "https://i.daily.jp/gossip/2021/07/04/Images/f_14470950.jpg"
            }
        ]
    );
});

test("Test news page with 3 images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.daily.co.jp/baseball/2019/07/16/0012519373.shtml",
        "www.daily.co.jp-baseball-2019-07-16-0012519373.shtml/",
        [
            {
                "retries": [
                    "https://i.daily.jp/baseball/2019/07/16/Images/12519374.jpg"
                ],
                "url": "https://i.daily.jp/baseball/2019/07/16/Images/f_12519374.jpg"
            },
            {
                "retries": [
                    "https://i.daily.jp/baseball/2019/07/16/Images/12519417.jpg"
                ],
                "url": "https://i.daily.jp/baseball/2019/07/16/Images/f_12519417.jpg"
            },
            {
                "retries": [
                    "https://i.daily.jp/baseball/2019/07/16/Images/12519510.jpg"
                ],
                "url": "https://i.daily.jp/baseball/2019/07/16/Images/f_12519510.jpg"
            }
        ]
    );
});

test("Test photo page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.daily.co.jp/gossip/2021/07/04/0014470949.shtml?ph=1",
        "www.daily.co.jp-gossip-2021-07-04-0014470949.shtml/",
        [
            {
                "retries": [],
                "url": "https://i.daily.jp/gossip/2021/07/04/Images/f_14470950.jpg"
            }
        ]
    );
});
