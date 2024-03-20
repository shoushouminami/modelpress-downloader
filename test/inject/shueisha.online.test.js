const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("articles/-/102517#goog_rewarded", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/-/102517#goog_rewarded",
        "shueisha.online-articles---102517/",
        [
            "https://shuon.ismcdn.jp/mwimgs/2/c/-/img_2c8c27564a6d038ab3c0e3f42acb9d8f944169.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/6/-/img_e61f4d45ad1be2791574dfaf269e53e6722875.jpg",
            "https://shuon.ismcdn.jp/mwimgs/8/c/-/img_8cd95bcb308db88a84c8fae2112cfc2a681588.jpg",
            "https://shuon.ismcdn.jp/mwimgs/4/3/-/img_433ef49cc851f4a30dc7c61925abb8f5259237.jpg"
        ]);
});

test("articles/image/102517", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/image/102517",
        "shueisha.online-articles-image-102517/",
        [
            "https://shuon.ismcdn.jp/mwimgs/2/c/-/img_2c8c27564a6d038ab3c0e3f42acb9d8f944169.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/6/-/img_e61f4d45ad1be2791574dfaf269e53e6722875.jpg",
            "https://shuon.ismcdn.jp/mwimgs/8/c/-/img_8cd95bcb308db88a84c8fae2112cfc2a681588.jpg",
            "https://shuon.ismcdn.jp/mwimgs/4/3/-/img_433ef49cc851f4a30dc7c61925abb8f5259237.jpg",
            "https://shuon.ismcdn.jp/mwimgs/a/5/-/img_a539d46696d5919cb3b4b229981b9845360767.jpg",
            "https://shuon.ismcdn.jp/mwimgs/a/a/-/img_aafb277c6e48f527e76e2e5605a3f2e0723043.jpg",
            "https://shuon.ismcdn.jp/mwimgs/7/f/-/img_7f7b25a882eae2d72f495ca47b1de1c81172792.jpg",
            "https://shuon.ismcdn.jp/mwimgs/6/a/-/img_6a964775615ff9c869b77096666b266d487201.jpg",
            "https://shuon.ismcdn.jp/mwimgs/5/4/-/img_545dd918fdb91ed1954b01f5ed91ab0f816678.jpg",
            "https://shuon.ismcdn.jp/mwimgs/0/7/-/img_078274216a62d7145d8f724cfcfcb63d371280.jpg",
            "https://shuon.ismcdn.jp/mwimgs/3/b/-/img_3bd022224e0a53e20c225f5c4301e574419900.jpg",
            "https://shuon.ismcdn.jp/mwimgs/2/9/-/img_29d11b9201d8998d96006c1eab1bc0f4514108.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/1/-/img_e14c94522dc899d4ebc81f5f0132aa43547434.jpg",
            "https://shuon.ismcdn.jp/mwimgs/f/7/-/img_f73417a6828a2be1b196396d540c2d2d476367.jpg",
            "https://shuon.ismcdn.jp/mwimgs/8/2/-/img_824a7fe32af9c01bf6f8f8cf44f71ba2639713.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/4/-/img_e4e1a59fccdd60713dc5230feade00ec815452.jpg"
        ]);
});

test("articles/image/57307", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/image/57307",
        "shueisha.online-articles-image-57307/",
        [
            "https://shuon.ismcdn.jp/mwimgs/1/d/-/img_1dd77e5078e16c0811245999f4ef1f941085760.jpg"
        ]);
});

test("articles/image/110902?pn=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/image/110902?pn=2",
        "shueisha.online-articles-image-110902/",
        [
            "https://shuon.ismcdn.jp/mwimgs/8/f/-/img_8fd1adbb027e8135b8182459813f7f8465849.jpg",
            "https://shuon.ismcdn.jp/mwimgs/d/d/-/img_ddd2677261f7c73e01609840544aea9f291172.jpg"
        ]);
});

test("articles/image/200417", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/image/200417",
        "shueisha.online-articles-image-200417/",
        [
            "https://shuon.ismcdn.jp/mwimgs/b/c/-/img_bc149d05a1e342f628b6ed6d3c694c6a202691.jpg",
            "https://shuon.ismcdn.jp/mwimgs/b/b/-/img_bb2e633b83f955f4cb0c92c69034040b41529.jpg",
            "https://shuon.ismcdn.jp/mwimgs/f/2/-/img_f26f4506b41bfc0f2d2888e897a6282e146532.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/f/-/img_ef9e14d3c7739e8ef7c39d8cac3c9af755999.jpg",
            "https://shuon.ismcdn.jp/mwimgs/f/2/-/img_f2ba7c665f83e475d3f8a8db576971846048877.jpg",
            "https://shuon.ismcdn.jp/mwimgs/3/1/-/img_31fec581e14d26f27652992c79fb1044409503.jpg",
            "https://shuon.ismcdn.jp/mwimgs/2/0/-/img_20608b717bf6b13e7d8b19eada0de83a607739.jpg",
            "https://shuon.ismcdn.jp/mwimgs/8/7/-/img_87f234fedf2e77adf7a9c363078200554964168.jpg",
            "https://shuon.ismcdn.jp/mwimgs/4/8/-/img_48e23674b6ab5c099af22b751460495f4565619.jpg",
            "https://shuon.ismcdn.jp/mwimgs/7/5/-/img_75c9c16f982bafbb2aab0a9c54bbead74405901.jpg"
        ]);
});

test("articles/-/200417?page=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/articles/-/200417?page=2",
        "shueisha.online-articles---200417/",
        [
            "https://shuon.ismcdn.jp/mwimgs/f/2/-/img_f26f4506b41bfc0f2d2888e897a6282e146532.jpg",
            "https://shuon.ismcdn.jp/mwimgs/e/f/-/img_ef9e14d3c7739e8ef7c39d8cac3c9af755999.jpg",
            "https://shuon.ismcdn.jp/mwimgs/f/2/-/img_f2ba7c665f83e475d3f8a8db576971846048877.jpg"
        ]);
});
