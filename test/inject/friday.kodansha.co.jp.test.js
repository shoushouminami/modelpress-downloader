const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test article images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.kodansha.co.jp/article/190349",
        "friday.kodansha.co.jp-article-190349/",
        [
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/6448905e3399ab1d10067c8b0376a7a3.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/6448905e3399ab1d10067c8b0376a7a3.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/5cff6c30ddcea3af6c23f0bc1881b881.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/5cff6c30ddcea3af6c23f0bc1881b881.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/deca694e42348797dcc876235830fd68.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/deca694e42348797dcc876235830fd68.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/cadbae7b57b0783c5768b9a1b56bb2a6.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/cadbae7b57b0783c5768b9a1b56bb2a6.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/f4945e74f818251ed52070fb6023ecf8.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/f4945e74f818251ed52070fb6023ecf8.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/bfc9c0c79ba15fc513aa5d50f3bb889f.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/bfc9c0c79ba15fc513aa5d50f3bb889f.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/8b031ba6998ad31d6e53a9db00a4fadd.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/8b031ba6998ad31d6e53a9db00a4fadd.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/8b4df83a318e2d1a2e63d0660fe603f1.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/8b4df83a318e2d1a2e63d0660fe603f1.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/3f51193b068d624e69737c3719b7200d.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/3f51193b068d624e69737c3719b7200d.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2021/06/b157313e42be315b59e706a86e34450e.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2021/06/b157313e42be315b59e706a86e34450e.jpg"
            }
        ]
    );
});

test("Test photo page images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.kodansha.co.jp/article/227839/photo/450f153f",
        "friday.kodansha.co.jp-article-227839-photo-450f153f/",
        [
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image,w_664/wpmedia/2022/02/NKKZ7470_r.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2022/02/NKKZ7470_r.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/wpmedia/2022/02/NKKZ5838.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2022/02/NKKZ5838.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/wpmedia/2022/02/NKKZ6030.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2022/02/NKKZ6030.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/wpmedia/2022/02/NKKZ6961.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2022/02/NKKZ6961.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/wpmedia/2022/02/NKKZ7640.jpg"
                ],
                "url": "https://res.cloudinary.com/fridaydigital/image/private/c_scale,dpr_2,f_auto,t_article_image/wpmedia/2022/02/NKKZ7640.jpg"
            }
        ]
    );
});

