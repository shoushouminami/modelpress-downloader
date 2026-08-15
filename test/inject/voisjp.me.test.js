const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite voisjp.me", () => {

    test("news/317133/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://voisjp.me/news/317133/",
            "voisjp.me-news-317133-/",
            [
                "https://voisjp.me/wp-content/uploads/2026/05/pmu260529m108.jpg"
            ]);
    });

    test("news/316947/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://voisjp.me/news/316947/",
            "voisjp.me-news-316947-/",
            [
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m101.jpg",
                "https://voisjp.me/wp-content/uploads/2026/05/pmu260513m104.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m102.jpg"
            ]);
    });

    test("news/317150/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://voisjp.me/news/317150/",
            "voisjp.me-news-317150-/",
            [
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260815m103.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260815m102.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260815m101.jpg"
            ]);
    });

    test("news/316991/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://voisjp.me/news/316991/",
            "voisjp.me-news-316991-/",
            [
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m115.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m120.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m119.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m118.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m117.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m116.jpg",
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m121.jpg"
            ]);
    });

    // single-photo attachment page linked from a gallery thumbnail, distinct WP template from a regular article
    test("news/316947/pmu260811m102/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://voisjp.me/news/316947/pmu260811m102/",
            "voisjp.me-news-316947-pmu260811m102-/",
            [
                "https://voisjp.me/wp-content/uploads/2026/08/pmu260811m102.jpg"
            ]);
    });

});
