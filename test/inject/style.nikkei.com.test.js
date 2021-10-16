const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with fancy box", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://style.nikkei.com/article/DGXMZO63959430X10C20A9000001",
        "style.nikkei.com-article-DGXMZO63959430X10C20A9000001/",
        [
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6395960017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=640&h=432&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=5e9d4712da9087cf79a01989c16e2a2a",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6395967017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=944&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=c096272b3d01be8da9dce21ab484a3cb",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396073017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=7a05570a1e9001756e73b1ed0578ffb9",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396114017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=345&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=3e0c07c411aab55204459410ac1022d1",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396148017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=261ba7d72f4d130be9bee9565bd1b498",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396151017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=419&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=9f6a0f80df27e90acda68b2319553894",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396154017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=945&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=050689c586d2a291f0f3b177339af2e7",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO6396166017092020000001-PB1-1.jpg?ixlib=js-2.3.2&w=630&h=418&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=af0fc3377898e339cea200ad1d9755cb"
        ]
    );
});

test("Test news article without fancy box", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://style.nikkei.com/article/DGXMZO52618800W9A121C1000000",
        "style.nikkei.com-article-DGXMZO52618800W9A121C1000000/",
        [
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO5262207026112019000000-PB1-1.jpg?ixlib=js-2.3.2&w=640&h=432&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=e7e6a571cedec044dffceda6a558b932",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO5262215026112019000000-PN1-1.jpg?ixlib=js-2.3.2&w=640&h=426&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=78f97b7aa9b2325b2d6ed8a48018def6",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZZO5262219026112019000000-PN1-1.jpg?ixlib=js-2.3.2&w=426&h=640&crop=focalpoint&fp-x=0.5&fp-y=0.5&fit=crop&auto=format%2Ccompress&ch=Width%2CDPR&s=0ae1bd0f28a8381b2ff89830be94aa27"
        ]
    );
});

