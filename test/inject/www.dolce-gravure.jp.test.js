const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll); 
describe("Test suite www.dolce-gravure.jp", () => {
    test("gravure/222687/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.dolce-gravure.jp/gravure/222687/",
            "www.dolce-gravure.jp-日向坂46藤嶌果歩、本場アメリカのハンバーガーに舌鼓「頬張っているカットがあるので見てほしい」/",
            dummyItems(60));
    });

    test("gravure/222687/attachment_id/222801/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.dolce-gravure.jp/gravure/222687/attachment_id/222801/",
            "www.dolce-gravure.jp-[画像](1ページ目)日向坂46藤嶌果歩、本場アメリカのハンバーガーに舌鼓「頬張っているカットがあるので見てほしい」/",
            dummyItems(60));
    });

    test("gravure/223294/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.dolce-gravure.jp/gravure/223294/",
            "www.dolce-gravure.jp-吉田綾乃クリスティー、福岡で最後の歌声 乃木坂46ツアーはファイナル”聖地”神宮球場4daysへ/",
            [
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/81b70f365d58492ca43c88a10d21ae56.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/da495640c3ff0e341994d6b43171d03e.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/8feada33115af3fdc1c9c58f59368967.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/183931e13dfce8926a97e8a9434800ba.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/d8bb3260b7a22c0188f77ca010d0670d.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/8dfb95bb79c4ceb79d894197d2dfe230.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/cc527ef9ea507c0c3cfc982535250e74.jpg"
            ]);
    });

    test("gravure/223294/attachment_id/223301/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.dolce-gravure.jp/gravure/223294/attachment_id/223301/",
            "www.dolce-gravure.jp-[画像](1ページ目)吉田綾乃クリスティー、福岡で最後の歌声 乃木坂46ツアーはファイナル”聖地”神宮球場4daysへ/",
            [
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/81b70f365d58492ca43c88a10d21ae56.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/da495640c3ff0e341994d6b43171d03e.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/8feada33115af3fdc1c9c58f59368967.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/183931e13dfce8926a97e8a9434800ba.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/d8bb3260b7a22c0188f77ca010d0670d.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/8dfb95bb79c4ceb79d894197d2dfe230.jpg",
                "https://www.dolce-gravure.jp/wp-content/uploads/2026/08/cc527ef9ea507c0c3cfc982535250e74.jpg"
            ]);
    });
})
