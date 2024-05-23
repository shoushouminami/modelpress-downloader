const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("fashion/post/124087/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nonno.hpplus.jp/fashion/post/124087/",
        "nonno.hpplus.jp-fashion-post-124087-/",
        [
            "https://nonno.hpplus.jp/wp-content/uploads/org/d1/d1f1c63343ba4a1aa1d427a44f78a7ad_1080x1240_h.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/org/ce/ce931be067affcf2e62ab6e5a1893ed8_1080x1240_h.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/org/94/941429b7d52406269033a4d3d43ddfff_1080x1240_h.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/org/1c/1c78cbd3aec8b2dd40a52fedb1ffa599_1080x1240_h.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/org/58/58287dbbedf17aa44ecb13e40305c260_1080x1240_h.jpg"
        ]);
});

test("entertainment/interview/124380/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nonno.hpplus.jp/entertainment/interview/124380/",
        "nonno.hpplus.jp-entertainment-interview-124380-/",
        [
            "https://nonno.hpplus.jp/wp-content/uploads/org/a1/a16bfdc90a49f845d23afa6122cd24a8_1080x932_w.jpg"
        ]);
});

test("magazine/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nonno.hpplus.jp/magazine/",
        "nonno.hpplus.jp-magazine-/",
        [],
        {
            sizeMatch: function (expectedLength, actualLength) {
                expect(actualLength).toBeGreaterThan(1);
            }
        });
});

test("entertainment/post/128536", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nonno.hpplus.jp/entertainment/post/128536",
        "nonno.hpplus.jp-entertainment-post-128536/",
        [
            "https://nonno.hpplus.jp/wp-content/uploads/8d0108899286f9b21969de1f9fcb5a4d.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/94cdfb586cb6ecbd443fd744cb18bb9b.jpg",
            "https://nonno.hpplus.jp/wp-content/uploads/776c9a9d99f0cba7487b1333d90d285a.jpg"
        ]);
});

