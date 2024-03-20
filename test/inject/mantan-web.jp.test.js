const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {getLargeImg} = require("../../src/inject/mantan-web.jp");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/20240319dog00m200077000c.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mantan-web.jp/article/20240319dog00m200077000c.html",
        "mantan-web.jp-article-20240319dog00m200077000c.html/",
        [
            {
                "filename": "001_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/001_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/001_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMV9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/001_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMV9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/001_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMV9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/001_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMV9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMV9zaXplMTAuanBn"
            },
            {
                "filename": "002_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/002_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/002_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMl9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/002_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMl9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/002_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMl9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200077000c/002_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMl9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNzcwMDBjLzAwMl9zaXplMTAuanBn"
            }
        ]);
});

test("article/20240319dog00m200042000c/photopage/001.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://gravure.mantan-web.jp/article/20240319dog00m200042000c/photopage/001.html",
        "gravure.mantan-web.jp-article-20240319dog00m200042000c-photopage-001.html/",
        [
            {
                "filename": "001_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/001_size10.jpg",
                "retries": [],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMV9zaXplMTAuanBn"
            },
            {
                "filename": "002_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/002_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/002_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMl9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/002_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMl9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/002_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMl9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/002_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMl9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwMl9zaXplMTAuanBn"
            },
            {
                "filename": "003_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/003_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/003_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwM19zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/003_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwM19zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/003_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwM19zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2024/03/19/20240319dog00m200042000c/003_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwM19zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjQvMDMvMTkvMjAyNDAzMTlkb2cwMG0yMDAwNDIwMDBjLzAwM19zaXplMTAuanBn"
            }
        ]);
});

test("Test getLargeImg function", () => {
    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_thumb.jpg")).toStrictEqual({
        "retries": [
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
                "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg",
            ],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });

    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg")).toStrictEqual({
        "retries": [
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size9.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size8.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size7.jpg",
            "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size6.jpg",
        ],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });

    expect(getLargeImg("https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg")).toStrictEqual({
        "retries": [],
        "url": "https://storage.mantan-web.jp/images/2020/08/14/20200814dog00m200031000c/001_size10.jpg",
    });
})

test("article/20230801dog00m200030000c.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://gravure.mantan-web.jp/article/20230801dog00m200030000c.html",
        "gravure.mantan-web.jp-article-20230801dog00m200030000c.html/",
        [
            {
                "filename": "001_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplMTAuanBn"
            },
            {
                "filename": "002_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplMTAuanBn"
            },
            {
                "filename": "003_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplMTAuanBn"
            },
            {
                "filename": "004_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplMTAuanBn"
            }
        ]);
});

test("article/20230801dog00m200030000c/photopage/001.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://gravure.mantan-web.jp/article/20230801dog00m200030000c/photopage/001.html",
        "gravure.mantan-web.jp-article-20230801dog00m200030000c-photopage-001.html/",
        [
            {
                "filename": "001_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/001_size10.jpg",
                "retries": [],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMV9zaXplMTAuanBn"
            },
            {
                "filename": "002_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/002_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwMl9zaXplMTAuanBn"
            },
            {
                "filename": "003_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/003_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwM19zaXplMTAuanBn"
            },
            {
                "filename": "004_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/004_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNF9zaXplMTAuanBn"
            },
            {
                "filename": "005_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/005_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/005_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNV9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/005_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNV9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/005_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNV9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/005_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNV9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNV9zaXplMTAuanBn"
            },
            {
                "filename": "006_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/006_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/006_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNl9zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/006_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNl9zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/006_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNl9zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/006_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNl9zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwNl9zaXplMTAuanBn"
            },
            {
                "filename": "007_size10.jpg",
                "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/007_size10.jpg",
                "retries": [
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/007_size9.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwN19zaXplOS5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/007_size8.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwN19zaXplOC5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/007_size7.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwN19zaXplNy5qcGc="
                    },
                    {
                        "imageUrl": "https://storage.mantan-web.jp/images/2023/08/01/20230801dog00m200030000c/007_size6.jpg",
                        "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwN19zaXplNi5qcGc="
                    }
                ],
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://mantan-web.jp/assets/ichimen/browserconfig.xml#mid_aHR0cHM6Ly9zdG9yYWdlLm1hbnRhbi13ZWIuanAvaW1hZ2VzLzIwMjMvMDgvMDEvMjAyMzA4MDFkb2cwMG0yMDAwMzAwMDBjLzAwN19zaXplMTAuanBn"
            }
        ]);
});
