const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite bokuao.com", () => { 
    test.skip("blog/detail/20297", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bokuao.com/blog/detail/20297",
            "八木仁愛-2026.08.13-ゆったりまったり/",
            [
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/d3e0528d633aba479cb4a1f538b1c505.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/94705e0e91178c1bf00cc30fbc5b4377.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/15e7105094db569bdea4f238ce0573e1.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/8e82b73fefb5dfe94a96cfa5f0dc38f3.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/ddd0a376f892a21a97d6f10d3d2d84a2.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/95c87625aac92a19025fefb8aeda08d7.jpeg"
            ]);
    });

    test("news/detail/3489", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bokuao.com/news/detail/3489",
            "bokuao.com-news-detail-3489/",
            [
                "https://aop-emtg-jp.s3.amazonaws.com/prod/public/ligareaz/contents/information/a360a62cad18dd02ee40a4f8e1e6ceef.jpg"
            ]);
    });

    test("feature/profile_kinoshita_ai", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bokuao.com/feature/profile_kinoshita_ai",
            "bokuao.com-feature-profile_kinoshita_ai/",
            [
                "https://bokuao.com/image/profile/kinoshita_ai.jpg"
            ]);
    });
});
