const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("76196/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://websunday.net/76196/",
        "websunday.net-76196-/",
        [
            "https://websunday.net/wp-content/uploads/2025/05/0521w9zsMzWD-0101.jpg",
            "https://websunday.net/wp-content/uploads/2025/05/0521w9zsMzWD-0102.jpg",
            "https://websunday.net/wp-content/uploads/2025/05/0521w9zsMzWD-0103.jpg",
            "https://websunday.net/wp-content/uploads/2025/05/0521w9zsMzWD-0104.jpg"
        ]);
});
