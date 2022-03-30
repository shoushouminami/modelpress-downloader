const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test article", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://baila.hpplus.jp/46840/1",
            "baila.hpplus.jp-46840-1/",
            [
                "https://img-baila.hpplus.jp/common/large/image/25/251a8736-7666-463f-8aa8-9f0c0775e48a.jpg",
                "https://img-baila.hpplus.jp/common/large/image/86/86d280d5-e2c7-4790-b751-039ea19fd7e2.jpg",
                "https://img-baila.hpplus.jp/common/large/image/20/2021cae8-a20f-4885-87f9-55cc88c741f3.jpg",
                "https://img-baila.hpplus.jp/common/large/image/7d/7d9ae484-bfad-45a2-9b5f-426855bbec64.jpg",
                "https://img-baila.hpplus.jp/common/large/image/8f/8fd1ea69-3839-4ee4-b76a-3a45c6ba0c7c.jpg",
                "https://img-baila.hpplus.jp/common/large/image/1c/1c31de29-b24f-43f1-818b-506c1d3b8c0a.jpg"
            ]
        );
});

test("Test article 2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://baila.hpplus.jp/47061/3",
            "baila.hpplus.jp-47061-3/",
            [
                    "https://img-baila.hpplus.jp/common/large/image/70/70ce57ef-c77b-4678-9346-1e2a77c6a54e.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/6a/6a9c665c-9e1b-4bf3-9d98-2fa897e8e357.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/64/64f9d6fe-ba55-4ee5-847c-a9113a7c726f.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/0d/0de96ef1-c71a-415b-a3ba-5d642f2042e3-379x249.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/c0/c03ebfe7-bdaa-4dad-8bd6-3b95765e962a.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/a5/a5621e6c-b548-4469-a81a-13a4337db839.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/4d/4dce7412-60e4-4cd8-9c65-0e3ffe6c54af.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/29/29e0e80c-493d-48ae-8442-f0d9ad0606cc-1249x748.jpg",
                    "https://img-baila.hpplus.jp/common/large/image/5d/5de27870-a15b-48ee-b0c3-8792a1506286.jpg"
            ]
        );
});
