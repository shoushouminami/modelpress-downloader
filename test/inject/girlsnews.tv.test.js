const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {re, getLargeImg} = require("../../src/inject/girlsnews.tv.js");

test("Test re", () => {
    let m = "/w123/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "/abc/w123/def/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w288/ig20201109aya01.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w288/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w130/h90/ig20201109aya02.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w130/");
    expect(m[2]).toBe("h90/");
});

test("Test getLargeImg", function (){
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img202001110_youka.jpg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img202001110_youka.jpg");
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/ig20201109aya01.jpeg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/ig20201109aya01.jpeg");
    expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img20201101morisakitomomi3.jpg").url)
        .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img20201101morisakitomomi3.jpg");

})

test.skip("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://girlsnews.tv/actress/361305",
        "girlsnews.tv-actress-361305/",
        [
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m09/w288/img20200930rinkuma02.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m09/w1000/img20200930rinkuma02.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m09/w130/h90/img20200930rinkuma01.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m09/w1000/img20200930rinkuma01.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m09/w130/h90/img20200930rinkuma03.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m09/w1000/img20200930rinkuma03.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m09/w130/h90/img20200930rinkuma05.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m09/w1000/img20200930rinkuma05.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m09/w130/h90/img20200930rinkuma04B.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m09/w1000/img20200930rinkuma04B.jpg"
            }
        ]
    );
});

test.skip("Test actress page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://girlsnews.tv/actress/362139",
        "girlsnews.tv-actress-362139/",
        [
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m10/w288/ig20201010fukagawa01.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m10/w1000/ig20201010fukagawa01.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m10/w130/h90/ig20201010fukagawa04.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m10/w1000/ig20201010fukagawa04.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m10/w130/h90/ig20201010fukagawa02.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m10/w1000/ig20201010fukagawa02.jpg"
            },
            {
                "retries": [
                    "https://girlsnews.tv/reimage/y2020/m10/w130/h90/ig20201010fukagawa03.jpg"
                ],
                "url": "https://girlsnews.tv/reimage/y2020/m10/w1000/ig20201010fukagawa03.jpg"
            }
        ]
    );
});
