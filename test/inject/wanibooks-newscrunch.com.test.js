const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite wanibooks-newscrunch.com", () => {

    test("article/60466 (formerly articles/-/3451)", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://wanibooks-newscrunch.com/articles/-/3451",
            "wanibooks-newscrunch.com-article-60466/",
            [
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_71589eeb04894899adf8a9ad7fa5b758314013.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_7600a1f78c776d3c566c2615507d991b1226513.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_72d29ab435e749c20eb3ad4a14244995540790.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_91fc57a053c36346c20b9fce8aec0be0926032.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_2e8e86654dbd46abd6abfe239b6a748e460189.jpg"
            ]);
    });

    test("article/60466/gallery", async () => {
        // Dedicated gallery-viewer template (separate from the plain article page above), a swiper
        // with a thumbnail-nav strip. Only shows 4 of the article's 5 photos (missing img_72d29ab4...,
        // which appears only on the plain article page) - genuine site content difference, not a gap.
        await testDirectDownload(
            getBrowser(),
            "https://wanibooks-newscrunch.com/article/60466/gallery",
            "wanibooks-newscrunch.com-article-60466-gallery/",
            [
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_91fc57a053c36346c20b9fce8aec0be0926032.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_7600a1f78c776d3c566c2615507d991b1226513.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_71589eeb04894899adf8a9ad7fa5b758314013.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_2e8e86654dbd46abd6abfe239b6a748e460189.jpg"
            ]);
    });

    test("article/83648", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://wanibooks-newscrunch.com/article/83648",
            "wanibooks-newscrunch.com-article-83648/",
            [
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/019fb54f-c3b5-7b5e-b1a4-9e180e25f6a8.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/019fb54f-965f-7371-a446-88c83b73de7f.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/019fb54f-da35-7518-a6e1-aa89cbe74b9b.jpg"
            ]);
    });

    test("article/65649?page=2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://wanibooks-newscrunch.com/article/65649?page=2",
            "wanibooks-newscrunch.com-article-65649/",
            [
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_b0b67d0a4afc0177713cf35c7c2a5561967295.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_08b4e44df31c9280eb6f532679e1bce1864516.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_b6162df562afdb600db015e55ee7f1a01262197.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_0885a0c75c0eeb698eca6fe9a75cb9f41006331.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_2519565110dcf746ebc0340ea64064b41159933.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_1413137f52d4f84a0b1d71c76f0448ce999363.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_4976d965af781df53c742769c90638a6895153.jpg",
                "https://wanibooks-newscrunch.com/app/uploads/2026/07/img_e682e34b98992d971713ae9573eb2fea1293352.jpg"
            ]);
    });
});

