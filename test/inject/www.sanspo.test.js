const {testDirectDownload, launchBrowser, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/20240523-JJXHFCPINFHHNDT7SRLE6YT3ZM/?outputType=theme_mlb", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20240523-JJXHFCPINFHHNDT7SRLE6YT3ZM/?outputType=theme_mlb",
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

test("article/20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.sanspo.com/article/20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI/",
            "www.sanspo.com-article-20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI-/",
            [
                    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/NYSTUQAZKZD4BNYK7HUMRTW2UE.jpg"
            ]);
});


test("article/20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI/photo/NYSTUQAZKZD4BNYK7HUMRTW2UE/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI/photo/NYSTUQAZKZD4BNYK7HUMRTW2UE/",
        "www.sanspo.com-article-20240523-GL5HWNIAFVEMVEDU6TMLGNCBPI-photo-NYSTUQAZKZD4BNYK7HUMRTW2UE-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/NYSTUQAZKZD4BNYK7HUMRTW2UE.jpg"
        ]);
});


test("article/20240518-EBIG4TTWD5EO5C6TWH2RBNOPOU/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.sanspo.com/article/20240518-EBIG4TTWD5EO5C6TWH2RBNOPOU/",
        "www.sanspo.com-article-20240518-EBIG4TTWD5EO5C6TWH2RBNOPOU-/",
        [
            "https://cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/XG7TVIJR3VJZLGBB3JI2UEBX64.jpg"
        ]);
});
