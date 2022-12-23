const {testDirectDownload, getBrowserFactory} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/-/84180", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/84180",
        "exweb.jp-articles---84180/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/b/8/120w/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/b/8/-/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/5/1/120w/img_51e487e133e221871446081f5543906678050.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/5/1/-/img_51e487e133e221871446081f5543906678050.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/f/120w/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/f/-/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/c/6/120w/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/c/6/-/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg"
            }
        ]);
});

test("Test image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/photo/84180",
        "exweb.jp-articles-photo-84180/",
        [
            "https://exweb.ismcdn.jp/mwimgs/c/6/-/img_c64475feb6397ce4c1ea5ac21b1d2105129570.jpg",
            "https://exweb.ismcdn.jp/mwimgs/b/8/-/img_b89dbf82ea86c0f6f645ddf46d5e605999978.jpg",
            "https://exweb.ismcdn.jp/mwimgs/5/1/-/img_51e487e133e221871446081f5543906678050.jpg",
            "https://exweb.ismcdn.jp/mwimgs/a/f/-/img_aff72bf7df790024253fd9450fd5cc7f114836.jpg"
        ]
    );
});

test("Test single left image page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/82728",
        "exweb.jp-articles---82728/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/8/0/704w/img_80f4b1836c157a1b65d227845ea32033780951.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/8/0/-/img_80f4b1836c157a1b65d227845ea32033780951.jpg"
            }
        ]
    );
});

test("Test list magzine page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/list/magazine/5ffe66617765616296060000",
        "exweb.jp-list-magazine-5ffe66617765616296060000/",
        [
            {
                "retries": [
                    "https://exweb.jp/mwimgs/c/3/1200wm/img_c354ae62a21ee6f67d6821d0b2ee8947603333.jpg"
                ],
                "url": "https://exweb.jp/mwimgs/c/3/-/img_c354ae62a21ee6f67d6821d0b2ee8947603333.jpg"
            }
        ]
    );
});

test("articles/-/91244", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/91244",
        "exweb.jp-articles---91244/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/3/704w/img_a3799da3d20b16e7e15d56d51addc397729736.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/3/-/img_a3799da3d20b16e7e15d56d51addc397729736.jpg"
            }
        ]);
});

