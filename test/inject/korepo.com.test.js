const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("archives/1292760", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://korepo.com/archives/1292760",
        "korepo.com-archives-1292760/",
        [
            "https://korepo.com/wp-content/uploads/2023/05/2427e39c4ec7fd0e1375a315c98257ee.jpg",
            "https://korepo.com/wp-content/uploads/2023/05/34fcc9a4f1d99b7c30256ad9ea6fd730.jpg",
            "https://korepo.com/wp-content/uploads/2023/05/9e21df9c32c9237de6f64036ba70e260.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/e862f7f0716a7e518f20a5711482e0ba.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/50a986303e63dc5ff33311196e42de33.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/f1fcdafe0a1918cf3481ebbd9dff1922.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/6bab232be44df5a633e508ba0168d155.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/a7993c809141d65a7f2ac32ca35c9522.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/efd74e77e0121a69126e9453261a6474.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/93b29640854e421d2d65baa8dff48516.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/13b050a6e4414f958115dead6e81b350.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/c538f0a617aa31961d39ac144fe38b8c.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/06afb0533039213ebc907a19c4d039fe.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/66457d360c179da08fa5bc3dbe7361ea.jpg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/4224e2e72ff83bb490cd9ddbbab1005c.jpeg?is-pending-load=1",
            "https://korepo.com/wp-content/uploads/2023/05/cfeb672b63b12c7c125436a7dcf4454a.jpg?is-pending-load=1"
        ]);
});

test("archives/1299301", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://korepo.com/archives/1299301",
            "korepo.com-archives-1299301/",
            [
                    "https://korepo.com/wp-content/uploads/2023/06/Kim-MinGue-PosterJPN-1.jpg"
            ]);
});

test("archives/1300147", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://korepo.com/archives/1300147",
            "korepo.com-archives-1300147/",
            [
                    "https://s.wowkorea.jp/upload/news/398632/20230608e4.jpg"
            ]);
});
