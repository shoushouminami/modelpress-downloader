const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);
describe("Test suite jmagazine.myjcom.jp", () => {
    test("category/music/post001502/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://jmagazine.myjcom.jp/category/music/post001502/",
            "jmagazine.myjcom.jp-category-music-post001502-/",
            [
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_01.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_02.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_03.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_04.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_05.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_06.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_07.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_08.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_09.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_10.jpg"
            ]);
    });

    test("category/music/post001502/gallery/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://jmagazine.myjcom.jp/category/music/post001502/gallery/",
            "jmagazine.myjcom.jp-category-music-post001502-gallery-/",
            [
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_10.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_01.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_02.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_03.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_04.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_05.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_06.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_07.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_08.jpg",
                "https://jmagazine.myjcom.jp/uploads/260627_yozakura_09.jpg"
            ]);
    });

    test("category/music/post001440/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://jmagazine.myjcom.jp/category/music/post001440/",
            "jmagazine.myjcom.jp-category-music-post001440-/",
            [
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_01.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_02.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_03.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_04.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_05.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_06.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_07.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_08.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_09.jpg",
                "https://jmagazine.myjcom.jp/uploads/260603_sweetsteady_10.jpg"
            ]);
    });

})
