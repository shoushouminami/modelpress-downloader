const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

// news.mynavi.jp
test("article/20250410-tanakamiku/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20250410-tanakamiku/",
        "news.mynavi.jp-article-20250410-tanakamiku-/",
        [
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/title_images/title.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/title_images/titlel.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/001.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/001l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/002.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/002l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/003.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/003l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/004.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/004l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/005.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/005l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/006.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/006l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/007.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/007l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/008.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/008l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/009.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/009l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/010.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/010l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/011.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/011l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250410-tanakamiku/images/012.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250410-tanakamiku/images/012l.jpg"
            }
        ]);
});

test("article/20240523-2950574/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20240523-2950574/",
        "news.mynavi.jp-article-20240523-2950574-/",
        [
            "https://news.mynavi.jp/article/20240523-2950574/index_images/index.jpg",
            {
                "retries": [
                    "https://news.mynavi.jp/article/20240523-2950574/images/001.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20240523-2950574/images/001l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20240523-2950574/images/002.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20240523-2950574/images/002l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20240523-2950574/images/003.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20240523-2950574/images/003l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20240523-2950574/images/004.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20240523-2950574/images/004l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20240523-2950574/images/005.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20240523-2950574/images/005l.jpg"
            }
        ]);
});

test("article/20250409-3177906/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/article/20250409-3177906/",
        "news.mynavi.jp-article-20250409-3177906-/",
        [
            "https://news.mynavi.jp/article/20250409-3177906/index_images/index.jpg",
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/001.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/001l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/002.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/002l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/003.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/003l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/004.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/004l.jpg"
            }
        ]);
});

test("photo/article/20190612-842046/images/001l.jpg", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20190612-842046/images/001l.jpg",
        "news.mynavi.jp-photo-article-20190612-842046-images-001l.jpg/",
        [
            "https://news.mynavi.jp/article/20190612-842046/images/001l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/012l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/013l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/014l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/015l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/016l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/017l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/002l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/003l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/004l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/005l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/006l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/007l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/008l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/009l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/010l_large.jpg",
            "https://news.mynavi.jp/article/20190612-842046/images/011l_large.jpg"
        ]);
});

test("photo/article/20250409-3177906/images/001l.jpg", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20250409-3177906/images/001l.jpg",
        "news.mynavi.jp-photo-article-20250409-3177906-images-001l.jpg/",
        [
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/001l.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/001ll.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/001.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/001l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/002.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/002l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/003.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/003l.jpg"
            },
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250409-3177906/images/004.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250409-3177906/images/004l.jpg"
            }
        ]);
});

test("photo/article/20250407-3176543/images/001l.jpg", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://news.mynavi.jp/photo/article/20250407-3176543/images/001l.jpg",
        "news.mynavi.jp-photo-article-20250407-3176543-images-001l.jpg/",
        [
            {
                "retries": [
                    "https://news.mynavi.jp/article/20250407-3176543/images/001l.jpg"
                ],
                "url": "https://news.mynavi.jp/article/20250407-3176543/images/001ll.jpg"
            }
        ]);
});
