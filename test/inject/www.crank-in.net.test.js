const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test special page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/special/77136/1",
        "www.crank-in.net-special-77136-1/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397289_650.jpg",
                    "https://www.crank-in.net/img/db/1397289_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397289_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397174_650.jpg",
                    "https://www.crank-in.net/img/db/1397174_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397174_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397290_650.jpg",
                    "https://www.crank-in.net/img/db/1397290_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397290_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397292_650.jpg",
                    "https://www.crank-in.net/img/db/1397292_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397292_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397176_650.jpg",
                    "https://www.crank-in.net/img/db/1397176_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397176_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397175_650.jpg",
                    "https://www.crank-in.net/img/db/1397175_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397175_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397186_650.jpg",
                    "https://www.crank-in.net/img/db/1397186_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397186_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397184_650.jpg",
                    "https://www.crank-in.net/img/db/1397184_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397184_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397293_650.jpg",
                    "https://www.crank-in.net/img/db/1397293_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397293_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397179_650.jpg",
                    "https://www.crank-in.net/img/db/1397179_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397179_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397294_650.jpg",
                    "https://www.crank-in.net/img/db/1397294_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397294_1200.jpg"
            }
        ]
    );
});

test("gallery/special/77136/2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/gallery/special/77136/2",
        "www.crank-in.net-gallery-special-77136-2/",
        [
            {
                "url": "https://www.crank-in.net/img/db/1397174_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397174_650.jpg",
                    "https://www.crank-in.net/img/db/1397174_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397289_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397289_650.jpg",
                    "https://www.crank-in.net/img/db/1397289_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397290_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397290_650.jpg",
                    "https://www.crank-in.net/img/db/1397290_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397292_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397292_650.jpg",
                    "https://www.crank-in.net/img/db/1397292_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397176_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397176_650.jpg",
                    "https://www.crank-in.net/img/db/1397176_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397293_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397293_650.jpg",
                    "https://www.crank-in.net/img/db/1397293_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397179_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397179_650.jpg",
                    "https://www.crank-in.net/img/db/1397179_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397294_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397294_650.jpg",
                    "https://www.crank-in.net/img/db/1397294_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397175_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397175_650.jpg",
                    "https://www.crank-in.net/img/db/1397175_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397186_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397186_650.jpg",
                    "https://www.crank-in.net/img/db/1397186_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/1397184_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/1397184_650.jpg",
                    "https://www.crank-in.net/img/db/1397184_650.jpg"
                ]
            }
        ]);
});

test("Test column article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/column/80473/1",
        "www.crank-in.net-column-80473-1/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1416220_650.jpg",
                    "https://www.crank-in.net/img/db/1416220_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1416220_1200.jpg"
            }
        ]
    );
});

test("Test column summary page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/column/80473",
        "www.crank-in.net-column-80473/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1416220_650.jpg",
                    "https://www.crank-in.net/img/db/1416220_300.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1416220_1200.jpg"
            }
        ]
    );
});

test("Test special page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/special/87467/1",
        "www.crank-in.net-special-87467-1/",
        [
            "https://www.crank-in.net/feature/2021_raya/images/001.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/002.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/003.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/004.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/005.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/006.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/007.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/008.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/009.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/010.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/011.jpg",
            "https://www.crank-in.net/feature/2021_raya/images/012.jpg"
        ]
    );
});

test("news/87669/1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/news/87669/1",
        "www.crank-in.net-news-87669-1/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1461515_650.jpg",
                    "https://www.crank-in.net/img/db/1461515_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1461515_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1459679_650.jpg",
                    "https://www.crank-in.net/img/db/1459679_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1459679_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1459680_650.jpg",
                    "https://www.crank-in.net/img/db/1459680_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1459680_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1461517_650.jpg",
                    "https://www.crank-in.net/img/db/1461517_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1461517_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1461518_650.jpg",
                    "https://www.crank-in.net/img/db/1461518_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1461518_1200.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1461516_650.jpg",
                    "https://www.crank-in.net/img/db/1461516_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1461516_1200.jpg"
            }
        ]);
});

