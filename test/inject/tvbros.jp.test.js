const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("pickup/2022/10/21/54241/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://tvbros.jp/pickup/2022/10/21/54241/",
        "tvbros.jp-pickup-2022-10-21-54241-/",
        [
            "https://tvbros.jp/wp-content/uploads/2022/11/9e85c4ee4cb6452ffe395c0ce79a692e.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/26b012cfd3154334d914c3c4fe22e3ef.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/77a76ace29600276ee54693d5f1a0089.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/5c9246e5699323fd4710f2f65131037c.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/3ccd4d3b565eb2cedf953f3b47531d21.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/49e2838cb7bd66c76574ca0a690dcad0.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/10/04a42f2ccacdde6f7e0ce4b35a41723a.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/09/6aa40456618e2da5a9de74f98fbe760b.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/09/baf3e6d944b599d8f719f30f1abd0ea2.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/02/sakura.jpg"
        ]);
});

test("pickup/2022/10/21/56307/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tvbros.jp/pickup/2022/10/21/56307/",
            "tvbros.jp-pickup-2022-10-21-56307-/",
            [
                    "https://tvbros.jp/wp-content/uploads/2022/10/d372e0610a9f6ac7efa9362213d4d541.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/3e5e7998991280f8883653c7a08adda6.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/6552a91570925a33b1012b747d789b26.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/3655c56dcb93ab4e9dc45b44eeba44a6.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/614b7048dd42e99ba09999e8d0c2587c.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/b9e81ddea9dfd63fe74f3faee89cf7c2.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/4fcb6ddbca0489cb96af530ac9737210.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/904b172adbb7a4b117b24a11b12b4209.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/523adec6b394b0841f3fa7279ecb54c3.jpeg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/629877026536d05aa49434cf6bfe4621.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/9ae057bc3df85165a7002170e9b9df13.jpg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/475cf752538ba6be10c2e9d94dc14a89.jpeg",
                    "https://tvbros.jp/wp-content/uploads/2022/10/28dd462848a0a3c9f31a9f5ac2002003.jpg"
            ]);
});

test("hit/2022/07/08/42876/2/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://tvbros.jp/hit/2022/07/08/42876/2/",
        "tvbros.jp-hit-2022-07-08-42876-2-/",
        [
            "https://tvbros.jp/wp-content/uploads/2022/07/1004c1d55b5278e91d32b05874ee053f.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/355f9871d5240cacefe328827985a599.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/bf551af2df36361ad8c2ace956f09e11.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/a94e75dffdceaa95afaca12170ad5980.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/eb65b427a71a32d81ebbd48fda1a0857.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/0ac2ca6c2a61717800b621b65182a797.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/06/9bcfa2532f7cb5726bdfd2cc96df3f70.jpeg",
            "https://tvbros.jp/wp-content/uploads/2022/07/cc915d8d901d819ab958ed00a3685d83.jpg"
        ]);
});

test("hit/2022/07/07/45312/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://tvbros.jp/hit/2022/07/07/45312/",
        "tvbros.jp-hit-2022-07-07-45312-/",
        [
            "https://tvbros.jp/wp-content/uploads/2022/07/0f480eb4b3101b1a38bb746a1a7dc089.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/1004c1d55b5278e91d32b05874ee053f.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/b85fe4d4858886d28591b852db9135f9.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/07/0c1e338a53e69bdffbaddf6d46cd9a0a.jpg",
            "https://tvbros.jp/wp-content/uploads/2022/06/9bcfa2532f7cb5726bdfd2cc96df3f70.jpeg"
        ]);
});
