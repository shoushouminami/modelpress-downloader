const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {re} = require("../../src/inject/sakurazaka46.com");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test regex", async () => {
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/960_960_102400.jpg".match(re)).toBeTruthy()
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/960_960_102400.jpg".match(re)[1]).toBe("/960_960_102400")
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/300_300_102400.jpg".match(re)).toBeTruthy()
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/300_300_102400.jpg".match(re)[1]).toBe("/300_300_102400")
});

test("s/s46/diary/detail/61086?ima=0000&cd=blog", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/diary/detail/61086?ima=0000&cd=blog",
        "遠藤理子公式ブログ-2025-7-/",
        [
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobmQRKxs.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobv7Qio4.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobYAvkbQ.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobEtx8GD.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobgys9LP.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobUwuVM7.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobwpGQlj.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobLXbzLw.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobY4SH3m.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobgWZjQh.jpg"
        ]);
});

test("s/s46/diary/detail/61084?ima=0000&cd=blog", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/diary/detail/61084?ima=0000&cd=blog",
        "四期生リレー公式ブログ-2025-7-夏と冬山川宇衣/",
        [
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobY3ISy6.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mob14KivP.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobA6Egto.jpg"
        ]);
});

test("s/s46/diary/detail/61064?ima=0000&cd=blog", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/diary/detail/61064?ima=0000&cd=blog",
        "四期生リレー公式ブログ-2025-7-フルーツポンチぱんち！松本和子/",
        [
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobOS1icy.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobm4bPMR.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobVqaNBb.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202507/mobENct61.jpg"
        ]);
});

test("s/s46/news/detail/M01725?ima=0000", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/news/detail/M01725?ima=0000",
        "サンケイスポーツ特別版「Sakurazaka46Times」発売決定！-ニュース-櫻坂46公式サイト",
        [
            "https://sakurazaka46.com/files/14/_%E6%AB%BB%E5%9D%8246%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E8%A1%A8%E7%B4%99.jpg"
        ]);
});

test("s/s46/news/detail/G00156?ima=0000", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/news/detail/G00156?ima=0000",
        "櫻坂46「5thTOUR2025“Addiction”」オフィシャルグッズ「会場受取(東京ドーム公演)」受付開始のお知らせ-ニュース-櫻坂46公式サイト",
        [
            "https://sakurazaka46.com/images/14/8f0/64aac21a3ba30a3ae99ae91731728.jpg"
        ]);
});

test("s/s46/artist/64?ima=0000", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/artist/64?ima=0000",
        "中嶋優月-櫻坂46公式サイト",
        [
            "https://sakurazaka46.com/images/14/670/f29d3d455ef279228f95f96d0e431/1000_1000_102400.jpg"
        ]);
});
