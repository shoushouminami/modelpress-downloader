const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test mikan-incomplete.com news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://mikan-incomplete.com/report/78430",
        "mikan-incomplete.com-report-78430/",
        [
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/447.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/447.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/494.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/494.jpg"
            }
        ],
        {
                preinject: async function (page) {
                        await pageutils.scrollToBottom(page);
                }
        });
});

test("Test mikan-incomplete.com image gallery", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://mikan-incomplete.com/report/78430/2",
        "mikan-incomplete.com-report-78430-2/",
        [
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/342-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/342.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/388-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/388.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/403-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/403.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/428-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/428.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/415-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/415.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/396-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/396.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/391-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/391.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/547-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/547.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/334-1-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/334-1.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/346-1-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/346-1.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/353-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/353.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/365-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/365.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/406-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/406.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/409-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/409.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/439-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/439.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/450-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/450.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/452-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/452.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/458-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/458.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/467-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/467.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/481-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/481.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/484-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/484.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/496-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/496.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/501-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/501.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/512-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/512.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/518-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/518.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/534-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/534.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/544-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/544.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/447-150x150.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/447.jpg"
            }
        ],
        {
                preinject: async function (page) {
                        await pageutils.scrollToBottom(page, 1000);
                }
        });
});

test("Test girls news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://mikan-incomplete.com/girls/78210",
        "mikan-incomplete.com-girls-78210/",
        [
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-782828-1.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-782828-1.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-440075-4.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-440075-4.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-902570-2.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-902570-2.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-911086-3.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-911086-3.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-220257-5.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-220257-5.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-155147-0.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/10/d2929-1608-155147-0.jpg"
            }
        ],
        {
                preinject: async function (page) {
                        await pageutils.scrollToBottom(page);
                }
        }
    );
});

test("Test serial news article", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://mikan-incomplete.com/serial/66844",
        "mikan-incomplete.com-serial-66844/",
        [
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/04/005-1.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/04/005-1.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/04/065.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/04/065.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/04/041.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/04/041.jpg"
            },
            {
                "retries": [
                    "https://mikan-incomplete.com/wp-content/uploads/2020/04/022.jpg"
                ],
                "url": "https://mikan-incomplete.com/wp-content/uploads/2020/04/022.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});
