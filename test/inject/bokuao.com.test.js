const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("blog/detail/13906", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bokuao.com/blog/detail/13906",
        "bokuao.com-blog-detail-13906/",
        [
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/763b2257559bc9f646196bf657612aaa.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/1d171fd1c24b27709e3c5cb3d2db661c.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/6c5e8d6c346e66a6df711aa1be2d1ecc.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/7688e2e18f81f53824d315dce78b6b66.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/382803d8ad7f6f166e4f94212e5982dd.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/97d024a5eb11ca6918c6bde744eac45b.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/064316478a3ac648109621ded9df7a57.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/e927331ba3e34753d35fa417e3fa4408.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/703c0ff450eab9c95adc6aa3d4861652.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/1f366ef2fb297cf69aa64498fd6a5b26.jpeg",
            "https://aop-emtg-jp.s3.amazonaws.com/prod/blog/397/1/product/560ba8bef5677e1b19147f66898f5ed3.jpeg"
        ]);
});

test("blog/detail/13905", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bokuao.com/blog/detail/13905",
        "bokuao.com-blog-detail-13905/",
        dummyItems(18)
    );
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
