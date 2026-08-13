const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.wwdjapan.com", () => {
    test("articles/2467194", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.wwdjapan.com/articles/2467194",
            "www.wwdjapan.com-articles-2467194/",
            [
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05140924/J0803_0810-banner_og.jpg"
            ]);
    });

    test("articles/2450278", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.wwdjapan.com/articles/2450278",
            "www.wwdjapan.com-articles-2450278/",
            [
                "https://media.wwdjapan.com/wp-content/uploads/2026/07/17095002/sustainability-connect1200-630.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/21100917/muko_photo.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/07/16163642/DAY2_kinebuchi_tamai.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/07/17102129/miyaura_photo.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/07/24160306/horino.jpg"
            ]);
    });

    // regression test: interspersed googlesyndication.com ad images must not be picked up
    test("articles/2467079", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.wwdjapan.com/articles/2467079",
            "www.wwdjapan.com-articles-2467079/",
            [
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000405/0812_LAshop_6.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000406/0812_LAshop_7.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000400/0812_LAshop_2.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000404/0812_LAshop_5.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000402/0812_LAshop_3.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000359/0812_LAshop_1.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000407/0812_LAshop_8.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/05000403/0812_LAshop_4.jpg"
            ]);
    });

    // regression test: the /wp-content/plugins/wwd-paywall-readmore/... subscription promo
    // banner must not be picked up as content, only the 2 real interview/gallery photos
    test("articles/2470009", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.wwdjapan.com/articles/2470009",
            "www.wwdjapan.com-articles-2470009/",
            [
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/10103429/MH_01.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/10103636/MH_02.jpeg"
            ]);
    });

    // regression test: a mid-article photo-swipe gallery grid whose images are embedded as
    // <a class="bg-image" href="full.jpg" data-bg="preview.jpg?w=210"> with no <img> tag at all
    test("articles/2471781", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.wwdjapan.com/articles/2471781",
            "www.wwdjapan.com-articles-2471781/",
            [
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170614/main-52.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170623/sub1-48.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170631/sub2-46.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170633/sub3-40.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170647/sub7-23.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170634/sub4-34.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170640/sub5-32.jpg",
                "https://media.wwdjapan.com/wp-content/uploads/2026/08/12170646/sub6-34.jpg"
            ]);
    });
})
