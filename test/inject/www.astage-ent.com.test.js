const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test apress.jp article with only embeded image", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.astage-ent.com/cinema/barbara-8.html",
        "www.astage-ent.com-cinema-barbara-8.html/",
        [
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9433.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9372.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9465.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9464.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9379.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9395.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9398.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9425.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9408.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9423.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9461.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9463.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9360.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9414.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9469.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/11/DSC_9441.jpg",
            "http://astage-ent.com/wp/wp-content/uploads/2020/10/Barbara-Main.jpg"
        ]
    );
});
