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
