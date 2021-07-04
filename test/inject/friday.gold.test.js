const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test gravure article intro", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/gravure/article/86647",
        "friday.gold-gravure-article-86647/",
        [
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/06/01-777.jpg",
            },
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/06/05-1019.jpg"
            }
        ].concat(dummyItems(7))
    );
});

test("Test gravure article photo page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/gravure/article/86647/asset/87767",
        "friday.gold-gravure-article-86647-asset-87767/",
        [
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/06/01-777.jpg",
            },
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/06/05-1019.jpg"
            }
        ].concat(dummyItems(7))
    );
});

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/article/88160",
        "friday.gold-article-88160/",
        [
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/07/SH482249.jpg",
            },
            {
                prefix: "https://media.friday.gold/image/upload/dpr_2,f_auto,q_auto:eco/if_iw_gt_1280,w_640/v1/assets/2021/07/image11.jpg"
            }
        ].concat(dummyItems(3))
    );
});