test("articles/-/90733", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://exweb.jp/articles/-/90733",
        "exweb.jp-articles---90733/",
        [
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/2/e/160w/img_2e94f605e009c643e2460acc4868a6375654771.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/2/e/-/img_2e94f605e009c643e2460acc4868a6375654771.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/b/8/160w/img_b835cf3bebad9016c7126de4bb1cb7e57448452.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/b/8/-/img_b835cf3bebad9016c7126de4bb1cb7e57448452.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/8/d/160w/img_8dd83752841a2f36bf6c411d9d4a8f336125682.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/8/d/-/img_8dd83752841a2f36bf6c411d9d4a8f336125682.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/f/6/160w/img_f67a7180717208411e89fc81ca05e97e6739628.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/f/6/-/img_f67a7180717208411e89fc81ca05e97e6739628.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/4/160w/img_34ee3f9c9bf502326926a9475f7a64ee7271510.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/4/-/img_34ee3f9c9bf502326926a9475f7a64ee7271510.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/8/160w/img_38e99dd4a4100bd99fe8568955301c167216753.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/8/-/img_38e99dd4a4100bd99fe8568955301c167216753.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/e/1/160w/img_e181a95d0a02a028ebffe309b57bb0eb14133071.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/e/1/-/img_e181a95d0a02a028ebffe309b57bb0eb14133071.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/1/0/160w/img_10542f016d8710497eeaba0d34c4160f9674927.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/1/0/-/img_10542f016d8710497eeaba0d34c4160f9674927.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/5/a/160w/img_5a87655c7b6ccea53275cdb7df08cfe69055188.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/5/a/-/img_5a87655c7b6ccea53275cdb7df08cfe69055188.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/a/160w/img_3a3885d1d6c0707e9fad9236308a4bc912013996.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/a/-/img_3a3885d1d6c0707e9fad9236308a4bc912013996.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/d/3/160w/img_d3c29b4a2e3dada7cad2a4320b8f3fa87699230.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/d/3/-/img_d3c29b4a2e3dada7cad2a4320b8f3fa87699230.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/f/160w/img_af1f94e48b355142c850fa0543fe70bb9511844.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/f/-/img_af1f94e48b355142c850fa0543fe70bb9511844.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/1/8/160w/img_1833070210a5c7ca573963b6f715ffad9617194.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/1/8/-/img_1833070210a5c7ca573963b6f715ffad9617194.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/6/c/160w/img_6c122cb1f6ebe3290c18290571b3283f8232581.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/6/c/-/img_6c122cb1f6ebe3290c18290571b3283f8232581.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/f/2/160w/img_f2d4182b54c3af80209cd683172d2b468008942.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/f/2/-/img_f2d4182b54c3af80209cd683172d2b468008942.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/c/160w/img_3c69c5b0fdb6315b46114673957ac94c9302646.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/c/-/img_3c69c5b0fdb6315b46114673957ac94c9302646.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/4/9/160w/img_4983a5302bc06932cd48f5b02b8ac7fa6911905.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/4/9/-/img_4983a5302bc06932cd48f5b02b8ac7fa6911905.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/8/160w/img_a8cc448efb2ff4fbda9765b2462529cc8167363.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/8/-/img_a8cc448efb2ff4fbda9765b2462529cc8167363.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/2/1/160w/img_21633a989db7c16a81f6ed141db846466858962.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/2/1/-/img_21633a989db7c16a81f6ed141db846466858962.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/9/a/160w/img_9a2a1d1e4b3f3974adb278ee917967a29565460.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/9/a/-/img_9a2a1d1e4b3f3974adb278ee917967a29565460.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/9/0/160w/img_9069488ac4f70cc3144d7bef7f9ac3745509927.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/9/0/-/img_9069488ac4f70cc3144d7bef7f9ac3745509927.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/4/a/160w/img_4a81dcd093a63d39c4e53e7a149f8f006640438.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/4/a/-/img_4a81dcd093a63d39c4e53e7a149f8f006640438.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/2/3/160w/img_2349e663b4b2d0e69068525a8886a33a7798782.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/2/3/-/img_2349e663b4b2d0e69068525a8886a33a7798782.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/d/160w/img_3dad4ce997350e588963013867cbe0266974953.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/d/-/img_3dad4ce997350e588963013867cbe0266974953.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/7/a/160w/img_7a0fc1100c128e4eda157802a7c57eac7049321.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/7/a/-/img_7a0fc1100c128e4eda157802a7c57eac7049321.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/3/8/160w/img_3829570abe7d989583d9f1ff66c6c0026499167.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/3/8/-/img_3829570abe7d989583d9f1ff66c6c0026499167.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/6/6/160w/img_660f6826bb8813095cf8e5dfe83fe73e7345182.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/6/6/-/img_660f6826bb8813095cf8e5dfe83fe73e7345182.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/7/a/160w/img_7afc013d4a32131f89b5aae7de0d2ad88004397.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/7/a/-/img_7afc013d4a32131f89b5aae7de0d2ad88004397.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/c/d/160w/img_cda57c6e36972040e9327f93fc6476976668977.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/c/d/-/img_cda57c6e36972040e9327f93fc6476976668977.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/e/a/160w/img_ea95678ae483129b92c81b5a07c292477039041.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/e/a/-/img_ea95678ae483129b92c81b5a07c292477039041.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/f/1/160w/img_f1ed53f86c883521927c6044f7a828006651017.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/f/1/-/img_f1ed53f86c883521927c6044f7a828006651017.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/f/4/160w/img_f45a683000a91e3435f5fd71514215df6880247.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/f/4/-/img_f45a683000a91e3435f5fd71514215df6880247.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/1/6/160w/img_16ced18504d31e67401946a454190b3a7951191.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/1/6/-/img_16ced18504d31e67401946a454190b3a7951191.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/b/f/160w/img_bfbce82345834a02d9f983321ecbd8bf9804471.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/b/f/-/img_bfbce82345834a02d9f983321ecbd8bf9804471.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/d/7/160w/img_d723e8ce2e61178d0b3c18db98380c9a8208961.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/d/7/-/img_d723e8ce2e61178d0b3c18db98380c9a8208961.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/e/3/160w/img_e317270764e83a78685f29b0160c03be7150887.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/e/3/-/img_e317270764e83a78685f29b0160c03be7150887.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/1/a/160w/img_1abd67b60e2fd8c7f8e39b9fb4f4d8fc7312882.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/1/a/-/img_1abd67b60e2fd8c7f8e39b9fb4f4d8fc7312882.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/2/b/160w/img_2b7bd8a622f5065f9fd7a14e0d9dc4be10409509.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/2/b/-/img_2b7bd8a622f5065f9fd7a14e0d9dc4be10409509.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/a/2/160w/img_a24b24a92023bed808a2f1094bb8dd388259326.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/a/2/-/img_a24b24a92023bed808a2f1094bb8dd388259326.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/1/9/160w/img_19c1d4bd2c4f51878689af1d3744f6ef6048330.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/1/9/-/img_19c1d4bd2c4f51878689af1d3744f6ef6048330.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/4/1/160w/img_41dc48f3c2b6d9ff95d813a4717813d56741635.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/4/1/-/img_41dc48f3c2b6d9ff95d813a4717813d56741635.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/4/d/160w/img_4d1edba6637c75f561eb46dfe831d5bb8025010.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/4/d/-/img_4d1edba6637c75f561eb46dfe831d5bb8025010.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/e/8/160w/img_e85e612ce8e323c120f815081783e7ef8907068.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/e/8/-/img_e85e612ce8e323c120f815081783e7ef8907068.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/d/d/160w/img_dd3ddff6e62ad508750d1ee653ff743210423511.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/d/d/-/img_dd3ddff6e62ad508750d1ee653ff743210423511.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/d/8/160w/img_d826aa30046f6d28ebac62af06a03cc05728848.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/d/8/-/img_d826aa30046f6d28ebac62af06a03cc05728848.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/5/7/160w/img_5797589a65f67c3978fafd39692373f96785658.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/5/7/-/img_5797589a65f67c3978fafd39692373f96785658.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/9/7/160w/img_97d90c38c0a0ea485b84e4860e7d8b529375164.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/9/7/-/img_97d90c38c0a0ea485b84e4860e7d8b529375164.jpg"
            },
            {
                "retries": [
                    "https://exweb.ismcdn.jp/mwimgs/d/8/160w/img_d88623df2cce3bd1ca63b13e89c460726401956.jpg"
                ],
                "url": "https://exweb.ismcdn.jp/mwimgs/d/8/-/img_d88623df2cce3bd1ca63b13e89c460726401956.jpg"
            }
        ]);
});
