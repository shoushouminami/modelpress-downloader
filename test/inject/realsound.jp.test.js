const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test movie news article with slider", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://realsound.jp/movie/2020/08/post-596435_2.html",
            "realsound.jp-movie-2020-08-post-596435_2.html/",
            [
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-main.jpg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub7.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-grandblue-bamen3.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub2.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub8.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub6.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub1.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub5.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub9.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-sub3.jpeg",
                "https://realsound.jp/wp-content/uploads/2020/08/20200805-yodayuuki-cheki-598x468.jpg"
            ]);
});

test("Test news article with slider", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://realsound.jp/2020/09/post-614366.html",
        "realsound.jp-2020-09-post-614366.html/",
        [
            "https://realsound.jp/wp-content/uploads/2020/09/20200905-watanaberisa-950x633.jpg",
            "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie8.jpg",
            "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie3.jpg",
            "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie2.jpg",
            "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie7.jpg",
            "https://realsound.jp/wp-content/uploads/2020/09/20200905_keyaki_movie1.jpg"
        ]);
});

test("Test movie special post", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://realsound.jp/movie/2020/03/post-524336.html",
            "realsound.jp-movie-2020-03-post-524336.html/",
            [
                    "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-header.jpg",
                    "https://realsound.jp/wp-content/uploads/2020/03/20190318-satsukyu-main.jpeg",
                    "https://realsound.jp/wp-content/uploads/2020/03/20190319-satsukyu-main.jpeg",
                    "https://realsound.jp/wp-content/uploads/2020/03/20200318-satsukyu-sub2.jpeg"
            ]);
});
