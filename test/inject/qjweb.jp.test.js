const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("column/94163/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://qjweb.jp/column/94163/",
        "qjweb.jp-column-94163-/",
        [
            "https://qjweb.jp/wp-content/uploads/2023/09/IMG_8276.jpeg",
        ].concat(dummyItems(99)));
});

test("column/94163/article-gallery/94164/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://qjweb.jp/column/94163/article-gallery/94164/",
        "qjweb.jp-column-94163-article-gallery-94164-/",
        [
            "https://qjweb.jp/wp-content/uploads/2023/09/IMG_8889.jpeg",
        ].concat(dummyItems(99)));
});

test("column/91440/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://qjweb.jp/column/91440/",
        "qjweb.jp-column-91440-/",
        [
            "https://qjweb.jp/wp-content/uploads/2023/08/main-1.jpg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub2-2.jpeg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub7.jpg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub4.jpeg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub9-1.jpeg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub9.jpeg",
            "https://qjweb.jp/wp-content/uploads/2023/08/sub2.jpeg"
        ]);
});
