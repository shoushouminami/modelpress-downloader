const {testDirectDownload, getBrowserFactory, launchBrowser, dummyItems} = require("./testbase");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test http://blog.nogizaka46.com/fourth/2019/06/051125.php", async () => {
    await testDirectDownload(
        browserFactory(),
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
    await testDirectDownload(
        browserFactory(),
        "http://blog.nogizaka46.com/momoko.oozono/2019/09/052573.php",
        "blog.nogizaka46.com-momoko.oozono-2019-09-052573.php/",
        [
            {
                "imageUrl": "http://dcimg.awalker.jp/i/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/u1BqxJJaaxkjkAMcdEU97MfbBTk2A2XjqaaybSYRa9ip7eopy8cbYMgyhjDfqeh1S1JGrrUoxEppPhHwTSKwkwOUfbxDbR01Dch7eTwQZb5hCBAef26EkfsraR9ay4pp5yqPwMdynaNpEg01d2BDEvlwehVUJ28ysKzOJ05mFbDOe9XqOzpLvMoISmQ5Abjhvopn37cD"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/9XEddMCIbeDOFsOgi6sbGbT58dNEqRmjhXNSlTv1lYUWUnv2qjleuVo0NswVMJBHdJugxnuHFJprItnlU77ZQpLe3hoW1dBkpRJRHKqH1BJLQGBXQJ7DRLBgiliDP1btzX2sDTnjT6fO7cMJj5uLdHq9JrRTuP0evi2FJXmAtLagf9wjTqnL55Fdsoghgd8o5FrP3x7a"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/8T9Qmc5X0CyeWDlvzEqIpTWJlez38N2wUvguE9wGHH8PuuYRSY7OOS5VGA0zXzGQQvtTDDQienpuuXveSKdiJPTJQOnpHsKtCHuvuHwEtYBTLHVR3A1eNXYXRtXHSE3xvWcOhMJ7J1fDw9pQ1SIqbvm7IAazkhS8qguZfdzkM1YUFPbCzs3bdWDtPi7T0dR2E7Q9qmib"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/92eJ8Z35MYIjbMvBAOGkVJWJXZfXxdSp90F8puOnjnm5TatnFvYPtEHw44ETT2wvpDsSF4FSgm1CjpRB1ApJnKhQmxHTb2pa6fbSB2rgADPHi5dNRDYV1fibI7FYI6zsCZ3Hxb4crdYN0eGPCjc9kd8eS5e8KvqDa8PFqTFgIJetyNTrEDRWfrr0WfUitAImmFI8FaIw"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/3CvZf6wkU5yK3wTaOBmvoQtMrQqBpXpUyxnuoNSf8jQplLsJBDm4CzgqV1PGUuI2MhGHqHxxnABhGAHxKt0C701PLlFbKsPGcxuLSYwouJAyWcXVUCTvS8ACIdi13tfuinmnf235Y72xhwTnTAZRrhE6686QPmrhTpAP930N5cZqpFIWsw06PSEDWWhacqCp5nyztw22"
            }
        ]);
});

test("Image url is in src of IMG node", async () => {
    await testDirectDownload(
        browserFactory(),
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
        browserFactory(),
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
        browserFactory(),
        "http://blog.nogizaka46.com/staff/2017/07/039636.php",
        "blog.nogizaka46.com-staff-2017-07-039636.php/",
        [
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A0%E9%A3%9B%E9%B3%A5.JPG",
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A1%E4%BA%95%E4%B8%8A.JPG",
        ].concat(dummyItems(21)));
});
