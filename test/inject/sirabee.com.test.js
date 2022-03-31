const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browser =  getBrowserFactory(beforeAll, afterAll);

test("Test gallery page", async () => {
    await testDirectDownload(
        browser(),
        "https://sirabee.com/2022/03/30/20162828352/sirabee20220330kakiharuka1/",
        "sirabee.com-2022-03-30-20162828352-sirabee20220330kakiharuka1-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka1.jpg",
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka2.jpg"
        ]
    );
});

test("Test article page", async () => {
    await testDirectDownload(
        browser(),
        "https://sirabee.com/2022/03/30/20162828352/",
        "sirabee.com-2022-03-30-20162828352-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka1.jpg",
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka2.jpg"
        ]
    );
});

