const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article full page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/girls2/222667.html?view=more",
        "wws-channel.com-girls2-222667.html/",
        [
                "https://wws-channel.com/wp-content/uploads/2020/09/00-3.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-4-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-3-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-1-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-2-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-5-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-6.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-5.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-4.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-3.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-2.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-8.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-9.jpg"
        ]
    );
});

test("Test news article attachment page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wws-channel.com/girls2/222667.html/attachment/00-6990?pg=222667&mv=0",
        "wws-channel.com-girls2-222667.html-attachment-00-6990/",
        [
                "https://wws-channel.com/wp-content/uploads/2020/09/00-3.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-4-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-3-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-1-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-2-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/1-5-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-6.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-5.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-4.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-3.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-2.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-1.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-8.jpg",
                "https://wws-channel.com/wp-content/uploads/2020/09/10-9.jpg"
        ]
    );
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
