const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test article images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.thefirsttimes.jp/interview/0000026187/",
        "www.thefirsttimes.jp-interview-0000026187-/",
        [
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101001.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101002.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101003.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101004.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101005.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101007.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101006.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101008.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101010.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101011.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101012.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101013.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101014.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101015.jpg"
        ]
    );
});

test("Test attachment images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.thefirsttimes.jp/interview/0000026187/attachment/20210917-ss-101001/",
        "www.thefirsttimes.jp-interview-0000026187-attachment-20210917-ss-101001-/",
        [
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101001.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101015.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101014.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101013.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101012.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101011.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101010.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101008.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101007.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101006.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101005.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101004.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101003.jpg",
            "https://www.thefirsttimes.jp/admin/wp-content/uploads/5000/09/20210917-ss-101002.jpg"
        ]
    );
});
