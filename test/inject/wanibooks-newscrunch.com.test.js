const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/-/3403", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wanibooks-newscrunch.com/articles/-/3403",
        "wanibooks-newscrunch.com-articles---3403/",
        [
            "https://wanibooks.ismcdn.jp/mwimgs/6/4/-/img_64e2f8a03472d6d83657fd9900a814d627288433.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/6/1/-/img_613d63042823f8b7f50d14640d73a2cd254220.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/0/8/-/img_082a94fa86d14b0d3b4b454f4294268013525518.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/8/b/-/img_8b267191cbda4798d762311b278e2a5113809002.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/3/9/-/img_39b07289f5c9c431d6a5bf6d2967b93214700115.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/6/8/-/img_685686cd471a889d8e71da56a9234e0a13612335.jpg"
        ]);
});

test("articles/-/3403?page=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wanibooks-newscrunch.com/articles/-/3403?page=2",
        "wanibooks-newscrunch.com-articles---3403/",
        [
            "https://wanibooks.ismcdn.jp/mwimgs/6/4/-/img_64e2f8a03472d6d83657fd9900a814d627288433.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/1/b/-/img_1b0329346a9dc2d92a30fdde6d857b6614198385.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/c/7/-/img_c7edc8695c83bb33e15c2d7fed9174ec13390260.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/6/d/-/img_6d5e584b36f064dbf9c98fc704295cdd7632243.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/4/8/-/img_4809052e5dcaae78479d94120f2f091332286482.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/c/c/-/img_ccdd7a14e5e7306983958837a080d99b192581.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/e/b/-/img_eb4e64965d1f84007f33a0af0b91c6d5179707.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/9/b/-/img_9bbd05bc4e2c717c18203d1276cca117205427.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/0/c/-/img_0c38bfce036aac5fb3bab801a28c568d185803.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/2/6/-/img_268e78455443bb95bf6d5dcf7fa214a8206539.jpg"
        ]);
});

test("articles/viewer/3433", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wanibooks-newscrunch.com/articles/viewer/3433",
        "wanibooks-newscrunch.com-articles-viewer-3433/",
        [
            "https://wanibooks.ismcdn.jp/mwimgs/c/e/-/img_ce96944979e1922ebabcffa763f6ff82648822.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/9/0/-/img_9086dce6096be2b20ed762c7e1ed9280152095.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/3/f/-/img_3f04d7459d6fe29a0c0b096b70dd801a93845.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/e/4/-/img_e45bc35de4c965c5497f355c494b3548411696.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/8/3/-/img_83c203bfdf303464d21848f9c9a5972d237608.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/d/5/-/img_d55df9a682af8cf6e485e6cd6da36fe2263752.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/9/7/-/img_97038855ee0848cce69daece948907ad340468.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/a/2/-/img_a208241be8c90752bb1b1b94a35a9300607897.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/1/d/-/img_1de3278f7b432e0fecd474a004f3a6ad77708.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/7/1/-/img_71aa7c6f3925d8700306869107c6cbe1351951.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/0/d/-/img_0d1f2964c2e338b9831c93d5f03b37a2297386.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/9/5/-/img_9534a7887f0ee251fe0d70147dd014ac222534.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/3/7/-/img_3709a476d71c75e7a7d7006d48f7a5d5325847.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/4/9/-/img_49dec67b1244a655b5a6c6b383ef6174386648.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/d/4/-/img_d4c33a743ded6a267e85e204a2fe8095418801.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/6/8/-/img_680a1e5b9a2d5f84c096cdef94c720e1355942.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/9/0/-/img_9049e1b344d7c3d5299e981da70f7224533255.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/b/f/-/img_bfa3074b945092ac02ab02f0c6dc3d3d844286.jpg"
        ]);
});

test("articles/-/3451", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://wanibooks-newscrunch.com/articles/-/3451",
        "wanibooks-newscrunch.com-articles---3451/",
        [
            "https://wanibooks.ismcdn.jp/mwimgs/9/1/-/img_91fc57a053c36346c20b9fce8aec0be0926032.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/7/6/-/img_7600a1f78c776d3c566c2615507d991b1226513.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/7/1/-/img_71589eeb04894899adf8a9ad7fa5b758314013.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/2/e/-/img_2e8e86654dbd46abd6abfe239b6a748e460189.jpg",
            "https://wanibooks.ismcdn.jp/mwimgs/7/2/-/img_72d29ab435e749c20eb3ad4a14244995540790.jpg"
        ]);
});
