const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test image gallery page", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.m-on-music.jp/0000414700/200615-tr-0910075/",
            "www.m-on-music.jp-0000414700-200615-tr-0910075-/",
            [
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910075.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910083.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910082.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910081.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910080.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910079.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910078.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910077.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910076.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910074.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910073.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910072.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910071.jpg",
                    "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910070.jpg"
            ]);
});

test("Test article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.m-on-music.jp/0000414700/",
        "www.m-on-music.jp-0000414700-/",
        [
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910070.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910071.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910072.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910073.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910074.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910075.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910076.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910077.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910078.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910079.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910080.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910081.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910082.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200615-TR-0910083.jpg"
        ]);
});

test("Test article page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.m-on-music.jp/0000425760/",
        "www.m-on-music.jp-0000425760-/",
        [
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/08/200813-ys-204502.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/06/200614-ys-123501.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/08/200813-ys-193602.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/08/200813-ys-193601.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/08/200813-ys-204501.jpg",
            "https://www.m-on-music.jp/admin/wp-content/uploads/2020/08/200813-ys-193401.jpg"
        ]);
});
