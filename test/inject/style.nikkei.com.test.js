const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article with fancy box", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://style.nikkei.com/article/DGXMZO63959430X10C20A9000001",
        "style.nikkei.com-article-DGXMZO63959430X10C20A9000001/",
        [
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6395960017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=433&ixlib=php-1.2.1&w=650&s=aa3edb2397e942af79d4330fddd3efa0",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6395967017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=1acb0cd44a4051d9400df9bc22b9bc68",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396073017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=55345bc9aff8f464a0726eea6277a46e",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396114017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=800c9c8139fe0edddf019e751085fbe2",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396148017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=f5fcc01d0b5bc2dba28bec6d53af0645",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396151017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=64fe13b89ceccd64281d40ccb6ac775d",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396154017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=5b32ed60fc32310c5a1b72ecf3f936ae",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20201002%2F96958A9F889DE4E1EBE7EBE6E1E2E3E5E2EBE0E2E0E2E2E2E2E2E2E3-DSXZZO6396166017092020000001-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=630&s=406d98989419c40c71458143e0d6f1e9"
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
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20191213%2F96958A9F889DE7E0E4E3EAEAE2E2E0E4E3E3E0E2E3EBE2E2E2E2E2E2-DSXZZO5262207026112019000000-PB1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=433&ixlib=php-1.2.1&w=650&s=77d11ceaf79492defdfb8cc9c75874ed",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20191213%2F96958A9F889DE7E0E4E3EAEAE2E2E0E4E3E3E0E2E3EBE2E2E2E2E2E2-DSXZZO5262215026112019000000-PN1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=640&s=148a5c4f35ebae65e6f442bae4177d0a",
            "https://article-image-ix.nikkei.com/https%3A%2F%2Fimgix-proxy.n8s.jp%2Fcontent%2Fpic%2F20191213%2F96958A9F889DE7E0E4E3EAEAE2E2E0E4E3E3E0E2E3EBE2E2E2E2E2E2-DSXZZO5262219026112019000000-PN1-1.jpg?auto=format%2Ccompress&ch=Width%2CDPR&ixlib=php-1.2.1&w=426&s=0b668330c1a1d40b0df5c790ac74de18"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 50);
            }
        }
    );
});

