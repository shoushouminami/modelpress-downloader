const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {re} = require("../../src/inject/sakurazaka46.com");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test keyakizaka46 blog article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/diary/detail/36123",
        "sakurazaka46.com-s-s46-diary-detail-36123/",
        [
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202010/mob17gIAT.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202010/mobNBUY1d.jpg"
        ]
    );
});

test("Test regex", async () => {
    const re = require("../../src/inject/sakurazaka46.com").re;
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/960_960_102400.jpg".match(re)).toBeTruthy()
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/960_960_102400.jpg".match(re)[1]).toBe("/960_960_102400")
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/300_300_102400.jpg".match(re)).toBeTruthy()
    expect("/images/14/f3c/27fd9324d73bd54de502c1a3e1796/300_300_102400.jpg".match(re)[1]).toBe("/300_300_102400")
});
