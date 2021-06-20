const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://nordot.app/778936353306542080",
        "nordot.app-778936353306542080/",
        [
            "https://nordot-res.cloudinary.com/ch/images/778936239380676608/origin_1.jpg",
            "https://nordot-res.cloudinary.com/ch/images/778936239963701248/origin_1.jpg"
        ]
    );
});
