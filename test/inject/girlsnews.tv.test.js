const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const re = require("../../src/inject/girlsnews.tv.js").re;

test("Test re", () => {
    let m = "/w123/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "/abc/w123/def/".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w123/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w288/ig20201109aya01.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w288/");
    m = "https://girlsnews.tv/reimage/y2020/m11/w130/h90/ig20201109aya02.jpeg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("/w130/");
    expect(m[2]).toBe("h90/");
});


test("Test cancam.jp magzine main page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://cancam.jp/cancam201911",
        "cancam.jp-cancam201911/",
        ["https://cancam.jp/uploads/2019/09/CanCam201911_cover-20190919180345.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P7-20190919180348.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P9-20190919180349.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P28-20190919180356.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P29-20190919180358.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P22-20190919180353.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P23-20190919180355.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P56-20190919180938.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P57-20190919180403.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P78-20190919180406.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P72-20190919180405.jpg","https://cancam.jp/uploads/2019/09/CanCam201911_P21-20190919180351.jpg"]
    );
});
