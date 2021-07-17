const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://8760.news-postseven.com/57687",
        "8760.news-postseven.com-57687/",
        [
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye1.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye4.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye2.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye5.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/08/SeoJihye3.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1000);
                await pageutils.scrollToTop(page);
                await pageutils.wait(1000);
                await pageutils.scrollToTop(page);
                await pageutils.scrollTo(page, 60);
            }
        });
});

test("Test workout article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://8760.news-postseven.com/59356",
        "8760.news-postseven.com-59356/",
        [
            "https://8760.news-postseven.com/wp-content/uploads/2020/05/naoko_Img107869.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/10/naoko_Img107052.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/10/naoko_Img107055.jpg",
            "https://8760.news-postseven.com/wp-content/uploads/2020/10/naoko_Img107060.jpg",
            "https://m.media-amazon.com/images/I/517xcxouNGL.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1000);
                await pageutils.scrollTo(page, 80, 600);
            }
        });
});
