const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);


test("Test fashion page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/fashion/136544/",
        "jj-jj.net-fashion-136544-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11093859/DMA-%E8%BF%91%E8%97%A4%E5%92%8C%E8%B2%B4%E5%AD%90_mono-e1610201401500.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11093859/DMA-%E8%BF%91%E8%97%A4%E5%92%8C%E8%B2%B4%E5%AD%90_mono.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094410/DMA-_L0A5678_noPath-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094410/DMA-_L0A5678_noPath.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11093843/DMA-_L0A5084-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11093843/DMA-_L0A5084.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094352/DMA-_L0A5738_noPath-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094352/DMA-_L0A5738_noPath.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11093823/DMA-_L0A5158-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11093823/DMA-_L0A5158.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094428/DMA-_L0A5659_noPath-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094428/DMA-_L0A5659_noPath.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11093804/DMA-_L0A5215-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11093804/DMA-_L0A5215.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11093745/DMA-_L0A5288_noPath-683x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11093745/DMA-_L0A5288_noPath.jpg"
            }
        ]
    );
});

test("Test fashion page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/fashion/128745/",
        "jj-jj.net-fashion-128745-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/10/29194202/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-10-29-16.49.12.png"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/10/29194202/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2020-10-29-16.49.12.png"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/10/29193252/DMA-200916-0728-1-809x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/10/29193252/DMA-200916-0728-1.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/10/29193235/DMA-CB6338D4-4F4A-4A56-BEF2-389307A0E3F5.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/10/29193235/DMA-CB6338D4-4F4A-4A56-BEF2-389307A0E3F5.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/10/29193216/DMA-200916-1106-e1603962347569.jpg",
                    "https://img.jj-jj.net/wp-content/uploads/2020/10/29193216/DMA-200916-1106-e1603962347569-636x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/10/29193216/DMA-200916-1106.jpg"
            }
        ]
    );
});

test("Test beauty page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/beauty/135164/",
        "jj-jj.net-beauty-135164-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230144/S__54640646.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230144/S__54640646.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230113/S__54640648-e1608639148415.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230113/S__54640648.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225613/30227895-69FE-41F5-AD8C-8EA9A20DBFB8-e1608639943623.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225613/30227895-69FE-41F5-AD8C-8EA9A20DBFB8.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230130/S__54640647.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230130/S__54640647.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230200/S__54640645-e1608641647521.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230200/S__54640645.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230019/S__54640651-e1608641686196.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230019/S__54640651.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230037/S__54640650-e1608641735711.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230037/S__54640650.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225834/S__54640658.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225834/S__54640658.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225852/S__54640657-e1608645256429.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225852/S__54640657.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225910/S__54640656-e1608645277475.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225910/S__54640656.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225927/S__54640655-e1608645971580.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225927/S__54640655.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22225944/S__54640653.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22225944/S__54640653.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/22230001/S__54640652.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/22230001/S__54640652.jpg"
            }
        ]
    );
});

test("Test lifestyle page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/lifestyle/122133/",
        "jj-jj.net-lifestyle-122133-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182605/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%A4%A7-1-1024x768.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182605/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%A4%A7-1.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182542/DMA-IMG_7293-2-540x405.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182542/DMA-IMG_7293-2.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182801/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%8F%B3%E4%B8%8B-540x536.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182801/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%8F%B3%E4%B8%8B.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182741/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%B7%A6%E4%B8%8A-540x405.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182741/%E5%B7%AEDMA-P3%E3%83%AA%E3%82%BE%E3%83%8A%E3%83%BC%E3%83%AC%E5%B7%A6%E4%B8%8A.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182721/DMA-IMG_7294-432x540.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182721/DMA-IMG_7294.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182700/DMA-IMG_7275.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182700/DMA-IMG_7275.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/09/15182639/%E5%B7%AEDMA-P3%E7%86%B1%E6%B5%B7%E5%8F%B3-540x540.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/09/15182639/%E5%B7%AEDMA-P3%E7%86%B1%E6%B5%B7%E5%8F%B3.jpg"
            }
        ]
    );
});

test("lifestyle/136501/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/lifestyle/136501/",
        "jj-jj.net-lifestyle-136501-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094927/DMA-0P7A1932-646x1024.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094927/DMA-0P7A1932.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094836/DMA-IMG_3854-422x540.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094836/DMA-IMG_3854.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094801/DMA-IMG_6945.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094801/DMA-IMG_6945.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094908/DMA-beauty_1569504290267.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094908/DMA-beauty_1569504290267.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094853/DMA-IMG_1366.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094853/DMA-IMG_1366.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/11094713/DMA-4213_001%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC-422x540.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/11094713/DMA-4213_001%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg"
            }
        ]);
});

test("Test lifestyle page 3", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/lifestyle/135757/",
        "jj-jj.net-lifestyle-135757-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/25173615/dma-0057_ok-1024x899.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/25173615/dma-0057_ok.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/25173504/dma-%E2%91%A1%E6%A8%8B%E5%8F%A3%E6%97%A5%E5%A5%88.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/25173504/dma-%E2%91%A1%E6%A8%8B%E5%8F%A3%E6%97%A5%E5%A5%88.jpg"
            }
        ]
    );
});

test("Test weekly jjnet article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/weekly-jjnet/no017-03/",
        "jj-jj.net-weekly-jjnet-no017-03-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210449/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210449/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210430/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF2.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210430/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF2.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210409/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF3.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210409/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF3.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210350/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF4.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210350/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF4.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210332/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF5.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210332/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF5.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210312/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF6.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210312/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF6.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/14203721/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF0114.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/14203721/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF0114.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210232/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF8.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210232/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF8.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210213/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF9.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210213/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF9.jpg"
            },
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2021/01/07210154/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF10.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2021/01/07210154/JJnet2001_best-cosme%E3%82%B3%E3%82%B9%E3%83%A1_%E3%83%A1%E3%82%A4%E3%82%AF10.jpg"
            }
        ]
    );
});

test("Test weekly jjnet article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://jj-jj.net/weekly-jjnet/weekly_jjnet_category/no016/",
        "jj-jj.net-weekly-jjnet-weekly_jjnet_category-no016-/",
        [
            {
                "retries": [
                    "https://img.jj-jj.net/wp-content/uploads/2020/12/25102103/JJnet016_h1.jpg"
                ],
                "url": "https://img.jj-jj.net/wp-content/uploads/2020/12/25102103/JJnet016_h1.jpg"
            }
        ]
    );
});
