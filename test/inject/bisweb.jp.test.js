const {testDirectDownload, launchBrowser, dummyItems, getBrowserFactory} = require("./testbase");
const bisweb = require("../../src/inject/bisweb.jp");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

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
        getBrowser(),
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
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000757/DMA-5769.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000757/DMA-5769.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213412/B1D8A9CB-A6C2-463C-A175-E246A5B62B64.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213412/B1D8A9CB-A6C2-463C-A175-E246A5B62B64.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000739/DMA-kari__DSC14006.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000739/DMA-kari__DSC14006.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213428/B1C413F7-BB63-4442-B3A6-6A2FFC075814.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213428/B1C413F7-BB63-4442-B3A6-6A2FFC075814.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07005549/DMA-kari__DSC14004.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07005549/DMA-kari__DSC14004.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213336/CC4F63DB-462F-4117-AA29-4C0E88D03F6E.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213336/CC4F63DB-462F-4117-AA29-4C0E88D03F6E.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000723/DMA-kari__DSC14012.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000723/DMA-kari__DSC14012.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213723/3ED1F0D9-B7C1-4B57-9B7F-A53C7D0393A4.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213723/3ED1F0D9-B7C1-4B57-9B7F-A53C7D0393A4.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000708/DMA-kari_DSC14015.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000708/DMA-kari_DSC14015.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000324/DMA-5520.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000324/DMA-5520.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213737/1C847CB1-E413-4191-8D8C-EEFD7F56DF32.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213737/1C847CB1-E413-4191-8D8C-EEFD7F56DF32.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000149/DMA-LOTION_COOL.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000149/DMA-LOTION_COOL.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213354/BBE3B8BB-85AF-4108-BAA3-190CE09B4F86.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213354/BBE3B8BB-85AF-4108-BAA3-190CE09B4F86.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000221/DMA-kari_DSC14066.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000221/DMA-kari_DSC14066.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213605/72A4EFCC-D96A-4382-A714-061CCD4D6708.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213605/72A4EFCC-D96A-4382-A714-061CCD4D6708.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000204/DMA-kari_DSC14068.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000204/DMA-kari_DSC14068.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/11213709/5A0107DD-1A23-4008-A480-C7301F7B2888.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/11213709/5A0107DD-1A23-4008-A480-C7301F7B2888.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000236/DMA-kari_DSC14063.png"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000236/DMA-kari_DSC14063.png"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/07000308/DMA-5460_-1.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/07000308/DMA-5460_-1.jpg"
            }
        ]);
});

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
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
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143517/DMA-0015-598x898.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143517/DMA-0015.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143811/DMA-0002-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143811/DMA-0002.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143825/DMA-0001-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143825/DMA-0001.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143638/DMA-0009-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143638/DMA-0009.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143605/DMA-0013-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143605/DMA-0013.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143445/DMA-0017-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143445/DMA-0017.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143854/DMA-_29A0776-598x898.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143854/DMA-_29A0776.jpg"
            },
            {
                "retries": [
                    "https://img.bisweb.jp/wp-content/uploads/2020/08/13143621/DMA-0012-598x897.jpg"
                ],
                "url": "https://img.bisweb.jp/wp-content/uploads/2020/08/13143621/DMA-0012.jpg"
            }
        ]);
});

test("Test lifestyle article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bisweb.jp/lifestyle/97582",
        "bisweb.jp-lifestyle-97582/",
        [
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/01fbf2d5b291d25b24bed06ad8d7af24-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/01fbf2d5b291d25b24bed06ad8d7af24.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/7bbdbf8a4818a939369e20ab47c79f15-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/7bbdbf8a4818a939369e20ab47c79f15.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/80d93773730ba9937b6fd5907d82fdfe-1-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/80d93773730ba9937b6fd5907d82fdfe-1.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel-2-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel-2.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel3-598x596.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/DDDhotel3.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/c4783ea74965a00986c684dd0ad74290-598x449.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/c4783ea74965a00986c684dd0ad74290.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/27bc421099f71d760cae616bfee93446-598x449.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/27bc421099f71d760cae616bfee93446.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/80b9a2bc48bf1587dd8952118ee24396-598x450.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/80b9a2bc48bf1587dd8952118ee24396.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/ae88fa1fa31f91998863d7c6396f4631-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/ae88fa1fa31f91998863d7c6396f4631.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/940bed8d9b6d1d475516f7f2c35893e3-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/940bed8d9b6d1d475516f7f2c35893e3.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/8c84ba7dfae59003cc87f647eede9661-1-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/8c84ba7dfae59003cc87f647eede9661-1.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/24786345617fc87951b068adbc0afab0-1-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/24786345617fc87951b068adbc0afab0-1.jpg"
            },
            {
                "retries": [
                    "https://bisweb.jp/wp-content/uploads/2020/08/2db18f26a70513ca89a664db3a234559-1-598x598.jpg"
                ],
                "url": "https://bisweb.jp/wp-content/uploads/2020/08/2db18f26a70513ca89a664db3a234559-1.jpg"
            }
        ]);
});

test("Test mote article", async () => {
    await testDirectDownload(
        getBrowser(),
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
        ]);
});
