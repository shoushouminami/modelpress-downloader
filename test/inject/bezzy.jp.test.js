const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("2025/03/60904/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/03/60904/",
        "bezzy.jp-2025-03-60904-/",
        [
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A3583_1.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/7c18f09ca3d6095a790f71f30122c471.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5230.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5829.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5019.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A6119.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A4865.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A4192_1.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A4306_1.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5434.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5660.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A4571.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A5873.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A6222.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_B4374.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A6270.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A6360.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_B4805.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A3719_1.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/SE_A4095_1.jpg"
        ]);
});

test("2025/03/60904/?gallery=60904&aid=60918&gn=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/03/60904/?gallery=60904&aid=60918&gn=0",
        "bezzy.jp-2025-03-60904-/",
        dummyItems(20)
    );
});

test("2025/07/69726/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/07/69726/",
        "bezzy.jp-2025-07-69726-/",
        dummyItems(15)
    );
});

test("2025/07/70477/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/07/70477/",
        "bezzy.jp-2025-07-70477-/",
        [
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/4da4b79196a2fa003138acc1f831ab08.jpg",
            "https://img.youtube.com/vi/v2Q3upls4ZY/maxresdefault.jpg",
            "https://img.youtube.com/vi/TB0gUhz4t7A/maxresdefault.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/0064cafbd92a1dc18bd5361442cf816c.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/e48dd6f1ba6e51c92b5e6a1474a797a3.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/7255545a48c322a92b48e9450eb14546.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/bbede92062d77fe871f234384c358327.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/PiKi_Kawaii-Kaiwai_MV_thumbnail.jpg"
        ]);
});

test("2025/07/70180/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/07/70180/",
        "bezzy.jp-2025-07-70180-/",
        [
            "https://img.youtube.com/vi/EU0pOI4PVSY/maxresdefault.jpg",
            "https://img.youtube.com/vi/g70yImobLm4/maxresdefault.jpg",
            "https://img.youtube.com/vi/E5xKGeTTx34/maxresdefault.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/N46_39th_AP_RGB_S.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/238dd39ad0a92b47586b82255853deaa.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/3e3d6dd32f9bf8c2942f09823d18fe6a.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/0c2a102526d377c76e7eae6fadd737ee.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-A_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-B_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-C_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-D_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/2d4e757297186c57865bcc5690abd156.jpg",
            "https://img.youtube.com/vi/fCJCyqTIam4/maxresdefault.jpg",
            "https://img.youtube.com/vi/D8GDvQFe2XU/maxresdefault.jpg"
        ]);
});

test("2025/07/70180/?gallery=70180&aid=68734&gn=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/07/70180/?gallery=70180&aid=68734&gn=0",
        "bezzy.jp-2025-07-70180-/",
        [
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/N46_39th_AP_RGB_S.jpg",
            "https://img.youtube.com/vi/EU0pOI4PVSY/maxresdefault.jpg",
            "https://img.youtube.com/vi/g70yImobLm4/maxresdefault.jpg",
            "https://img.youtube.com/vi/E5xKGeTTx34/maxresdefault.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/238dd39ad0a92b47586b82255853deaa.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/3e3d6dd32f9bf8c2942f09823d18fe6a.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/0c2a102526d377c76e7eae6fadd737ee.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-A_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-B_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-C_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-D_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/2d4e757297186c57865bcc5690abd156.jpg",
            "https://img.youtube.com/vi/fCJCyqTIam4/maxresdefault.jpg",
            "https://img.youtube.com/vi/D8GDvQFe2XU/maxresdefault.jpg"
        ]);
});


test("2025/07/69804/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/07/69804/",
        "bezzy.jp-2025-07-69804-/",
        [
            "https://bezzy.jp/cms/wp-content/uploads/2025/07/Nogizaka46_Same-numbers_thumb_s.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/N46_39th_AP_RGB_S.jpg",
            "https://img.youtube.com/vi/g70yImobLm4/maxresdefault.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-A_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-B_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-C_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/Nogizaka46_39th_JK_TYPE-D_RGB_ss.jpg",
            "https://bezzy.jp/cms/wp-content/uploads/2025/06/2d4e757297186c57865bcc5690abd156.jpg"
        ]);
});

test("2025/03/63486/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bezzy.jp/2025/03/63486/",
        "bezzy.jp-2025-03-63486-/",
        [
            "https://bezzy.jp/cms/wp-content/uploads/2025/03/e564c8997d4d9666d416a4d7f2129f46.jpg"
        ]);
});
