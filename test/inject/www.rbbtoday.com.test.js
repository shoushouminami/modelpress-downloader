const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {pattern} = require("../../src/inject/www.rbbtoday.com");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test regex pattern", () => {
    let m = "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676383.jpg".match(pattern);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG")
    expect(m[2]).toBe("p/")
    expect(m[3]).toBe("676383.jpg")

    m = "https://www.rbbtoday.com/imgs/zoom/676383.jpg".match(pattern);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("zoom")
    expect(m[2]).toBeUndefined();
    expect(m[3]).toBe("676383.jpg")
});

test("Test news article gallery", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.rbbtoday.com/article/img/2020/09/02/181791/676764.html",
        "www.rbbtoday.com-article-img-2020-09-02-181791-676764.html/",
        [
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676764.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676764.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676764.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676760.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676760.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/zoom/676760.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676761.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676761.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676761.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676762.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676762.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676762.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676763.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676763.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676763.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676758.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676758.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/zoom/676758.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676765.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676765.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676765.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/676759.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676759.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/676759.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50, 1000);
                await pageutils.wait(1000);
            }
        }
    );
});

test("article/2023/09/11/212480.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.rbbtoday.com/article/2023/09/11/212480.html",
        "www.rbbtoday.com-article-2023-09-11-212480.html/",
        [
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/785145.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/785145.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/zoom/785145.jpg"
            },
            {
                "retries": [
                    "https://www.rbbtoday.com/imgs/zoom/730826.jpg",
                    "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/730826.jpg"
                ],
                "url": "https://www.rbbtoday.com/imgs/p/5Mv003Y5bG8YWlzdSjWJq4VMdEMsQ0JFREdG/730826.jpg"
            }
        ]);
});