test("gallery/news/116325", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/gallery/news/116325",
        "www.crank-in.net-gallery-news-116325/",
        [
            {
                "url": "https://www.crank-in.net/img/db/227104221150464_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/227104221150464_650.jpg",
                    "https://www.crank-in.net/img/db/227104221150464_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/229106220152463_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/229106220152463_650.jpg",
                    "https://www.crank-in.net/img/db/229106220152463_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/226105229152515_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/226105229152515_650.jpg",
                    "https://www.crank-in.net/img/db/226105229152515_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/229105220153496_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/229105220153496_650.jpg",
                    "https://www.crank-in.net/img/db/229105220153496_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/225106226153529_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/225106226153529_650.jpg",
                    "https://www.crank-in.net/img/db/225106226153529_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/224105228150482_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/224105228150482_650.jpg",
                    "https://www.crank-in.net/img/db/224105228150482_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/226106225155417_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/226106225155417_650.jpg",
                    "https://www.crank-in.net/img/db/226106225155417_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/223105222157445_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/223105222157445_650.jpg",
                    "https://www.crank-in.net/img/db/223105222157445_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228108221154401_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228108221154401_650.jpg",
                    "https://www.crank-in.net/img/db/228108221154401_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/221103220156447_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/221103220156447_650.jpg",
                    "https://www.crank-in.net/img/db/221103220156447_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/227103228150516_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/227103228150516_650.jpg",
                    "https://www.crank-in.net/img/db/227103228150516_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/223100229153425_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/223100229153425_650.jpg",
                    "https://www.crank-in.net/img/db/223100229153425_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/222105223155517_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/222105223155517_650.jpg",
                    "https://www.crank-in.net/img/db/222105223155517_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/224101228156438_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/224101228156438_650.jpg",
                    "https://www.crank-in.net/img/db/224101228156438_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/229103225151472_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/229103225151472_650.jpg",
                    "https://www.crank-in.net/img/db/229103225151472_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228101222155427_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228101222155427_650.jpg",
                    "https://www.crank-in.net/img/db/228101222155427_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/225104229153478_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/225104229153478_650.jpg",
                    "https://www.crank-in.net/img/db/225104229153478_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/224106228155431_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/224106228155431_650.jpg",
                    "https://www.crank-in.net/img/db/224106228155431_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/222103223158504_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/222103223158504_650.jpg",
                    "https://www.crank-in.net/img/db/222103223158504_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228108221156463_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228108221156463_650.jpg",
                    "https://www.crank-in.net/img/db/228108221156463_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/225100227155418_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/225100227155418_650.jpg",
                    "https://www.crank-in.net/img/db/225100227155418_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/226101223153506_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/226101223153506_650.jpg",
                    "https://www.crank-in.net/img/db/226101223153506_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/223104226156405_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/223104226156405_650.jpg",
                    "https://www.crank-in.net/img/db/223104226156405_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/227108223150427_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/227108223150427_650.jpg",
                    "https://www.crank-in.net/img/db/227108223150427_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228100226156433_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228100226156433_650.jpg",
                    "https://www.crank-in.net/img/db/228100226156433_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/225105228153410_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/225105228153410_650.jpg",
                    "https://www.crank-in.net/img/db/225105228153410_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228109223150517_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228109223150517_650.jpg",
                    "https://www.crank-in.net/img/db/228109223150517_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/224103229152445_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/224103229152445_650.jpg",
                    "https://www.crank-in.net/img/db/224103229152445_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/228104223156445_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/228104223156445_650.jpg",
                    "https://www.crank-in.net/img/db/228104223156445_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/222104223155401_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/222104223155401_650.jpg",
                    "https://www.crank-in.net/img/db/222104223155401_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/227102224151469_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/227102224151469_650.jpg",
                    "https://www.crank-in.net/img/db/227102224151469_650.jpg"
                ]
            },
            {
                "url": "https://www.crank-in.net/img/db/225109224155511_1200.jpg",
                "retries": [
                    "https://www.crank-in.net/img/db/225109224155511_650.jpg",
                    "https://www.crank-in.net/img/db/225109224155511_650.jpg"
                ]
            }
        ]);
});
