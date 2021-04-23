const {testDirectDownload, getBrowserFactory} = require("./testbase");
let browserFactory = getBrowserFactory(beforeAll, afterAll)

test("Test news page", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://encount.press/archives/162329/2/",
        "encount.press-archives-162329-2-/",
        [
            "https://encount.press/wp-content/uploads/2021/04/18125021/9e8fd5bb142a7bbe910c965f2d338bb2.jpg",
            "https://encount.press/wp-content/uploads/2021/04/18125022/43b184349d2637b006e33d731ad28667.jpg"
        ]
    );
});

test("Test slider images", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://encount.press/archives/163273/3/",
        "encount.press-archives-163273-3-/",
        [
            "https://encount.press/wp-content/uploads/2021/04/21163922/e3f25ecfa21df004077667725f2aa16d.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163926/84ea361d709e293e695d99ddbde50009.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163928/3b0f974aaf667f4bc3c9add23e47af9f.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163929/d53f54bb3960c79c10cd47d697b83b41.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163931/fe6444be5ea75621d12df008752c2560.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163932/3f95ea672d685d93f0d529e4dd70d766.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163933/176ec5730188d8f295e6b65c838ed6d6.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163935/73b66b45289b77a45ddb5cb6a6852c0c.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163945/9278c3e3a00d99ab6e400a5b5c741857.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163946/85595c3ac1716fc5a5853e89a7ac007c.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163927/4303ad1c014e28749ee80e7232804ac4.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163953/c2a90c91dac4b168ade4b371baa74fcf.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163948/ac87d61777afee132bd41d84ba7ce6e4.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163949/4fe51728cf116b318b0830e1d69fc25d.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163950/3e78e9213bad1014b7c9030748523e97.jpg",
            "https://encount.press/wp-content/uploads/2021/04/21163952/a8e5badfab76c7cd5c71ae36dc4c1a93.jpg"
        ]
    );
});
