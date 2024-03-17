const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/20240316dog00m100005000c.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mainichikirei.jp/article/20240316dog00m100005000c.html",
        "mainichikirei.jp-article-20240316dog00m100005000c.html/",
        [
            {
                "filename": "001_size9.jpg",
                "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/16/20240316dog00m100005000c/001_size9.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTYvMjAyNDAzMTZkb2cwMG0xMDAwMDUwMDBjLzAwMV9zaXplOS5qcGc="
            },
            {
                "filename": "002_size9.jpg",
                "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/16/20240316dog00m100005000c/002_size9.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTYvMjAyNDAzMTZkb2cwMG0xMDAwMDUwMDBjLzAwMl9zaXplOS5qcGc="
            },
            {
                "filename": "003_size9.jpg",
                "imageUrl": "https://storage.mainichikirei.jp/images/2024/03/16/20240316dog00m100005000c/003_size9.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mainichikirei.jp/assets/favicons/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1haW5pY2hpa2lyZWkuanAvaW1hZ2VzLzIwMjQvMDMvMTYvMjAyNDAzMTZkb2cwMG0xMDAwMDUwMDBjLzAwM19zaXplOS5qcGc="
            }
        ]);
});

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
