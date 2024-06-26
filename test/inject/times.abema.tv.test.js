const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/-/7039728", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/-/7039728",
        "times.abema.tv-articles---7039728/",
        [
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/2/8/724w/img_282140be4f76eec3bfce4658a720451f268882.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/2/8/-/img_282140be4f76eec3bfce4658a720451f268882.jpg"
            }
        ]);
});

test("articles/-/7039728?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/-/7039728?page=1",
        "times.abema.tv-articles---7039728/",
        [
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/2/8/724w/img_282140be4f76eec3bfce4658a720451f268882.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/2/8/-/img_282140be4f76eec3bfce4658a720451f268882.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/e/e/724w/img_eefc972a6a5a807aa398ad26ad50d8c9112694.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/e/e/-/img_eefc972a6a5a807aa398ad26ad50d8c9112694.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/0/8/724w/img_08d25fcd86f57a0616bc42581d3afdcf120462.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/0/8/-/img_08d25fcd86f57a0616bc42581d3afdcf120462.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/8/4/724w/img_84fb4e1ae73419cd5a9b42904d2299b3143969.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/8/4/-/img_84fb4e1ae73419cd5a9b42904d2299b3143969.jpg"
            }
        ]);
});

test("articles/photo/7039728", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/photo/7039728",
        "times.abema.tv-articles-photo-7039728/",
        [
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/2/8/1352w/img_282140be4f76eec3bfce4658a720451f268882.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/2/8/-/img_282140be4f76eec3bfce4658a720451f268882.jpg"
            },
            {
                "retries": [
                    "https://times.abema.tv/mwimgs/e/e/-/img_eefc972a6a5a807aa398ad26ad50d8c9112694.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/e/e/-/img_eefc972a6a5a807aa398ad26ad50d8c9112694.jpg"
            },
            {
                "retries": [
                    "https://times.abema.tv/mwimgs/0/8/-/img_08d25fcd86f57a0616bc42581d3afdcf120462.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/0/8/-/img_08d25fcd86f57a0616bc42581d3afdcf120462.jpg"
            },
            {
                "retries": [
                    "https://times.abema.tv/mwimgs/8/4/-/img_84fb4e1ae73419cd5a9b42904d2299b3143969.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/8/4/-/img_84fb4e1ae73419cd5a9b42904d2299b3143969.jpg"
            }
        ]);
});

test("articles/-/7006935?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/-/7006935?page=1",
        "times.abema.tv-articles---7006935/",
        [
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/4/c/724w/img_4c57d32d00ec7a39b64a80696aed482f497988.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/4/c/-/img_4c57d32d00ec7a39b64a80696aed482f497988.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/8/d/724w/img_8df1be07c184a252b7faa7c305430f65507746.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/8/d/-/img_8df1be07c184a252b7faa7c305430f65507746.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/5/5/724w/img_5509960e83176adea2d42f19042a5393438214.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/5/5/-/img_5509960e83176adea2d42f19042a5393438214.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/1/0/724w/img_102d46ec70bdd28764c3bc8d3dcdeedf589283.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/1/0/-/img_102d46ec70bdd28764c3bc8d3dcdeedf589283.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/3/0/724w/img_30f8ee1b4900d1866ea16e1eab4e1f18617179.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/3/0/-/img_30f8ee1b4900d1866ea16e1eab4e1f18617179.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/f/8/724w/img_f8524f74a30b27b0ba81f31942d50585539506.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/f/8/-/img_f8524f74a30b27b0ba81f31942d50585539506.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/6/0/724w/img_60eef54595268a578566174a3eed8a98594732.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/6/0/-/img_60eef54595268a578566174a3eed8a98594732.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/1/3/724w/img_1322d004278eb01b0d72ef8aaa4fecbf540541.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/1/3/-/img_1322d004278eb01b0d72ef8aaa4fecbf540541.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/9/7/724w/img_975bd29d6648a7bfa853263036d80e63476098.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/9/7/-/img_975bd29d6648a7bfa853263036d80e63476098.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/d/8/724w/img_d8e1d27263efd0296089f3664daf5f58460311.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/d/8/-/img_d8e1d27263efd0296089f3664daf5f58460311.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/3/c/724w/img_3cd5b112f096f892c53bf4adba57de4e477263.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/3/c/-/img_3cd5b112f096f892c53bf4adba57de4e477263.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/a/a/724w/img_aa637518af937add7a54103af3bdbf61405867.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/a/a/-/img_aa637518af937add7a54103af3bdbf61405867.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/1/c/724w/img_1c43db8f6d2d80983f02dbcff4895737472898.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/1/c/-/img_1c43db8f6d2d80983f02dbcff4895737472898.jpg"
            },
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/0/f/724w/img_0feaf20599915a5a46b362bbcbb84174610995.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/0/f/-/img_0feaf20599915a5a46b362bbcbb84174610995.jpg"
            }
        ]);
});

test("articles/photo/7006935", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/photo/7006935",
        "times.abema.tv-articles-photo-7006935/",
        dummyItems(14));
});

test("articles/-/10094454", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://times.abema.tv/articles/-/10094454",
        "times.abema.tv-articles---10094454/",
        [
            {
                "retries": [
                    "https://times-abema.ismcdn.jp/mwimgs/a/b/724w/img_ab1fde41d5710afbb04c4439fa2df77990369.jpg"
                ],
                "url": "https://times.abema.tv/mwimgs/a/b/-/img_ab1fde41d5710afbb04c4439fa2df77990369.jpg"
            }
        ]);
});
