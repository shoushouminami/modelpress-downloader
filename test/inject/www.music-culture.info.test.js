const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser =  getBrowserFactory(beforeAll, afterAll);

describe("test www.music-culture.info", () => {
    test("7989/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.music-culture.info/7989/",
            "www.music-culture.info-7989-/",
            [
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=845x10000:format=jpg/path/s719b6af472505b2d/image/i1dfd2459ea6997a2/version/1760787959/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i1dfd2459ea6997a2/version/1760787959/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=845x10000:format=jpg/path/s719b6af472505b2d/image/id7e62220597c47ee/version/1760787977/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/id7e62220597c47ee/version/1760787977/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=845x10000:format=jpg/path/s719b6af472505b2d/image/i57058e27811a4796/version/1760787976/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i57058e27811a4796/version/1760787976/image.jpg"
                }
            ]);
    });

    test("8212/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.music-culture.info/8212/",
            "www.music-culture.info-8212-/",
            [
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=985x10000:format=jpg/path/s719b6af472505b2d/image/id0525a649509fb87/version/1764983174/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/id0525a649509fb87/version/1764983174/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s719b6af472505b2d/image/i7acc594ed865b6ea/version/1764983275/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i7acc594ed865b6ea/version/1764983275/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s719b6af472505b2d/image/i3037c6380181a8a7/version/1764983275/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i3037c6380181a8a7/version/1764983275/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s719b6af472505b2d/image/i510460cd6dc58917/version/1764983275/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i510460cd6dc58917/version/1764983275/image.jpg"
                },
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s719b6af472505b2d/image/i2f6a081afb0fc6aa/version/1764983275/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i2f6a081afb0fc6aa/version/1764983275/image.jpg"
                }
            ]);
    });

    test("8334/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.music-culture.info/8334/",
            "www.music-culture.info-8334-/",
            [
                "https://image.jimcdn.com/app/cms/image/transf/none/path/s719b6af472505b2d/image/i4a8eb012cd894997/version/1765275623/image.jpg",
                "https://image.jimcdn.com/app/cms/image/transf/none/path/s719b6af472505b2d/image/i921a552430596832/version/1765275653/image.jpg",
                {
                    "thumbnail": "https://image.jimcdn.com/app/cms/image/transf/dimension=845x10000:format=jpg/path/s719b6af472505b2d/image/i623a7bdaefb1d3a5/version/1765275843/image.jpg",
                    "url": "https://image.jimcdn.com/app/cms/image/transf/format=jpg/path/s719b6af472505b2d/image/i623a7bdaefb1d3a5/version/1765275843/image.jpg"
                }
            ]);
    });
})
