const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://diet.news-postseven.com/57687",
        "diet.news-postseven.com-57687/",
        [
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye1.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye4.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye2.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye5.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/SeoJihye3.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1000);
                await pageutils.scrollTo(page, 60);
            }
        });
});

test("Test workout article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://diet.news-postseven.com/57124",
        "diet.news-postseven.com-57124/",
        [
            "https://diet.news-postseven.com/wp-content/uploads/2020/08/konami0623KRO_0062.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conami.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conami2.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0716.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiAMI_111.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0738.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiAMI_144.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/konamiAMI_115.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0646.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0658.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0669.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiIMG_0707.jpg",
            "https://diet.news-postseven.com/wp-content/uploads/2020/09/conamiAMI_177.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(1000);
                await pageutils.scrollTo(page, 80, 600);
            }
        });
});
