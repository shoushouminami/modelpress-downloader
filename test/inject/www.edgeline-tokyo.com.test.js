const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test entertainment news article page", async () => {
        await testDirectDownload(
            getBrowser(),
            "http://www.edgeline-tokyo.com/entertainment/53451",
            "www.edgeline-tokyo.com-entertainment-53451/",
            [
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi001.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi001.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi002.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi002.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi004.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi004.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi008.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi008.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi005-200x300.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi005.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi006-200x300.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi006.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi007-200x300.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi007.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi012-200x300.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi012.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi003-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi003.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi010-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi010.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi013-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi013.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi014-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi014.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi015-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi015.jpg"
                },
                {
                    "retries": [
                        "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi011-300x200.jpg"
                    ],
                    "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/09/20200901birthdayofi011.jpg"
                }
            ]);
});

test("Test entertainment news article page with attachments", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.edgeline-tokyo.com/entertainment/15905",
        "www.edgeline-tokyo.com-entertainment-15905/",
        [
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara11.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara11.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara10.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara10.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara06.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara06.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara12.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara12.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara07.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara07.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara09.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara09.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara05.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara05.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara04.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara04.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara03.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara03.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara02.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara02.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara01.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2018/04/20180430iishihara01.jpg"
            }
        ]);
});

test("Test food news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.edgeline-tokyo.com/food/47605",
        "www.edgeline-tokyo.com-food-47605/",
        [
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi001.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi001.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi002-285x300.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi002.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi005-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi005.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi006-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi006.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi007-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi007.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi008-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi008.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi009-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi009.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi010-300x169.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi010.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi011-300x104.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi011.jpg"
            },
            {
                "retries": [
                    "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi012-300x60.jpg"
                ],
                "url": "https://www.edgeline-tokyo.com/wp-content/uploads/2020/05/20200501nogizakaofi012.jpg"
            }
        ]);
});
