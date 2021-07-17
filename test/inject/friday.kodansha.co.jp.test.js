const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test article images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.kodansha.co.jp/article/190349",
        "friday.kodansha.co.jp-article-190349/",
        [
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--Ww2Rb_nB--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770351/_DSF0486_vcieu1.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--6RGRomou--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770349/01-323_resize2_1_cwqnme.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--3wuIs_6x--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/0304_02-0068_tff1ee.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--QiMinETL--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770352/06-0932_B_lrnois.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--U1JFixJF--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/021_czfbys.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--2yEKVSeD--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770348/_DSF0474_qorrbd.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--s0RwMhDw--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770357/046_omugyq.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--YORn_fH9--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770357/024_mmfeoq.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--jR519LAQ--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770352/003_pxpprq.jpg"
            },
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--OG0mrbtv--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/052_fmeblz.jpg"
            }
        ]
    );
});

test("Test photo page images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.kodansha.co.jp/article/190349/photo/565aab5f",
        "friday.kodansha.co.jp-article-190349-photo-565aab5f/",
        [
            {
                "retries": [],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--Ww2Rb_nB--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770351/_DSF0486_vcieu1.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--U1JFixJF--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770354/021_czfbys.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--U1JFixJF--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/021_czfbys.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--2yEKVSeD--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770348/_DSF0474_qorrbd.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--2yEKVSeD--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770348/_DSF0474_qorrbd.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--s0RwMhDw--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770357/046_omugyq.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--s0RwMhDw--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770357/046_omugyq.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--YORn_fH9--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770357/024_mmfeoq.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--YORn_fH9--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770357/024_mmfeoq.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--jR519LAQ--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770352/003_pxpprq.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--jR519LAQ--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770352/003_pxpprq.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--OG0mrbtv--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770354/052_fmeblz.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--OG0mrbtv--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/052_fmeblz.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--6RGRomou--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770349/01-323_resize2_1_cwqnme.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--6RGRomou--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770349/01-323_resize2_1_cwqnme.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--3wuIs_6x--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770354/0304_02-0068_tff1ee.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--3wuIs_6x--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770354/0304_02-0068_tff1ee.jpg"
            },
            {
                "retries": [
                    "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--QiMinETL--/c_scale,dpr_2.0,f_auto,t_thumb_square,w_72/v1624770352/06-0932_B_lrnois.jpg"
                ],
                "url": "https://res.cloudinary.com/gsjebzejhjubm/image/private/s--QiMinETL--/c_scale,dpr_2,f_auto,t_article_image,w_664/v1624770352/06-0932_B_lrnois.jpg"
            }
        ]
    );
});

