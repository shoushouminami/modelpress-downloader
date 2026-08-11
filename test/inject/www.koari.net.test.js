const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.koari.net", () => { 
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

    test("entertainment/258579/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.koari.net/entertainment/258579/",
            "www.koari.net-entertainment-258579-/",
            [
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride_main.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride_sub8.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride_sub2.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride_sub1.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride_sub4.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/First-Ride-goods.jpg",
                "https://www.koari.net/wp-content/uploads/2026/08/firstride2.png",
                "https://www.koari.net/wp-content/uploads/2026/08/firstride.png"
            ]);
    });
});

