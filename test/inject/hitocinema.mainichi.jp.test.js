const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("films-info/zenbu-of-tokyo/photo/1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hitocinema.mainichi.jp/films-info/zenbu-of-tokyo/photo/1",
        "hitocinema.mainichi.jp-films-info-zenbu-of-tokyo-photo-1/",
        [
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/76668a11a36a4beabd9417d9bb9cef1a/%E3%83%A1%E3%82%A4%E3%83%B3%E2%91%A0%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/df26c5e1d9364834b98e4eb308ab9560/ZOT_%E6%9C%AC%E3%83%9B%E3%82%9A%E3%82%B9%E3%82%BF%E3%83%BC.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/9296d0817ba64bd38f4e90eed7d50de4/%E3%83%A1%E3%82%A4%E3%83%B3%E2%91%A1%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/fd103b5dab964fdd802bbbc4bd67edc6/%E3%82%B5%E3%83%95%E3%82%99%E2%91%A0%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/ad2eb84106734c38a448f293dff2c8ca/%E3%82%B5%E3%83%95%E3%82%99%E2%91%A1%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/0814ac82858743d2b94c925ed8630db1/%E3%82%B5%E3%83%95%E3%82%99%E2%91%A2%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/059fdc4c58ce4872827fbe25cd0849db/%E3%82%B5%E3%83%95%E3%82%99%E2%91%A3%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/e2b6368a53254f4b922eadcda1a997e1/%E3%82%B5%E3%83%95%E3%82%99%E2%91%A4%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/87e07dcf72aa4d2bae9fc01b58a2dc9d/%E3%82%B5%E3%83%95%E3%82%99%E3%82%B5%E3%83%95%E3%82%99%E2%91%A0%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/6862c9ae4e54441481b3e787b417b360/%E3%82%B5%E3%83%95%E3%82%99%E3%82%B5%E3%83%95%E3%82%99%E2%91%A1%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/affbea2d704743e7826e4b3cf048c45d/%E3%82%B5%E3%83%95%E3%82%99%E3%82%B5%E3%83%95%E3%82%99%E2%91%A2%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/ccd56ab01730491fa7c0370954a5755b/syougenji01%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/d59a26b47fb549b997c482c4ee58510b/syougenji02%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.JPG",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/a4965a9dbd94459dab6d1080e27de5e2/syougenji03%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/2a24d4c5b58245a294411d07b79b9a61/0926_zot01%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/2dcf6b176daa4e7ab1115d40e128cec2/0926_zot02%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/4710192a284244648ed28b1356e17059/0926_zot03%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/bd0c40c7c46b4f73b2341c66a9eb7ec7/0926_zot04%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/4ee02b3bdc354cf7a1718fdc3d01877b/0926_zot05%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/2cf4ef951e0044c682a779dd056141d6/%E3%83%86%E3%82%A3%E3%82%B5%E3%82%99%E3%83%BC%E3%83%92%E3%82%99%E3%82%B7%E3%82%99%E3%83%A5%E3%82%A2%E3%83%AB%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg"
        ]);
});

test("article/weekend-cinema-waruinatsu", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hitocinema.mainichi.jp/article/weekend-cinema-waruinatsu",
        "hitocinema.mainichi.jp-article-weekend-cinema-waruinatsu/",
        [
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/46227b7fe8114a289db864f3685624f0/waruinatsu.jpg"
        ]);
});

test("films-info/zenbu-of-tokyo", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hitocinema.mainichi.jp/films-info/zenbu-of-tokyo",
        "hitocinema.mainichi.jp-films-info-zenbu-of-tokyo/",
        [
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/76668a11a36a4beabd9417d9bb9cef1a/%E3%83%A1%E3%82%A4%E3%83%B3%E2%91%A0%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%C2%A9%EF%B8%8E2024%E6%98%A0%E7%94%BB%E3%80%8C%E3%82%BC%E3%83%B3%E3%83%96%E3%83%BB%E3%82%AA%E3%83%96%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC%E3%80%8D%E8%A3%BD%E4%BD%9C%E5%A7%94%E5%93%A1%E4%BC%9A.jpg"
        ]);
});

test("article/dmp_9be-i?dicbo=v2-w2WkmsI", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hitocinema.mainichi.jp/article/dmp_9be-i?dicbo=v2-w2WkmsI",
        "hitocinema.mainichi.jp-article-dmp_9be-i/",
        [
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/c70a2e14ed6d437a9c1602382d057861/%E3%83%91%E3%83%97%E3%83%AA%E3%82%AB%E3%82%BB%E3%83%AB%E3%83%96%E3%83%AB%E3%83%BC%E3%83%AC%E3%82%A4%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%80%80%E5%93%81%E7%95%AABRS-41985paprika01(main).jpg_rgb%20-%20%E3%82%B3%E3%83%94%E3%83%BC.JPG",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/16e022b00e49499e832e540d619a2767/%E3%83%91%E3%83%97%E3%83%AA%E3%82%AB%E3%82%BB%E3%83%AB%E3%83%96%E3%83%AB%E3%83%BC%E3%83%AC%E3%82%A4%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%80%80%E5%93%81%E7%95%AABRS-41985paprika02(sub).jpg_rgb%20-%20%E3%82%B3%E3%83%94%E3%83%BC.JPG",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/a9a8dc5f8e1941cfa864ae876adb3b76/%E3%83%91%E3%83%97%E3%83%AA%E3%82%AB%E3%82%BB%E3%83%AB%E3%83%96%E3%83%AB%E3%83%BC%E3%83%AC%E3%82%A4%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%80%80%E5%93%81%E7%95%AABRS-41985paprika03(sub).jpg_rgb%20-%20%E3%82%B3%E3%83%94%E3%83%BC.JPG",
            "https://images.microcms-assets.io/assets/d247fcc9b85b413caf66458586629de0/e77f6e36b9df4db59d810348d3234a6b/%E3%83%91%E3%83%97%E3%83%AA%E3%82%AB%E3%82%BB%E3%83%AB%E3%83%96%E3%83%AB%E3%83%BC%E3%83%AC%E3%82%A4%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%80%80%E5%93%81%E7%95%AABRS-41985BL_paprica_rgb.jpg"
        ]);
});
