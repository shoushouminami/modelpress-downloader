const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with top and in article images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://actresspress.com/mei_nagano-sekkisei20200908/",
        "actresspress.com-mei_nagano-sekkisei20200908-/",
        [
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-5.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-1.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-2.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-3.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-4.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-sekkisei-event20200908-6.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mei_nagano-profile202009.jpg"
        ]);
});

test("Test magazine news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://actresspress.com/mizuki_yamamoto20200910/",
        "actresspress.com-mizuki_yamamoto20200910-/",
        [
            "https://actresspress.com/wp-content/uploads/2020/09/mizuki_yamamoto-photo202009010-3.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/ac9b7bea06a67824104ab6cc635169ae.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mizuki_yamamoto-comic202009010-4.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mizuki_yamamoto-photo202009010-1.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mizuki_yamamoto-photo202009010-2.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/mizuki_yamamoto-photo202009010-4.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/45f88575a6434dcc3b76e3863c5860f8.jpg",
            "https://actresspress.com/wp-content/uploads/2020/09/085b0803cda62106321802c82e0386e2.jpg"
        ]);
});

test("Test fashion news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://actresspress.com/nao_kosaka-furisode-movie20200131/",
        "actresspress.com-nao_kosaka-furisode-movie20200131-/",
        [
            "https://actresspress.com/wp-content/uploads/2020/01/cc736cfec37d2bc8855ed176f70850d4.jpg",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-furisode20200131-1.png",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-furisode-movie20200131-1-scaled.jpg",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-furisode-movie20200131-2.png",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-furisode-movie20200131-4.png",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-furisode-movie20200131-3.png",
            "https://actresspress.com/wp-content/uploads/2020/01/nao_kosaka-profile20200131.jpg"
        ]);
});
