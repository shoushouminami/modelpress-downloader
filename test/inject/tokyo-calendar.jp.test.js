const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite tokyo-calendar.jp", () => {
    // interview article: header image + body images incl. the magazine cover at the end
    test("article/29638?ref=story", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tokyo-calendar.jp/article/29638?ref=story",
            "tokyo-calendar.jp-デート焼き鳥は、美女の本音を誘い出す。有村架純が語った女優16年目の現在地/",
            [
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/sitetop_thumbnail_image_path/29638/29d2e2d545c7245599a96829247536.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702846/095153426ffcc0e9128bea4ed6a32a.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702847/1c51495097ba34644ebe059a71edd2.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702848/582e0a95bbaffd627eaca4c81b1041.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702851/5611ac3c89353115f445c419d71057.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702853/ca36c6ee0727d3b42343c838490f3c.jpg"
            ]);
    });

    // page 3 of a 5-page article: only this page's images, folder without "(3/5)"
    test("article/29632?page=3", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tokyo-calendar.jp/article/29632?page=3",
            "tokyo-calendar.jp-～金箔に注がれた祖父と父の愛情。変化を乗り越えて未来に繋ぎたい～/",
            [
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/sitetop_thumbnail_image_path/29632/d9149b06282e0e42efe9e080c21581.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/702685/d267848f4da9d1bc95d82feec51f0a.jpg"
            ]);
    });

    // page 1 of a 2-page article with several images
    test("article/29779", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tokyo-calendar.jp/article/29779",
            "tokyo-calendar.jp-来夏の旅先はここに決定！標高813mの絶景レストランがニセコの夏を盛り上げる/",
            [
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/sitetop_thumbnail_image_path/29779/cb9ee07092d40b712277d3da37fb77.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705253/9430b124a145ff835bbcd0f56fd9f2.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705254/21446c25a95838200b7158c1dda60b.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705255/27bd5c4046c8b255d77077806289aa.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705256/e5e425c8f71ab46a6d2ce450c251f9.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705257/cfac9e8fdd1f647b70aabd6b298ccf.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/705258/0d9de895efb84457fab806fdc37385.jpg"
            ]);
    });

    // premium article: only the images visible to non-members
    test("article/28908", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tokyo-calendar.jp/article/28908",
            "tokyo-calendar.jp-「彼といても孤独は埋まらない」代理店勤務の29歳男にハマる37歳女の抱える闇/",
            [
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/sitetop_thumbnail_image_path/28908/ee0f6020fc60a0494395c0f0c0ebaf.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/688082/d7c30a576b09f104359584be4ae543.jpg"
            ]);
    });

    // older article with side-by-side image_path_1/image_path_2 pairs
    test("article/5000", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://tokyo-calendar.jp/article/5000",
            "tokyo-calendar.jp-流通期間僅か１ヶ月！幻の西洋梨を銀座で食す期間限定イベント開催中/",
            [
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_header/sitetop_thumbnail_image_path/5000/1badc80a0a300a691b74f6c0148468.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/26665/46e3d1efc7ebf09c6199ffee20f820.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/26668/1ad2ca2f14156633ebaf668c0987c5.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/27199/1e7feabc103a17133ebce027092cff.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_2/27199/92b6a4e738bd7fae5e7a0a06b21653.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/27211/d6525c85dab0e41523609ffb82019a.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_2/27211/9c9a49e0225f1eb7923bfd72e2abfe.jpg",
                "https://d35omnrtvqomev.cloudfront.net/photo/article/article_part/image_path_1/26669/77de469fe256a314fde027885805c6.jpg"
            ]);
    });
});
