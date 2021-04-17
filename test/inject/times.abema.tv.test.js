const {testDirectDownload, launchBrowser, dummyItems} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test times.abema.tv article with images", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/news-article/7039728",
        "times.abema.tv-news-article-7039728/",
        [
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_0.jpg_1580522021.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_0.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_1.jpg_1580522021.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_1.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7039728_ext_col_03_2.jpg_1580522021.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7039728_ext_col_03_2.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await pageutils.scrollTo(page,50, 800);
            },
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThan(4);
            }
        });
});

test("Test times.abema.tv article with images 2", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/news-article/7006935",
        "times.abema.tv-news-article-7006935/",
        [
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_0.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_0.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_13.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_13.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_1.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_1.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_2.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_2.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_3.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_3.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_4.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_4.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_5.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_5.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_6.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_6.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_7.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_7.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_8.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_8.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_9.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_9.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_10.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_10.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_11.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_11.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7006935_ext_col_03_12.jpg_1560759726.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7006935_ext_col_03_12.jpg"
            },
            {
                "retries": [
                    "https://hayabusa.io/abema/programs/89-42_s0_p156158/thumb001.w800.v1559579567.jpg"
                ],
                "url": "https://hayabusa.io/abema/programs/89-42_s0_p156158/thumb001.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await  await pageutils.scrollTo(page,80);
            },
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThan(8);
            }
        });
});

test("Test times.abema.tv article with images and data url", async () => {
    await testDirectDownload(
        browser,
        "https://times.abema.tv/news-article/7040578",
        "times.abema.tv-news-article-7040578/",
        [
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_1.jpg_1581045919.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_1.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_3.jpg_1581045919.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_3.jpg"
            },
            {
                "retries": [
                    "https://d13krdvwknzmgv.cloudfront.net/files/rcms_conv_webp/files/topics/7040578_ext_col_03_6.jpg_1581045919.webp"
                ],
                "url": "https://d13krdvwknzmgv.cloudfront.net/files/topics/7040578_ext_col_03_6.jpg"
            },
            {
                "retries": [
                    "https://hayabusa.io/abema/programs/90-1354_s5_p3/thumb001.w800.v1581039915.jpg"
                ],
                "url": "https://hayabusa.io/abema/programs/90-1354_s5_p3/thumb001.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                await pageutils.scrollTo(page, 75);
            },
            sizeMatch: function (expectedSize, actualSize) {
                expect(actualSize).toBeGreaterThan(2);
            }
        });
});
