const puppeteer = require('puppeteer');
const testDirectDownload = require('./testbase.js').testDirectDownload;

let browser;
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false, // extension are allowed only in head-full mode
        args: [
            '--disable-extensions-except=../build',
            '--load-extension=../build',
            '--lang=zh-CN,zh',
            '--no-sandbox'
        ],
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
});

afterAll(async () => {
    await browser.close();
});

// Test blog.nogizaka46.com
test('Test http://blog.nogizaka46.com/fourth/2019/06/051125.php', async () => {
    await testDirectDownload(
        browser,
        'http://blog.nogizaka46.com/fourth/2019/06/051125.php',
        'blog.nogizaka46.com-fourth-2019-06-051125.php/',
        [
            'https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0004.jpg',
            'https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0001.jpg',
            'https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0002.jpg',
            'https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0003.jpg',
            'https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0000.jpg'
        ]);
});

test('Test http://blog.nogizaka46.com/momoko.oozono/2019/09/052573.php', async () => {
    const page = await browser.newPage();
    await page.goto("http://blog.nogizaka46.com/momoko.oozono/2019/09/052573.php");
    await page.addScriptTag({path: "./mock.js"});
    await page.addScriptTag({path: "../src/inject.js"});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid['ext']).toBeUndefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();
    expect(mid['o']['images']).toStrictEqual([
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
    expect(mid['o']['folder']).toBe('blog.nogizaka46.com-momoko.oozono-2019-09-052573.php/');
});

test('Test http://blog.nogizaka46.com/fourth/2019/06/051238.php', async () => {
    await testDirectDownload(
        browser,
        'http://blog.nogizaka46.com/fourth/2019/06/051238.php',
        'blog.nogizaka46.com-fourth-2019-06-051238.php/',
        [
        'https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0003.jpg',
        'https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0004.jpg',
        'https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0000.jpg',
        'https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0001.jpg',
        'https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0002.jpg'
    ]);
});

// Test mdpr.jp
test('Test https://mdpr.jp/news/detail/1844622', async () => {
    await testDirectDownload(
        browser,
        'https://mdpr.jp/news/detail/1844622',
        'mdpr.jp-news-detail-1844622/',
        [
            'https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg',
            'https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg',
            'https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg',
            'https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg'
        ]);
});

test('Test https://mdpr.jp/photo/detail/6942679', async () => {
    await testDirectDownload(
        browser,
        'https://mdpr.jp/photo/detail/6942679',
        'mdpr.jp-photo-detail-6942679/',
        [
            'https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg',
            'https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg',
            'https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg',
            'https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg'
        ]);
});

// bilibili/read
test('Test https://www.bilibili.com/read/cv2820325', async () => {
    await testDirectDownload(
        browser,
        'https://www.bilibili.com/read/cv2820325',
        'www.bilibili.com-read-cv2820325/',
        [
            'https://i0.hdslb.com/bfs/article/d18f00ce510e209b689eaee6832f820157f3dbc5.jpg',
            'https://i0.hdslb.com/bfs/article/f6ff12a812a1c49de69b20d620b1cb3225cec051.jpg',
            'https://i0.hdslb.com/bfs/article/f904750e2dd1ac5b5ce88fa832c4e1ea53c7c048.jpg',
            'https://i0.hdslb.com/bfs/article/363276193da02eeaa6a2acfceebdb04b8edee308.jpg',
            'https://i0.hdslb.com/bfs/article/51f18ffc742682c944d23ce10a93ef92c46b82f0.jpg'
        ]);
});

// Twitter
test('Test https://twitter.com/nogizaka46/status/1149196527375511552', async () => {
    const page = await browser.newPage();
    await page.setBypassCSP(true);
    await page.goto('https://twitter.com/nogizaka46/status/1149196527375511552');
    await page.addScriptTag({path: "./mock.js"});
    await page.addScriptTag({path: "../src/inject.js"});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();
    expect(mid['o']['images']).toHaveLength(1);
    expect(mid['o']['folder']).toBe('twitter.com-nogizaka46-status-1149196527375511552/');
    if (mid['o']['ext']) {
        expect(mid['o']['ext']).toBe('jpg');
        expect(mid['o']['images'][0]).toContain('https://pbs.twimg.com/media/D_LEJgFU0AAHed4?format=jpg&name=large');
    } else {
        expect(mid['o']['images'][0]).toContain('https://pbs.twimg.com/media/D_LEJgFU0AAHed4.jpg:large');
    }
});