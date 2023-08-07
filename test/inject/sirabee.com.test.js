const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("Test gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sirabee.com/2022/03/30/20162828352/sirabee20220330kakiharuka1/",
        "sirabee.com-2022-03-30-20162828352-sirabee20220330kakiharuka1-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka1.jpg",
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka2.jpg"
        ]
    );
});

test("2022/03/30/20162828352/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sirabee.com/2022/03/30/20162828352/",
        "sirabee.com-2022-03-30-20162828352-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2022/03/sirabee20220330kakiharuka1.jpg"
        ]);
});

test("2023/08/05/20163132353/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sirabee.com/2023/08/05/20163132353/",
        "sirabee.com-2023-08-05-20163132353-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2023/06/sirabee20230629fujitanikoru1.jpg"
        ]);
});

test("2023/08/06/20163132457/", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://sirabee.com/2023/08/06/20163132457/",
        "sirabee.com-2023-08-06-20163132457-/",
        [
            "https://img.sirabee.com/wp-content/uploads/2022/06/sirabee20220601shinuchimai1.jpeg"
        ]);
});
