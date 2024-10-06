const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("makeup/matome/99789/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/makeup/matome/99789/",
        "maquia.hpplus.jp-makeup-matome-99789-/",
        [
            "https://img-maquia.hpplus.jp/image/ae/aed4603b-7a58-4a13-8d11-6c87ab7d7522-1344x1344.gif"
        ]);
});

test("blog/miyu_maquia/99659/1/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/blog/miyu_maquia/99659/1/",
        "maquia.hpplus.jp-blog-miyu_maquia-99659-1-/",
        [
            "https://img-maquia.hpplus.jp/image/cb/cbf8aac4-228a-4a5f-84be-b384f3b8aa88-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/aa/aa7ead76-aad6-49ed-add3-ee7b6c57df20-1456x2184.jpg",
            "https://img-maquia.hpplus.jp/image/ff/ffb26e9a-8fba-4ccc-a678-62be28cd997f-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/1d/1d5a9ac9-13a7-41fc-a3a1-56da891f2691-2613x2613.jpg",
            "https://img-maquia.hpplus.jp/image/ba/ba083a73-5fd7-4789-8860-e6327900f47c-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/d9/d9791316-825b-43a8-a2bb-35521f8e823b-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/dc/dcdd2d2d-36e0-4390-b452-6b9427e62308-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/1c/1cd63624-f76a-4374-b2d7-1bbbf87f14ad-3456x3456.jpg",
            "https://img-maquia.hpplus.jp/image/bb/bb8d8e0d-84b1-4324-8350-307738ba436e-2948x2945.jpg",
            "https://img-maquia.hpplus.jp/image/55/557208d5-cd5c-47a8-a180-b4cbf5c98f53-2822x2822.jpg",
            "https://img-maquia.hpplus.jp/image/44/44847e1c-ed04-4555-a6fe-b25a14c419dc-3456x3456.jpg"
        ]);
});

test("column/beautynewsflash/99556/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/column/beautynewsflash/99556/",
        "maquia.hpplus.jp-column-beautynewsflash-99556-/",
        [
            "https://img-maquia.hpplus.jp/image/84/84e2eaab-f830-47d9-a5f6-43a47e8d5584-2000x738.jpg",
            "https://img-maquia.hpplus.jp/image/8d/8d5c9ec8-7439-4a15-9a05-e8236717b97b-1609x2000.jpg"
        ]);
});

test("makeup/news/99259/1/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/makeup/news/99259/1/",
        "maquia.hpplus.jp-makeup-news-99259-1-/",
        [
            "https://img-maquia.hpplus.jp/image/f6/f65c8980-f659-4bc6-a17d-8bd9756ba246-1200x1200.jpg",
            "https://img-maquia.hpplus.jp/image/c7/c782a0b5-c79d-4101-b5ea-ee9d71c6a853-1200x1681.jpg",
            "https://img-maquia.hpplus.jp/image/7b/7bfc4084-23f9-4459-95ab-1b23c56183be-1200x827.jpg"
        ]);
});

test("life/news/96407/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/life/news/96407/",
        "maquia.hpplus.jp-life-news-96407-/",
        [
            "https://img-maquia.hpplus.jp/image/35/358803d6-e94f-4fae-89d4-1323ddccfa3d-1200x1323.jpg",
            "https://img-maquia.hpplus.jp/image/28/28a4940f-de23-4302-9f93-26ee01ab360d-1200x1075.jpg",
            "https://img-maquia.hpplus.jp/image/bd/bd60e14d-c92b-42a9-bcde-6d6fd9dbadcc-1200x720.jpg",
            "https://img-maquia.hpplus.jp/image/c7/c759ebad-6f10-46e5-889e-c1f09fe8423c-1200x624.jpg",
            "https://img-maquia.hpplus.jp/image/08/0877dc84-5dcf-4d5e-b86f-5bead87cd296-1200x1226.jpg"
        ]);
});

test("body/news/96406/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/body/news/96406/",
        "maquia.hpplus.jp-body-news-96406-/",
        [
            "https://img-maquia.hpplus.jp/image/f4/f4bddfc5-0cea-4b4a-afdd-2efc0bf93d2b-1200x1708.jpg",
            "https://img-maquia.hpplus.jp/image/7b/7bc1f5ba-90db-4700-9f35-2de0b7cef341-1200x838.jpg",
            "https://img-maquia.hpplus.jp/image/10/101063fb-0797-444d-9b21-a736b64cf01a-1200x978.jpg",
            "https://img-maquia.hpplus.jp/image/03/03303cf9-a7f4-4c40-993d-c6d2ca342423-1200x677.jpg",
            "https://img-maquia.hpplus.jp/image/e9/e9ddd958-3cf5-44b6-91c5-042c638cfe68-1200x923.jpg",
            "https://img-maquia.hpplus.jp/image/84/84756de0-e506-4d30-b127-6b76be33c829-1200x909.jpg",
            "https://img-maquia.hpplus.jp/image/7e/7efd47b4-c320-4ec0-9ae9-bc5c06e8fe7f-1200x896.jpg",
            "https://img-maquia.hpplus.jp/image/af/af95d535-a864-4f90-a957-24622c13307e-1200x774.jpg"
        ]);
});

test("magazine/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://maquia.hpplus.jp/magazine/",
        "maquia.hpplus.jp-magazine-/",
        [],
        {
            sizeMatch: function (expectedLength, actualLength) {
                expect(actualLength).toBeGreaterThan(10);
            }
        });
});
