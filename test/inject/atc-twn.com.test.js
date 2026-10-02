const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite atc-twn.com", () => {

    test("2026/09/07/89473/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://atc-twn.com/2026/09/07/89473/",
            "atc-twn.com-日向坂46「ひなたフェス2026」取消後緊急直播 首唱新單曲《イチャイチャ虫》向宮崎傳遞感謝/",
            [
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_001.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_011.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_005.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_002.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_003.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_004.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_006.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_007.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_008.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_009.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_010.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_012.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_013.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/09/HinataFesHaishin_HNZ_014.jpg"
            ]);
    });

    test("2026/09/25/89582/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://atc-twn.com/2026/09/25/89582/",
            "atc-twn.com-乃木坂46、櫻坂46、日向坂46成員集結獻唱「青葉坂46」徵選主題曲〈Audition〉9月發行/",
            [
                "https://atc-twn.com/wp-content/uploads/2026/09/fix_%E9%9D%92%E8%91%89%E5%9D%8246_%E3%82%AA%E3%83%BC%E3%83%87%E3%82%A3%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AD%E3%83%BC%E3%83%93%E3%82%B8%E3%83%A5%E3%82%A2%E3%83%AB.jpg"
            ]);
    });

    test("2026/08/25/89313/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://atc-twn.com/2026/08/25/89313/",
            "atc-twn.com-乃木坂46 全新體制夏季巡迴演唱會重返聖地 座長一ノ瀬美空展現新世代決心【REPO - 圖集】/",
            [
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%94.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%93.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%B2.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AC.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%97.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%98.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A1.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%92.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A0.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A9.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AA.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AB.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AD.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AE.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%AF.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%B0.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%B1.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%B3.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%91.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%95.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%96.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E3%89%99.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A2.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A3.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A4.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A5.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A6.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A7.jpg",
                "https://atc-twn.com/wp-content/uploads/2026/08/fix_%E4%B9%83%E6%9C%A8%E5%9D%8246%E3%80%8C%E7%9C%9F%E5%A4%8F%E3%81%AE%E5%85%A8%E5%9B%BD%E3%83%84%E3%82%A2%E3%83%BC2026%E3%80%8D%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E9%87%8E%E7%90%83%E5%A0%B4%E5%85%AC%E6%BC%94-%E5%86%99%E7%9C%9F%E2%91%A8.jpg"
            ]);
    });


})
