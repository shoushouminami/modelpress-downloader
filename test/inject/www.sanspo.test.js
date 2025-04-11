const {testDirectDownload, launchBrowser, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/20240523-JJXHFCPINFHHNDT7SRLE6YT3ZM/?outputType=theme_mlb", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20240523-JJXHFCPINFHHNDT7SRLE6YT3ZM/",
        "www.sanspo.com-article-20240523-JJXHFCPINFHHNDT7SRLE6YT3ZM-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/CVGOIPMDKBKWLLV2Q6KDPS27YI.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/H3OHV6YTDVLJBAJBZPEU5GROG4.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/RZXDSWL33VM75JZWIO5JKMRILQ.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/WAN2LKMBXRK5DGYJ6VNNU7DUCI.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/HDGTIYKDSNI2RPAA5KVGEL6IPQ.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/VNY6TQQE3VN7NOJ7ZGUMETYEFY.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/UVDZO63VIVNAXC5YW77UECMR5U.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/SMMBYE7QWVIBXJAABHDR2BHKTA.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/3FM4FDUHYJPYVD73AH37RPH3DE.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/5SMUUMG7QRMWNMEXST4GKOUP7M.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/6T3K4HB4KJNJ5NQGRDYNJLKFEM.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/Y7JRHQJNVBNGRO27G3FVRHUUQI.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/XH5GJBQI7JPYLB4AKC62OEP6EE.jpg"
        ]);
});

test("article/20250411-KXU2DZLC6RCEZJWMVO4OU63OVQ/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20250411-KXU2DZLC6RCEZJWMVO4OU63OVQ/",
        "www.sanspo.com-article-20250411-KXU2DZLC6RCEZJWMVO4OU63OVQ-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/ICR2VYIKPBOE7OHBTCI4IADNBM.jpg"
        ]);
});


test("article/20250411-3ICJUMJ5TVOSBBMQAS7MMVB3MQ/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20250411-3ICJUMJ5TVOSBBMQAS7MMVB3MQ/",
        "www.sanspo.com-article-20250411-3ICJUMJ5TVOSBBMQAS7MMVB3MQ-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/I5Y3XEIYJBA2ROYW7EABUEROJY.jpg"
        ]);
});

test("article/20250410-FUGJVKIGTZL6ZEGOM7CGZ2HKEE/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20250410-FUGJVKIGTZL6ZEGOM7CGZ2HKEE/",
        "www.sanspo.com-article-20250410-FUGJVKIGTZL6ZEGOM7CGZ2HKEE-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/XVYG43MF3NOMNE63EYD5O5Z5L4.jpg",
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/4NTCU6IL7JO6LFVDDGMB533VB4.jpg"
        ]);
});
