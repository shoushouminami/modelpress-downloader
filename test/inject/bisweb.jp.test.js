const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const bisweb = require("../../src/inject/bisweb.jp");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test filter function ", () => {
    expect(bisweb.getLargeImg("https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1-scaled.jpeg"))
        .toStrictEqual({
            "retries":
                ["https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1-scaled.jpeg"],
            "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1.jpeg"
        });

    expect(bisweb.getLargeImg("https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1-scaled.jpg"))
        .toStrictEqual(
            {
                "retries":
                    ["https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1-scaled.jpg"],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/30122336/044bcc39ece486c887a8e6849116039b-1.jpg"
            }
        );

    expect(bisweb.getLargeImg("https://img.bisweb.jp/wp-content/uploads/2020/08/30122635/DMA-0648.jpg"))
        .toStrictEqual({
                "retries": ["https://img.bisweb.jp/wp-content/uploads/2020/08/30122635/DMA-0648.jpg"],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/30122635/DMA-0648.jpg"
            }
        );
});


test("Test beauty article", async () => {
    await testDirectDownload(
        browser,
        "https://bisweb.jp/beauty/97224",
        "bisweb.jp-beauty-97224/",
        [
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000822/DMA-5662.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000822/DMA-5662.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213319/E502C1A9-8E6D-4F65-82BB-7A47DD27DBE3.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213319/E502C1A9-8E6D-4F65-82BB-7A47DD27DBE3.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000653/DMA-kari_DSC14031.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000653/DMA-kari_DSC14031.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213302/EA954260-4055-4598-9486-A78C2557CFC7.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213302/EA954260-4055-4598-9486-A78C2557CFC7.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213637/8E46F243-69A5-4D5C-8853-40DA08809035.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213637/8E46F243-69A5-4D5C-8853-40DA08809035.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000637/DMA-kari_DSC14036.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000637/DMA-kari_DSC14036.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213653/5F4D8074-3985-4AEA-A91C-4F71F0E13DD0.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213653/5F4D8074-3985-4AEA-A91C-4F71F0E13DD0.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 90);
                await pageutils.wait(1000);
            },
            sizeMatch: function (expectedSize, actualSize) {
                console.log("expectedSize={} actualSize={}", expectedSize, actualSize)
                return actualSize >= 20;
            }
        });
});

test("Test fashion article", async () => {
    await testDirectDownload(
        browser,
        "https://bisweb.jp/fashion/97626",
        "bisweb.jp-fashion-97626/",
        [
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143741/DMA-0004-598x898.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143741/DMA-0004.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143918/DMA-_29A0644-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143918/DMA-_29A0644.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143501/DMA-0016-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143501/DMA-0016.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143657/DMA-0006-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143657/DMA-0006.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143533/DMA-0014-598x898.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143533/DMA-0014.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143756/DMA-0003-598x399.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143756/DMA-0003.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            },
            sizeMatch: function (expectedSize, actualSize) {
                return actualSize >= (expectedSize - 1);
            }
        });
});

test("Test lifestyle article", async () => {
    await testDirectDownload(
        browser,
        "https://bisweb.jp/lifestyle/97582",
        "bisweb.jp-lifestyle-97582/",
        [
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120359/01fbf2d5b291d25b24bed06ad8d7af24-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120359/01fbf2d5b291d25b24bed06ad8d7af24.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120345/7bbdbf8a4818a939369e20ab47c79f15-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120345/7bbdbf8a4818a939369e20ab47c79f15.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120328/80d93773730ba9937b6fd5907d82fdfe-1-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120328/80d93773730ba9937b6fd5907d82fdfe-1.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120312/DDDhotel-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120312/DDDhotel.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120255/DDDhotel-2-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120255/DDDhotel-2.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120238/DDDhotel3-598x596.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120238/DDDhotel3.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120221/c4783ea74965a00986c684dd0ad74290-598x449.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120221/c4783ea74965a00986c684dd0ad74290.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120203/27bc421099f71d760cae616bfee93446-598x449.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120203/27bc421099f71d760cae616bfee93446.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120145/80b9a2bc48bf1587dd8952118ee24396-598x450.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120145/80b9a2bc48bf1587dd8952118ee24396.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13120128/ae88fa1fa31f91998863d7c6396f4631-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13120128/ae88fa1fa31f91998863d7c6396f4631.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13125943/940bed8d9b6d1d475516f7f2c35893e3-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13125943/940bed8d9b6d1d475516f7f2c35893e3.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13123242/8c84ba7dfae59003cc87f647eede9661-1-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13123242/8c84ba7dfae59003cc87f647eede9661-1.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13123228/24786345617fc87951b068adbc0afab0-1-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13123228/24786345617fc87951b068adbc0afab0-1.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13123214/2db18f26a70513ca89a664db3a234559-1-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13123214/2db18f26a70513ca89a664db3a234559-1.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 90);
            },
            sizeMatch: function (expectedSize, actualSize) {
                return actualSize >= expectedSize;
            }
        });
});

test("Test mote article", async () => {
    await testDirectDownload(
        browser,
        "https://bisweb.jp/mote/96926",
        "bisweb.jp-mote-96926/",
        [
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/07/30154804/7a5b572cd42b84a734851d62639e0dbf-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/07/30154804/7a5b572cd42b84a734851d62639e0dbf.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/07/30155306/98633f6ebcfda38ecb90813d2b053ddf-598x598.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/07/30155306/98633f6ebcfda38ecb90813d2b053ddf.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 90);
            },
            sizeMatch: function (expectedSize, actualSize) {
                return actualSize >= expectedSize;
            }
        });
});
