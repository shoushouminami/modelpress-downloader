const {testDirectDownload, resolvePath, launchBrowser, dummyItems} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test http://blog.nogizaka46.com/fourth/2019/06/051125.php", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/06/051125.php",
        "blog.nogizaka46.com-fourth-2019-06-051125.php/",
        [
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0004.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0001.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0002.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0003.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0000.jpg"
        ]);
});

test("Image url is in href of parent A node and hosted on awalker.jp", async () => {
    const page = await browser.newPage();
    await page.goto("http://blog.nogizaka46.com/momoko.oozono/2019/09/052573.php");
    await page.addScriptTag({path: resolvePath("./mock-chrome-api.js")});
    await page.addScriptTag({path: resolvePath("../../build/test-inject.js")});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid["ext"]).toBeUndefined();
    expect(mid["o"]).toBeDefined();
    expect(mid["o"]["supported"]).toBeTruthy();
    expect(mid["o"]["images"]).toStrictEqual([
        {
            "imageUrl": "http://dcimg.awalker.jp/i/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw",
        },
        {
            "imageUrl": "http://dcimg.awalker.jp/i/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22.jpg",
            "websiteUrl": "http://dcimg.awalker.jp/v/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22",
        }
    ]);
    expect(mid["o"]["folder"]).toBe("blog.nogizaka46.com-momoko.oozono-2019-09-052573.php/");
    page.close();
});

test("Image url is in src of IMG node", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/06/051238.php",
        "blog.nogizaka46.com-fourth-2019-06-051238.php/",
        [
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0003.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0004.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0000.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0001.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0002.jpg"
        ]);
});

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/fourth/2019/12/053960.php",
        "blog.nogizaka46.com-fourth-2019-12-053960.php/",
        [
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384354682.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384536971.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384538742.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384540660.jpg"
        ]);
});

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browser,
        "http://blog.nogizaka46.com/staff/2017/07/039636.php",
        "blog.nogizaka46.com-staff-2017-07-039636.php/",
        [
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A0%E9%A3%9B%E9%B3%A5.JPG",
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A1%E4%BA%95%E4%B8%8A.JPG",
        ].concat(dummyItems(21)));
});
