const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("blog/detail/16753", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bokuao.com/blog/detail/16753",
        "金澤亜美-2025.12.15-さむいよー/",
        [
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/e8f790e5effd5231e59210cc01f61035.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/3a3a162396f268a19021a4c50a6369c2.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/65e86fcceda1c56d00b2420fa54b1d27.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/3a78735c3438511f54ddb2e266a27200.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/6c3377fa40d5f911b01b4330a7fb070c.jpeg"
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
