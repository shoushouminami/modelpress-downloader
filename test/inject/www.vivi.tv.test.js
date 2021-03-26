const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const pageutils = require("../pageutils");

test.skip("Test fashion page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.vivi.tv/post188506/",
        "www.vivi.tv-post188506-/",
        [
            "https://www.vivi.tv/wp-content/uploads/2021/03/16184516/emma4_top.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04112520/3-2-scaled.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04112224/13-3-scaled.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/08101816/110.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/08101819/31.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04153009/emma_2.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04153006/emma_1.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04120632/3-3-scaled.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/04120213/13-4-scaled.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 75);
            }
        }
    );
});

test.skip("Test beauty page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.vivi.tv/post189427/",
        "www.vivi.tv-post189427-/",
        [
            "https://www.vivi.tv/wp-content/uploads/2021/03/19191253/Top60.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/22110723/yase-71.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/19184230/yase-1.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/22110720/yase-21.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/22110721/yase-31.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/19184234/yase-4.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/19184235/yase-5.jpg",
            "https://www.vivi.tv/wp-content/uploads/2021/03/19184236/yase-6.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 75);
            }
        }
    );
});
