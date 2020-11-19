const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test interview article ", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tokyoheadline.com/521960/4/",
        "www.tokyoheadline.com-521960-4-/",
        [
            "https://www.tokyoheadline.com/wp-content/uploads/sub-3.jpg",
            "https://www.tokyoheadline.com/wp-content/uploads/mein.jpg"
        ]
    );
});

test("Test interview article ", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.tokyoheadline.com/521998/",
        "www.tokyoheadline.com-521998-/",
        [
            "https://www.tokyoheadline.com/wp-content/uploads/image_6483441.jpg",
            "https://www.tokyoheadline.com/wp-content/uploads/image_6487327-2.jpg",
            "https://www.tokyoheadline.com/wp-content/uploads/image_6487327-1.jpg",
            "https://www.tokyoheadline.com/wp-content/uploads/image_6487327.jpg"
        ]
    );
});
