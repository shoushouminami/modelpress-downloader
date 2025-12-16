const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {re, getLargeImg} = require("../../src/inject/i-voce.jp");

test("Test regex", () => {
    let m = "https://res.cloudinary.com/voce/image/fetch/w_750,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/top-26.jpg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("w_750,f_auto,q_auto");
});

test("Test getLargeImg", () => {
    expect(getLargeImg("https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"))
        .toStrictEqual({
            url: "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg",
            retries: ["https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"]
        });

    expect(getLargeImg("https://res.cloudinary.com/voce/image/fetch/w_800,f_auto,q_auto,c_limit:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"))
        .toStrictEqual({
            url: "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg",
            retries: ["https://res.cloudinary.com/voce/image/fetch/w_800,f_auto,q_auto,c_limit:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"]
        });
});

test("feed/404592/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://i-voce.jp/feed/404592/",
        "i-voce.jp-feed-404592-/",
        [
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_750,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/top-26.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/top-26.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/0729c6a0e1bd9dcccd5ee5235322e679.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/d14f37c393c5f30ec43b3e5826622c72.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/d14f37c393c5f30ec43b3e5826622c72.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/787a9fb8dc8a5cf4c8cd494d64c1abdc.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/787a9fb8dc8a5cf4c8cd494d64c1abdc.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/d16f93c1b317d81e87b846f063939a73.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/d16f93c1b317d81e87b846f063939a73.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/a769dedbd096c5f419e96212bd963577.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/a769dedbd096c5f419e96212bd963577.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/b5024653c9e6dcfea582484c10e3edc7.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/b5024653c9e6dcfea582484c10e3edc7.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/564294ed14e72a0193e48e6e4172b904.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/564294ed14e72a0193e48e6e4172b904.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/acd2e2fbbcb88fa16495587719e1c07a.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/02/acd2e2fbbcb88fa16495587719e1c07a.jpg"
            }
        ]);
});

test("Test magazine feed article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://i-voce.jp/feed/455477/",
        "i-voce.jp-feed-455477-/",
        dummyItems(9)
    );
});

test("feed/459549/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://i-voce.jp/feed/459549/",
        "i-voce.jp-feed-459549-/",
        dummyItems(11));
});

test("Test cover beauty article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://i-voce.jp/feed/460607/",
        "i-voce.jp-feed-460607-/",
        [
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_750,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/097c7d31dc6a14c5f6020a23f629b2ee.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/097c7d31dc6a14c5f6020a23f629b2ee.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/3bc8c8f37e07e3a7890805423103d09d.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/3bc8c8f37e07e3a7890805423103d09d.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/voce/image/fetch/w_800,c_limit,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/92abd3512eb3f3b8e94915bf1b8e49cd.jpg"
                ],
                "url": "https://res.cloudinary.com/voce/image/fetch/w_1500,f_auto,q_auto:eco/https://wp.i-voce.jp/wp-content/uploads/2021/03/92abd3512eb3f3b8e94915bf1b8e49cd.jpg"
            }
        ]
    );
});
