const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/1838700", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://trilltrill.jp/articles/1838700",
        "trilltrill.jp-articles-1838700/",
        [
            "https://media.trilltrill.jp/articles/1838700/description-image.9412d1babf9b5ddee981cc38d85695d9",
            "https://media.trilltrill.jp/articles/1838700/description-image.6ec5a92a1451728520cfc3394cef8c64",
            "https://media.trilltrill.jp/articles/1838700/description-image.b209700def5e019750c8fd67dfaa2367",
            "https://media.trilltrill.jp/articles/1838700/description-image.7628b7e00367db69bfbb2168540a4dd9",
            "https://media.trilltrill.jp/articles/1838700/description-image.fbb07fd6f93ba176cd7c5dbdd450122d",
            "https://media.trilltrill.jp/articles/1838700/description-image.ad190260ecb90d6e6eb875bc3a34f572",
            "https://media.trilltrill.jp/articles/1838700/description-image.b7c394dc731137ae6987a1184c9be221",
            "https://media.trilltrill.jp/articles/1838700/description-image.bc0f85e1c28eb901c18a693fa719d84b",
            "https://media.trilltrill.jp/articles/1838700/description-image.60bc3865eaa131076db725869ce92cb3",
            "https://media.trilltrill.jp/articles/1838700/description-image.6756318f875a2fdaadf90d084624cfd0",
            "https://media.trilltrill.jp/articles/1838700/description-image.100c6c765fccf2bfca5ea4fc5c4204b1",
            "https://media.trilltrill.jp/articles/1838700/description-image.a5b8e03764a974a18d03c5bebb7ca7b5",
            "https://media.trilltrill.jp/articles/1838700/description-image.89f633c31bca9b6412bf35244cd8f20e",
            "https://media.trilltrill.jp/articles/1838700/description-image.19adb074d1a60137f3fb0e35c46ea81a",
            "https://media.trilltrill.jp/articles/1838700/description-image.6a475b9a9fcae430209cbb78df68794a"
        ]);
});
