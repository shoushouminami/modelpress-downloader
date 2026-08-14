const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite mainichikirei.jp", () => {
    test("article/20260808dog00m100011000a.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichikirei.jp/article/20260808dog00m100011000a.html",
            "mainichikirei.jp-article-20260808dog00m100011000a.html/",
            [
                {
                    "filename": "001.jpg",
                    "type": "tab",
                    "url": "https://storage.mainichikirei.jp/w=1200,h=800,f=webp:auto/images/2026/08/08/20260808dog00m100011000a/001.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0xMjAwLGg9ODAwLGY9d2VicDphdXRvL2ltYWdlcy8yMDI2LzA4LzA4LzIwMjYwODA4ZG9nMDBtMTAwMDExMDAwYS8wMDEuanBn"
                },
                {
                    "filename": "002.jpg",
                    "type": "tab",
                    "url": "https://storage.mainichikirei.jp/w=1200,h=800,f=webp:auto/images/2026/08/08/20260808dog00m100011000a/002.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0xMjAwLGg9ODAwLGY9d2VicDphdXRvL2ltYWdlcy8yMDI2LzA4LzA4LzIwMjYwODA4ZG9nMDBtMTAwMDExMDAwYS8wMDIuanBn"
                },
                {
                    "filename": "003.jpg",
                    "type": "tab",
                    "url": "https://storage.mainichikirei.jp/w=1200,h=800,f=webp:auto/images/2026/08/08/20260808dog00m100011000a/003.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0xMjAwLGg9ODAwLGY9d2VicDphdXRvL2ltYWdlcy8yMDI2LzA4LzA4LzIwMjYwODA4ZG9nMDBtMTAwMDExMDAwYS8wMDMuanBn"
                },
                {
                    "filename": "004.jpg",
                    "type": "tab",
                    "url": "https://storage.mainichikirei.jp/w=1200,h=800,f=webp:auto/images/2026/08/08/20260808dog00m100011000a/004.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0xMjAwLGg9ODAwLGY9d2VicDphdXRvL2ltYWdlcy8yMDI2LzA4LzA4LzIwMjYwODA4ZG9nMDBtMTAwMDExMDAwYS8wMDQuanBn"
                }
            ]);
    });


    describe("Test suite mainichikirei.jp", () => {
        test("article/20240316dog00m100005000c.html?photo=001", async () => {
            await testDirectDownload(
                getBrowser(),
                "https://mainichikirei.jp/article/20240316dog00m100005000c.html?photo=001",
                "mainichikirei.jp-article-20240316dog00m100005000c.html/",
                [
                    {
                        "filename": "003_size9.jpg",
                        "retries": [],
                        "type": "tab",
                        "url": "https://storage.mainichikirei.jp/w=2059,h=1341,f=webp:auto/images/2024/03/16/20240316dog00m100005000c/003_size9.jpg",
                        "websiteCS": "inject-cs.js",
                        "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0yMDU5LGg9MTM0MSxmPXdlYnA6YXV0by9pbWFnZXMvMjAyNC8wMy8xNi8yMDI0MDMxNmRvZzAwbTEwMDAwNTAwMGMvMDAzX3NpemU5LmpwZw=="
                    },
                    {
                        "filename": "001_size9.jpg",
                        "retries": [],
                        "type": "tab",
                        "url": "https://storage.mainichikirei.jp/w=2043,h=1350,f=webp:auto/images/2024/03/16/20240316dog00m100005000c/001_size9.jpg",
                        "websiteCS": "inject-cs.js",
                        "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0yMDQzLGg9MTM1MCxmPXdlYnA6YXV0by9pbWFnZXMvMjAyNC8wMy8xNi8yMDI0MDMxNmRvZzAwbTEwMDAwNTAwMGMvMDAxX3NpemU5LmpwZw=="
                    },
                    {
                        "filename": "002_size9.jpg",
                        "retries": [],
                        "type": "tab",
                        "url": "https://storage.mainichikirei.jp/w=1994,h=1351,f=webp:auto/images/2024/03/16/20240316dog00m100005000c/002_size9.jpg",
                        "websiteCS": "inject-cs.js",
                        "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvdz0xOTk0LGg9MTM1MSxmPXdlYnA6YXV0by9pbWFnZXMvMjAyNC8wMy8xNi8yMDI0MDMxNmRvZzAwbTEwMDAwNTAwMGMvMDAyX3NpemU5LmpwZw=="
                    }
                ]);
        });

    })

    test("article/20200905dog00m100017000c.html?photo=002", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichikirei.jp/article/20200905dog00m100017000c.html?photo=002",
            "mainichikirei.jp-article-20200905dog00m100017000c.html/",
            dummyItems(9));
    });

    test("article/20240314dog00m100002000c.html?photo=002", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://mainichikirei.jp/article/20240314dog00m100002000c.html?photo=002",
            "mainichikirei.jp-article-20240314dog00m100002000c.html/",
            [
                {
                    "filename": "006_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/006_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwNl9zaXplOS5qcGc="
                },
                {
                    "filename": "001_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/001_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwMV9zaXplOS5qcGc="
                },
                {
                    "filename": "002_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/002_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwMl9zaXplOS5qcGc="
                },
                {
                    "filename": "003_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/003_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwM19zaXplOS5qcGc="
                },
                {
                    "filename": "004_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/004_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwNF9zaXplOS5qcGc="
                },
                {
                    "filename": "005_size9.jpg",
                    "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/14/20240314dog00m100002000c/005_size9.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTQvMjAyNDAzMTRkb2cwMG0xMDAwMDIwMDBjLzAwNV9zaXplOS5qcGc="
                }
            ]);
    });

})

