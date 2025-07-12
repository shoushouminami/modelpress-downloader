const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {replaceIllegalChars} = require("../../src/inject/www.nogizaka46.com")
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("s/n46/diary/detail/100484?ima=1429&cd=MEMBER", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/diary/detail/100484?ima=1429&cd=MEMBER",
        "5期生-2022.07.22_18.57-#さつきぶろぐ 馴染んでますか- 菅原咲月/",
        [
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mob7KmvUZ.jpg",
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mobpYfrlP.jpg",
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/moblog/202207/mobZHy2vH.jpg"
        ]);
});

test("test replaceIllegalChars", () => {
    expect(replaceIllegalChars('>')).toBe('-')
    expect(replaceIllegalChars('<')).toBe('-')
    expect(replaceIllegalChars(':')).toBe('-')
    expect(replaceIllegalChars('"')).toBe('-')
    expect(replaceIllegalChars('\'')).toBe('-')
    expect(replaceIllegalChars('/')).toBe('-')
    expect(replaceIllegalChars('>')).toBe('-')
    expect(replaceIllegalChars('\\')).toBe('-')
    expect(replaceIllegalChars('?')).toBe('-')
    expect(replaceIllegalChars('*')).toBe('-')
    expect(replaceIllegalChars('>>>')).toBe('---')
    expect(replaceIllegalChars('abc>>>bla')).toBe('abc---bla')
});

test("s/n46/news/detail/101184?ima=1622&pri1=20250", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/news/detail/101184?ima=1622&pri1=20250",
        "39thシングル「Same numbers」TYPE-Dの特典映像“6期生初披露の会ライブ映像”のダイジェストを公開！",
        [
            "https://www.nogizaka46.com/files/46/news/101184_1.jpg"
        ]);
});

test("s/n46/news/detail/101185?ima=3530&pri1=202507", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/news/detail/101185?ima=3530&pri1=202507",
        "【オフィシャルグッズ販売のお知らせ】「真夏の全国ツアー2025」静岡公演＠エコパアリーナ",
        [
            "https://www.nogizaka46.com/files/46/news/101164_1.jpg",
            "https://www.nogizaka46.com/files/46/news/101164_2.jpg",
            "https://www.nogizaka46.com/files/46/news/101164_3.jpg",
            "https://www.nogizaka46.com/files/46/news/101185_4.jpg",
            "https://www.nogizaka46.com/files/46/news/101185_5.jpg"
        ]);
});

test("s/n46/artist/48017?ima=4159", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/artist/48017?ima=4159",
        "筒井あやめ-乃木坂46公式サイト",
        [
            "https://www.nogizaka46.com/images/46/9db/414579921f85d8dd289e573c96dc3.jpg"
        ]);
});

test("s/n46/artist/63106?ima=4159", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.nogizaka46.com/s/n46/artist/63106?ima=4159",
        "鈴木佑捺-乃木坂46公式サイト",
        [
            "https://www.nogizaka46.com/images/46/4f9/78599b601e4a5abe702f5c84241ae.jpg"
        ]);
});
