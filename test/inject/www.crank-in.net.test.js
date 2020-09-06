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
                    "https://www.crank-in.net/img/db/1397289_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397289_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397174_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397174_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397290_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397290_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397292_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397292_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397176_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397176_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397175_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397175_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397186_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397186_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397184_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397184_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397293_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397293_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397179_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397179_650.jpg"
            },
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397294_150.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397294_650.jpg"
            }
        ]);
});

test("Test special gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/gallery/special/77136/2",
        "www.crank-in.net-gallery-special-77136-2/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1397174_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1397174_650.jpg"
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
                    "https://www.crank-in.net/img/db/1416220_650.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1416220_650.jpg"
            }
        ]);
});

test("Test column summary page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.crank-in.net/column/80473",
        "www.crank-in.net-column-80473/",
        [
            {
                "retries": [
                    "https://www.crank-in.net/img/db/1416220_300.jpg"
                ],
                "url": "https://www.crank-in.net/img/db/1416220_650.jpg"
            }
        ]);
});
