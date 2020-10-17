const {testDirectDownload, getBrowserFactory} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test keyakizaka46 blog article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sakurazaka46.com/s/s46/diary/detail/36123",
        "sakurazaka46.com-s-s46-diary-detail-36123/",
        [
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202010/mob17gIAT.jpg",
            "https://sakurazaka46.com/files/14/diary/s46/blog/moblog/202010/mobNBUY1d.jpg"
        ]
    );
});
