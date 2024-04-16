const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("beauty/275892/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://classy-online.jp/beauty/275892/",
        "classy-online.jp-beauty-275892-/",
        [
            "https://img.classy-online.jp/wp-content/uploads/2023/05/15125807/okada_202306_176_a.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/15125815/okada_202306_176_b.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/15125820/okada_202306_176_c.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/02165812/okada_202306_173_c.jpg"
        ]);
});

test("lifestyle/221692/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://classy-online.jp/lifestyle/221692/",
        "classy-online.jp-lifestyle-221692-/",
        [
            "https://classy-online.jp/wp-content/uploads/2022/07/22-06-14-0284.jpg",
            "https://classy-online.jp/wp-content/uploads/2022/07/22-06-14-0481.jpg",
            "https://classy-online.jp/wp-content/uploads/2022/07/22-06-14-0440.jpg",
            "https://classy-online.jp/wp-content/uploads/2022/07/22-06-14-0554.jpg"
        ]);
});

test("classy/202307/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://classy-online.jp/classy/202307/",
        "classy-online.jp-classy-202307-/",
        [
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22120000/e11e451c181fe7f4a09f599601930036.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125800/17-1.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125805/19.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125814/40-41.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125820/50-51.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125836/60-61.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125841/62-63.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125850/80-81.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125855/104-105.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125912/115.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125918/168-169.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125926/188-189.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125932/227.jpg",
            "https://img.classy-online.jp/wp-content/uploads/2023/05/22125948/233.jpg"
        ]);
});
