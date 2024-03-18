const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/15201196", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/article/15201196",
        "mezamashi.media-article-15201196/",
        [
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff86e-p%2Fpicture%2F28343826%2F64b8299d1597b8a5c7b9cb9c88642f6c.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F133b-p%2Fpicture%2F28343827%2Fbd107b6809e4688fa1b0ce4077691bb8.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F5acb-p%2Fpicture%2F28343825%2F9414a8f5b810972c3c9a0e2860c07532.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Fb4f4-p%2Fpicture%2F28343824%2F1058abae0dc372f4432cbea7fa123512.jpg&w=3840&q=100"
        ]);
});

test("article/15201522", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/article/15201522",
        "mezamashi.media-article-15201522/",
        [
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F99bc-p%2Fpicture%2F28344542%2Fbaf2b48530efe1649bbb596a8126dd3c.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F2c39-p%2Fpicture%2F28344531%2F70f40241dea19a91af68c3f79ff3cdd9.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F898a-p%2Fpicture%2F28344532%2Fd928d6a934dea1219f1c350282300b3d.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Fde34-p%2Fpicture%2F28344533%2F5218891d239fac7350ef4229e460cbc5.jpg&w=3840&q=100"
        ]);
});

test("article/15201572", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/article/15201572",
        "mezamashi.media-article-15201572/",
        [
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff295-p%2Fpicture%2F28344707%2Fd0c7eb0a2eca73a96e23a1d8f192cd16.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F0064-p%2Fpicture%2F28344711%2Fb8587d307888b5f1a8eb023330f95fa0.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F7e38-p%2Fpicture%2F28344712%2Fd1305d9e7e71bc4471737fdbf9ace16b.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F0b26-p%2Fpicture%2F28344713%2Fe7aad8feb6dc4040b1dd28a57e2de345.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff180-p%2Fpicture%2F28344710%2F5652399ffc681e930b198ff05f86fddf.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F1d6c-p%2Fpicture%2F28344704%2Fe8621835594dfd1496933bfb85325d7f.jpg&w=3840&q=100"
        ]);
});

test("article/15201572/28344711", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://mezamashi.media/article/15201572/28344711",
        "mezamashi.media-article-15201572-28344711/",
        [
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F0064-p%2Fpicture%2F28344711%2Fb8587d307888b5f1a8eb023330f95fa0.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F7e38-p%2Fpicture%2F28344712%2Fd1305d9e7e71bc4471737fdbf9ace16b.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F0b26-p%2Fpicture%2F28344713%2Fe7aad8feb6dc4040b1dd28a57e2de345.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff4f7-p%2Fpicture%2F28344714%2Fe886e2cb1035f2c6f4c27b1b2c6ccc3d.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F1f5a-p%2Fpicture%2F28344708%2F91be66fa8b50e71be3e6d3dfd08d76e8.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F666b-p%2Fpicture%2F28344709%2F7819ca8c3b1573a0a2c671c8a19b9362.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff180-p%2Fpicture%2F28344710%2F5652399ffc681e930b198ff05f86fddf.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F535f-p%2Fpicture%2F28344706%2F92d5851c5cd8bcfcf25284dd4da5a65e.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Ff295-p%2Fpicture%2F28344707%2Fd0c7eb0a2eca73a96e23a1d8f192cd16.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Fcb4d-p%2Fpicture%2F28344705%2F7535a1eb16d759e520ae17e3606b1f02.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2Faf59-p%2Fpicture%2F28344702%2F4629920b0d54150441f3cd2a5ca5fd67.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F5049-p%2Fpicture%2F28344703%2F35b87cd08c5a02866a49b3ef401ee0e2.jpg&w=3840&q=100",
            "https://mezamashi.media/_next/image?url=https%3A%2F%2Fp.potaufeu.asahi.com%2F1d6c-p%2Fpicture%2F28344704%2Fe8621835594dfd1496933bfb85325d7f.jpg&w=3840&q=100"
        ]);
});
