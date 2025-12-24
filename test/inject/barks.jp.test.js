const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite barks.jp", () => { 
    test("news/1006496/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://barks.jp/news/1006496/",
            "barks.jp-news-1006496-/",
            [
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10095532/h2.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101127/h5.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101151/h8.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101236/h12.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101422/h13.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101429/h14.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101248/h19.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/08/10101318/h3.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/07/14154926/LF25_SNS_TT8-9_5th_cmyk_0702-scaled-1-2.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/07/14154926/LF25_SNS_TT8-10_5th_cmyk_0710fin-scaled-1-2.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/07/14154926/LF25_SNS_TT8-11_5th_cmyk_0702-scaled-1-2.jpg"
            ]);
    });


    test("news/1036864/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://barks.jp/news/1036864/",
            "barks.jp-news-1036864-/",
            [
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21111628/01_zen-02496ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/22145331/01_tak_2505ok_fix.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112817/01_inaba_0718ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112142/01_zen-0233.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112146/01_zen-0338.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112245/01_inaba-0020ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112315/01_tak-0558ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21112740/01_zen-2253.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113019/01_tak_1488ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113118/01_inaba-0888ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113657/01_tak_1277ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113314/01_inaba-1688ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113931/01_inaba_2199ok.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/21113939/01_tak-1332ok.jpg"
            ]);
    });

    test("news/1037418/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://barks.jp/news/1037418/",
            "barks.jp-news-1037418-/",
            [
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192047/N8A0577.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192057/N8A0932.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192100/N8A1348.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192107/N8A1447.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192111/N8A1555.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192119/N8A2319.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192122/N8B7985.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192136/N8B8484.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/12/23192139/N8B8531.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/09/19124144/%E3%80%8C%E3%83%93%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%99%E3%83%AB%E3%83%88%E3%80%8D%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88%E5%86%99%E7%9C%9F.jpg",
                "https://new-img.barks.jp/wp-content/uploads/2025/09/19124150/%E3%80%8C%E3%83%93%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%99%E3%83%AB%E3%83%88%E3%80%8D%E7%89%B9%E5%85%B8%E7%94%BB%E5%83%8F%EF%BC%88%E5%85%88%E7%9D%80%E8%B3%BC%E5%85%A5%E8%80%85%E7%89%B9%E5%85%B8%EF%BC%89-.jpg"
            ]);
    });
}); 

