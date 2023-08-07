const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("2023/07/24/bltgraph92_tanakamiku0199918231112_store/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bltweb.jp/2023/07/24/bltgraph92_tanakamiku0199918231112_store/",
        "bltweb.jp-2023-07-24-bltgraph92_tanakamiku0199918231112_store-/",
        [
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0192099918_h1_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0381790019_poster_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0461789001_poster2_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0192099918_7neth1_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0517289001_file_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0617282811_file2_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0716287712_postcarda_store_toukou-1.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0817201911_postcardb_store_toukou-1.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tanakamiku0910291881_postcardc_store_toukou-1.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_tsushiromizuki1029819912_postcarda_store_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_nakashimayuzki1192819281_postcarda_store_toukou-1.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/bltgraph92_suminowakana1318291811_postcarda_store_toukou-1.jpg"
        ]);
});

test("2023/08/06/bltgraph92_suminowakana0381718990_photo/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bltweb.jp/2023/08/06/bltgraph92_suminowakana0381718990_photo/",
        "bltweb.jp-2023-08-06-bltgraph92_suminowakana0381718990_photo-/",
        [
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/nmb48_suminowakana_offshot_0013.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana1927890191_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2039189181_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2109309181_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2298109109_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2391817891_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2481781901_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2591819481_photo_toukou.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/07/suminowakana2618109981_photo_toukou.jpg"
        ]);
});

test("2023/08/02/yonekurareia_drama_interview_01/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bltweb.jp/2023/08/02/yonekurareia_drama_interview_01/",
        "bltweb.jp-2023-08-02-yonekurareia_drama_interview_01-/",
        [
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/yonekurareia_20230729_230801_3.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/yonekurareia_20230729_230801_5.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/yonekurareia_20230729_230801_7.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/fcce81fe70187892a5a55c8b491f8235.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/cbc0c0536242ba7aa62acb0431c740f6.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/e978b2858e4242c18c6c528d8eb6cfa6.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/9f3731564de1f731c4ea5cec5000f94d.jpg",
            "https://bltweb.jp/wp/wp-content/uploads/2023/08/a1a0a93ec690eb3b542b8745f5ec0806.jpg"
        ]);
});
