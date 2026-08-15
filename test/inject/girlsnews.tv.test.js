const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {re, getLargeImg} = require("../../src/inject/girlsnews.tv.js");

describe("Test suite girlsnews.tv", () => {
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

    test("Test getLargeImg", function () {
        expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img202001110_youka.jpg").url)
            .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img202001110_youka.jpg");
        expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/ig20201109aya01.jpeg").url)
            .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/ig20201109aya01.jpeg");
        expect(getLargeImg("https://girlsnews.tv/reimage/y2020/m11/w92/h92/1/1/img20201101morisakitomomi3.jpg").url)
            .toBe("https://girlsnews.tv/reimage/y2020/m11/w1000/img20201101morisakitomomi3.jpg");

    })

    // news category
    test("Test news page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://girlsnews.tv/news/503654",
            "girlsnews.tv-news-503654/",
            [
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260809komori01.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w288/img20260809komori01.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori02.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori02.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori01.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori01.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori02.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori02.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m07/w1000/img20260716komori03.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m07/w130/h90/img20260716komori03.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori07.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori07.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori06.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori06.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori01.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori01.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori04.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori04.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori05.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori05.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori10.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori10.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori08.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori08.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori09.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori09.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m05/w1000/img20260503komori11.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m05/w130/h90/img20260503komori11.jpg"]
                }
            ]
        );
    });

    // actress category
    test("Test actress page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://girlsnews.tv/actress/503592",
            "girlsnews.tv-actress-503592/",
            dummyItems(26)
        );
    });

    // gravureidol category, accessed via the www subdomain (altHosts)
    test("Test www subdomain (gravureidol category)", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.girlsnews.tv/news/503683",
            "www.girlsnews.tv-news-503683/",
            [
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko05.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w288/img20260807nashiko05.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko06.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko06.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko07.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko07.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko01.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko01.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko02.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko02.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko03.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko03.jpg"]
                },
                {
                    "url": "https://www.girlsnews.tv/reimage/y2026/m08/w1000/img20260807nashiko04.jpg",
                    "retries": ["https://www.girlsnews.tv/reimage/y2026/m08/w130/h90/img20260807nashiko04.jpg"]
                }
            ]
        );
    });

    // unit category
    test("Test unit page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://girlsnews.tv/unit/503822",
            "girlsnews.tv-unit-503822/",
            dummyItems(31)
        );
    });
});
