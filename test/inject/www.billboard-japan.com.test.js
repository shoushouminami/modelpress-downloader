const {testDirectDownload, getBrowserFactory} = require("./testbase");
const {re} = require("../../src/inject/www.billboard-japan.com");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("test re", async () => {
    let m = "0x0_abc.jpg".match(re);
    expect(m).toBeTruthy()
    expect(m[1]).toBe("abc.jpg");

    m = "170x170_image.jpg".match(re);
    expect(m).toBeTruthy()
    expect(m[1]).toBe("image.jpg");
    m = "170x_image.jpg".match(re);
    expect(m).toBeTruthy()
    expect(m[1]).toBe("image.jpg");
});

test("d_news/image/125476/16", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.billboard-japan.com/d_news/image/125476/16",
        "www.billboard-japan.com-d_news-image-125476-16/",
        [
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263640.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/image.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263626.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263627.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263628.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263629.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263630.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263631.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263632.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263633.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263634.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263635.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263636.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263637.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263638.jpg",
            "https://www.billboard-japan.com/common/sys/img/news/00000125/125476/sub_image263639.jpg"
        ]);
});

test("d_news/image/126093", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.billboard-japan.com/d_news/image/126093",
        "www.billboard-japan.com-d_news-image-126093/",
        [
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/image.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264748.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264749.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264750.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264751.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264752.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264753.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264754.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264755.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264756.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264757.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264758.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264759.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264760.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264761.jpeg",
            "https://www.billboard-japan.com/common/sys/img/news/00000126/126093/sub_image264762.jpeg"
        ]);
});

test("special/detail/3966", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.billboard-japan.com/special/detail/3966",
        "www.billboard-japan.com-special-detail-3966/",
        [
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/top.png",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6086ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6100ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6129ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/jk.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6148ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6176ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6185ret2.jpg",
            "http://www.billboard-japan.com/common/special/interview/230531_SY/img/2F7A6173ret2.jpg"
        ]);
});
