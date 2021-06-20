const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test thumbnail page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://moment.nikkan-gendai.com/thumbnail?post=38829",
        "moment.nikkan-gendai.com-thumbnail-post-38829/",
        [
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_01-1-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/01-1-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_02-1.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/02-1.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_03-20210120182728A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/03-20210120182728A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_04-20210120184520A0002.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/04-20210120184520A0002.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_05-20210129192412A0002.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/05-20210129192412A0002.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_06-20210201160439N0005-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/06-20210201160439N0005-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_08-20210209201006A0002-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/08-20210209201006A0002-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_09-20210225151617A0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/09-20210225151617A0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_10-20210225161535A0004-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/10-20210225161535A0004-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_11-20210303221012H0006.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/11-20210303221012H0006.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_12-20210303221034H0013.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/12-20210303221034H0013.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_13-20210315183827F0005.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/13-20210315183827F0005.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_14-20210311140238A0005.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/14-20210311140238A0005.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_15-20210312173541A0004-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/15-20210312173541A0004-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_16-20210312174055A0002-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/16-20210312174055A0002-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_17-20210330112449F0006-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/17-20210330112449F0006-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_18-20210413092603A0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/18-20210413092603A0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_19-20210415210441A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/19-20210415210441A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_21-20210518162720A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/21-20210518162720A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_22-20210518111750A0003-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/22-20210518111750A0003-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_23-20210525105646A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/23-20210525105646A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_24-20210525105742A0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/24-20210525105742A0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_25-0-20210505170124F0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/25-0-20210505170124F0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_25-1-20210521005926A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/25-1-20210521005926A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_25-20210603195118U0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/25-20210603195118U0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_26-20210608150735U0004.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/26-20210608150735U0004.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_26-1-2021-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/26-1-2021-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_29-20210608202413A0004-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/29-20210608202413A0004-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_30-20210609182951A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/30-20210609182951A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_31-20210609182913A0001-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/31-20210609182913A0001-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_32-scaled.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/32-scaled.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_33-20210615142717A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/33-20210615142717A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_34-20210615173215A0001.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/34-20210615173215A0001.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_35-20210616144100U0004.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/35-20210616144100U0004.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-38829_360_36-20210616144055U0003.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/36-20210616144055U0003.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/06/000.jpg"
            }
        ]
    );
});

test("Test thumbnail page 2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://moment.nikkan-gendai.com/thumbnail?post=33034",
        "moment.nikkan-gendai.com-thumbnail-post-33034/",
        [
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0319.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0319.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0322.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0322.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0335.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0335.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0354.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0354.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0369.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0369.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0383.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0383.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0425.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0425.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0436-2.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0436-2.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0452-2.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0452-2.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0482-2.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0482-2.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0502.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0502.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0504.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0504.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-33034_360_HDT_0280.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/HDT_0280.jpg"
            },
            "https://moment.nikkan-gendai.com/wp-content/uploads/2020/12/top2222-2.jpg"
        ]
    );
});

test("Test thumbnail page 3", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://moment.nikkan-gendai.com/thumbnail?post=37914",
        "moment.nikkan-gendai.com-thumbnail-post-37914/",
        [
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.1.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.1.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.2.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.2.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.3.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.3.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.4.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.4.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.5.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.5.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_37_no.6.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.6.jpg"
            },
            {
                "retries": [
                    "https://moment.nikkan-gendai.com/wp-content/themes/moment/img/thumbnail/thumbnail-37914_360_profile.jpg"
                ],
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/profile.jpg"
            },
            "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/e37aca7a8ca22654008ac92f681f7f4d.jpg"
        ]
    );
});

test("Test article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://moment.nikkan-gendai.com/artists/37914#1",
        "moment.nikkan-gendai.com-artists-37914-post-null/",
        [
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.1.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.2.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.3.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.4.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.5.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/37_no.6.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/01/profile.jpg"
            },
            "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/e37aca7a8ca22654008ac92f681f7f4d.jpg"
        ]
    );
});


test("Test gallery page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://moment.nikkan-gendai.com/gallery/38028",
        "moment.nikkan-gendai.com-gallery-38028/",
        [
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/top-1.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/a2.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/a5-1.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/a8.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/z3.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/a12-1.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/z10.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/z23.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/nsja78qwsasa.jpg"
            },
            {
                "url": "https://moment.nikkan-gendai.com/wp-content/uploads/2021/05/vsa421wq.jpg"
            }
        ]
    );
});

