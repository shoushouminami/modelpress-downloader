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

test("Test special gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/gallery/special/77136/2",
        "www.crank-in.net-gallery-special-77136-2/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397174_650.jpg",
                    "https://www.crank-in.net/img/db/1397174_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397174_1200.jpg"
            }
        ]
    );
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

test("Test news page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/news/87669/1",
        "www.crank-in.net-news-87669-1/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1461515_650.jpg",
                    "https://www.crank-in.net/img/db/1461515_300.jpg"
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
        ]
    );
});
