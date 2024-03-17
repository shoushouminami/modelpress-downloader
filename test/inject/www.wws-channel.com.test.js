const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("fashion2/488823.html?view=more", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/fashion2/488823.html?view=more",
        "wws-channel.com-fashion2-488823.html/",
        [
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/59OZFOGF-00.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-4.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-5.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-2.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-3.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-7.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-6.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-1.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-8.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-7.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-6.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-5.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-4.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-3.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-2.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-1.jpg"
        ]);
});

test("fashion2/488823.html/attachment/00-9317?pg=488823&mv=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/fashion2/488823.html/attachment/00-9317?pg=488823&mv=0",
        "wws-channel.com-fashion2-488823.html-attachment-00-9317/",
        [
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/59OZFOGF-00.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-4.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-5.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-2.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-3.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-7.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-6.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/souel01-1.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-8.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-7.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-6.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-5.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-4.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-3.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-2.jpg",
            "https://pub-6e6736ba37d64d4aa5ae63b074884090.r2.dev/2024/03/japanese-1.jpg"
        ]);
});

test("news2/222467.html?view=more", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/news2/222467.html?view=more",
        "wws-channel.com-news2-222467.html/",
        [
            "https://wws-channel.com/wp-content/uploads/2020/09/SK00.jpg"
        ]);
});

test("news2/222467.html/attachment/sk00-20?pg=222467&mv=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/news2/222467.html/attachment/sk00-20?pg=222467&mv=0",
        "wws-channel.com-news2-222467.html-attachment-sk00-20/",
        [
            "https://wws-channel.com/wp-content/uploads/2020/09/SK00.jpg"
        ]);
});
