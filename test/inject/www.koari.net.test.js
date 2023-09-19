const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("entertainment/167137/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.koari.net/entertainment/167137/",
        "www.koari.net-entertainment-167137-/",
        [
            "https://www.koari.net/wp-content/uploads/2023/09/01.png",
            "https://www.koari.net/wp-content/uploads/2020/10/penthouse-2.jpg",
            "https://www.koari.net/wp-content/uploads/2023/09/330C86C7-E327-4092-A0A5-DC90D57759B4.png",
            "https://www.koari.net/wp-content/uploads/2023/08/3E7B3C49-76BB-4FFE-97CA-AD8AFB254A7F-3.png"
        ]);
});

test("attention/162766/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.koari.net/attention/162766/",
        "www.koari.net-attention-162766-/",
        [
            "https://www.koari.net/wp-content/uploads/2023/08/Yellow-And-Pink-Modern-Retro-Fashion-Ideas-Flyer-Landscape-470-×-274-px-470-×-247-px-3-2.png",
            "https://www.koari.net/wp-content/uploads/2023/08/111.png",
            "https://www.koari.net/wp-content/uploads/2023/08/222.jpg",
            "https://www.koari.net/wp-content/uploads/2023/08/333.jpg",
            "https://www.koari.net/wp-content/uploads/2023/08/444.jpg",
            "https://www.koari.net/wp-content/uploads/2023/08/555.png",
            "https://www.koari.net/wp-content/uploads/2023/08/666.png",
            "https://www.koari.net/wp-content/uploads/2023/08/777.jpg",
            "https://www.koari.net/wp-content/uploads/2023/08/888.png",
            "https://www.koari.net/wp-content/uploads/2023/08/999.png",
            "https://www.koari.net/wp-content/uploads/2023/08/1111.png",
            "https://www.koari.net/wp-content/uploads/2023/08/1-6.png"
        ]);
});
