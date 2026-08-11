const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite bokuao.com", () => { 

    test("blog/detail/20248", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bokuao.com/blog/detail/20248",
            "岩本理瑚-2026.08.10-森脇さんすごくいい方です💚/",
            [
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/2dcfe5c294a932723ef1c78128bb496a.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/4628a4d4cb11d6e7c62af663df6717cf.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/655c07a0e874c25f15868831d2420b53.jpeg",
                "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/9404c0b3099126f565a2d667ae2399fc.jpeg"
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
