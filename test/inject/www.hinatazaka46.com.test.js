const { testDirectDownload, getBrowserFactory } = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.hinatazaka46.com", () => { 
    test("s/official/diary/detail/61082?ima=0000&cd=member", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.hinatazaka46.com/s/official/diary/detail/61082?ima=0000&cd=member",
            "五期生リレー公式ブログ-2025.7.12_10.00-君の隣で愛を精一杯に探したい 片山紗希/",
            [
                "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202507/mobwwvRyA.jpg",
                "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202507/mobW3nDZO.jpg",
                "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202507/mob6miTej.jpg"
            ]);
    });

    test("s/official/news/detail/G00180?ima=0000", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.hinatazaka46.com/s/official/news/detail/G00180?ima=0000",
            "「日向坂46 四期生ライブ　Presented by... - ニュース - 日向坂46公式サイト",
            [
                "https://cdn.hinatazaka46.com/files/14/20250710_HNT46_4th-gene-live_ec_pop.jpg",
                "https://cdn.hinatazaka46.com/files/14/_%E5%9B%9B%E6%9C%9F%E7%94%9F%E3%83%A9%E3%82%A4%E3%83%95%E3%82%99_MD%E5%91%8A%E7%9F%A52.jpg"
            ]);
    });

    test("s/official/artist/29?ima=0000", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.hinatazaka46.com/s/official/artist/29?ima=0000",
            "正源司-陽子---メンバー---日向坂46公式サイト",
            [
                "https://cdn.hinatazaka46.com/images/14/165/1a92a40f996f43ce58b2b701d46ef/1000_1000_102400.jpg"
            ]);
    });

    test("s/official/diary/detail/70534?ima=0000&cd=member", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.hinatazaka46.com/s/official/diary/detail/70534?ima=0000&cd=member",
            "高井俐香公式ブログ-2026.8.10_16.34-ちゃんと笑えてるよ/",
            [
                "https://cdn.hinatazaka46.com/files/14/diary/official/member/moblog/202608/mobas7K3W.jpg"
            ]);
    });
}); 
