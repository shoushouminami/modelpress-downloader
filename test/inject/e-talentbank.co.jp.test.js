const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test e-talentbank.co.jp article page with 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://e-talentbank.co.jp/news/music/175388/",
        "e-talentbank.co.jp-news-music-175388-/",
        [
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05130058/aa8db53c03e6254a9d259fc7cb3976fc-680x474.jpg",
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05125924/%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%A2%E3%83%BC%E5%86%99-1.jpg",
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05125838/%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%A2%E3%83%BC%E5%86%99.jpg"
        ]
    );
});

test("Test e-talentbank.co.jp article page with 5 images", async () => {
    await testDirectDownload(
        browser,
        "https://e-talentbank.co.jp/news/enta/139166/",
        "e-talentbank.co.jp-news-enta-139166-/",
        [
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/92d99a795a9ba4d3f863b2fe12c81977.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/351ad2e3814a72c85844eafbf18eea6e.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/56baebe0b634cf388978712e76439585.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/fb202bf80987767acfa6d29cd10ca384.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/58c92516ee5b8f966347b1f91c71da5d.png"
        ]
    );
});

test("Test e-talentbank.co.jp attachment page", async () => {
    await testDirectDownload(
        browser,
        "https://e-talentbank.co.jp/photo/enta/139226/",
        "e-talentbank.co.jp-photo-enta-139226-/",
        [
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/92d99a795a9ba4d3f863b2fe12c81977.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/351ad2e3814a72c85844eafbf18eea6e.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/56baebe0b634cf388978712e76439585.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/fb202bf80987767acfa6d29cd10ca384.png",
            "https://e-talentbank.co.jp/wp-content/uploads/2020/04/58c92516ee5b8f966347b1f91c71da5d.png"
        ]
    );
});

test("Test e-talentbank.co.jp interview attachment page", async () => {
    await testDirectDownload(
        browser,
        "https://e-talentbank.co.jp/interview/96270/attachment/d75_4804-2/",
        "e-talentbank.co.jp-interview-96270-attachment-d75_4804-2-/",
        [
            "https://e-talentbank.co.jp/wp-content/uploads/2020/08/D75_4804-1-1600x1066-1-1.jpeg",
            "https://e-talentbank.co.jp/wp-content/uploads/2019/05/D75_4804.jpeg",
            "https://e-talentbank.co.jp/wp-content/uploads/2019/05/2951c446019a8f5d54e9ae7e5e3cca09.jpg"
        ]
    );
});

test("Test news page with 3 photos ", async () => {
    await testDirectDownload(
        browser,
        "https://e-talentbank.co.jp/news/music/175388/",
        "e-talentbank.co.jp-news-music-175388-/",
        [
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05130058/aa8db53c03e6254a9d259fc7cb3976fc-680x474.jpg",
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05125924/%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%A2%E3%83%BC%E5%86%99-1.jpg",
            "https://etb-media-photo.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2020/11/05125838/%E3%83%A1%E3%82%A4%E3%83%B3%E3%82%A2%E3%83%BC%E5%86%99.jpg"
        ]
    );
});
