const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");

const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test feature page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hustlepress.co.jp/equallove184_feuture/",
        "hustlepress.co.jp-equallove184_feuture-/",
        [
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_main.png",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img02.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img03.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img04.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img05.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img06.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/0f4cdd180a7858609cd3b6442bfd118f/equallove184_feuture_img01.jpg"
        ]
    );
});

test("Test interview page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://hustlepress.co.jp/mori_20201210_interview/",
        "hustlepress.co.jp-mori_20201210_interview-/",
        [
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_main.png",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_02.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_03.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_04.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_05.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_06.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_07.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_08.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_09.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_10.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_11.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_12.jpg",
            "https://hustlepress.co.jp/wp/wp-content/uploads/d247128fe77e18dbba29de7da76fad35/mori_20201210_interview_01.jpg"
        ]
    );
});
