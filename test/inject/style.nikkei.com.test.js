const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with fancy box", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://style.nikkei.com/article/DGXMZO63959430X10C20A9000001",
        "style.nikkei.com-article-DGXMZO63959430X10C20A9000001/",
        [
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6395960017092020000001-PB1-1.jpg%3Fs%3De51680eccb28c68a74e990c37186bf0d?ixlib=js-2.3.2&w=640&h=432&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=fab105a205498761acb7daad7d7d8ed3",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6395967017092020000001-PB1-1.jpg%3Fs%3D59263f38432fa26799f1984ebe76d051?ixlib=js-2.3.2&w=630&h=944&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=85c86e49e366f0603e0ffddef31be61f",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396073017092020000001-PB1-1.jpg%3Fs%3Da09e6c93d5158d39caeeac3ae33fcaa6?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=8609ac6762e1df7355a58ff710ac3c46",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396114017092020000001-PB1-1.jpg%3Fs%3D5c1ffca34b1510bf806765a61b94efce?ixlib=js-2.3.2&w=630&h=345&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=db66a1fa136e11446a069d6176477ffb",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396148017092020000001-PB1-1.jpg%3Fs%3D1f3152976e430b3cc5aac7f15574122e?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=8600938aedaf8bbfb9776229816499d2",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396151017092020000001-PB1-1.jpg%3Fs%3Dd07003779ff136b93d730c50f6eb9ade?ixlib=js-2.3.2&w=630&h=419&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=6f3bce0c0f504c27975ae82c49e07d64",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396154017092020000001-PB1-1.jpg%3Fs%3D4f561fc662d9fda7d233ddb53a312cc1?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=79646c36c3a2853b9dc46f552d170831",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO6396166017092020000001-PB1-1.jpg%3Fs%3D847b435738d116821c501341c2aca177?ixlib=js-2.3.2&w=630&h=418&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=5b97922dc25af636a4faf76a007fec3d"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        }
    );
});

test("Test news article without fancy box", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://style.nikkei.com/article/DGXMZO52618800W9A121C1000000",
        "style.nikkei.com-article-DGXMZO52618800W9A121C1000000/",
        [
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO5262207026112019000000-PB1-1.jpg%3Fs%3D5c1b93f7dc62f65bff59e203d25eddab?ixlib=js-2.3.2&w=640&h=432&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=604c54dfd68d8cb2a348f31b5b06fde0",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO5262215026112019000000-PN1-1.jpg%3Fs%3D39efc874486a8f1cbdb90f9bf3f4a88d?ixlib=js-2.3.2&w=640&h=426&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=bf3cd5b4e13373f5075a4ee170b823a6",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Farticle-image-ix.nikkei.com%2Fhttps%253A%252F%252Fimgix-proxy.n8s.jp%252FDSXZZO5262219026112019000000-PN1-1.jpg%3Fs%3D6e46c331269d4f58254e128118b4a2c6?ixlib=js-2.3.2&w=426&h=640&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=7375cd5312ed8631d5b6b99e43a539a8"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        }
    );
});

