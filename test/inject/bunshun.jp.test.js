const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {getLargeImg} = require("../../src/inject/bunshun.jp");



describe("Test suite bunshun.jp", () => {
    test("test getLargeImg", () => {
        expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/e/4/64h/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png"))
            .toStrictEqual({ url: "https://bunshun.ismcdn.jp/mwimgs/e/4/-/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png" });
        expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/128w/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
            .toStrictEqual({ url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg" });
        expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/650wm/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
            .toStrictEqual({ url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg" });
        expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/64h/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
            .toStrictEqual({ url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg" });
    });

    test("articles/photo/90988?pn=3", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bunshun.jp/articles/photo/90988?pn=3",
            "bunshun.jp-articles-photo-90988/",
            [
                {
                    "filename": "img_c216e5f51b08251d0dcf8f0cc4426af9146638.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/c/2/-/img_c216e5f51b08251d0dcf8f0cc4426af9146638.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYy8yLy0vaW1nX2MyMTZlNWY1MWIwODI1MWQwZGNmOGYwY2M0NDI2YWY5MTQ2NjM4LmpwZw=="
                },
                {
                    "filename": "img_7132ef23055e0e81ef427ddd47d122c4153484.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/7/1/-/img_7132ef23055e0e81ef427ddd47d122c4153484.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNy8xLy0vaW1nXzcxMzJlZjIzMDU1ZTBlODFlZjQyN2RkZDQ3ZDEyMmM0MTUzNDg0LmpwZw=="
                },
                {
                    "filename": "img_d18ab4b1d65b1d58c7dc2b64a67c5992234217.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/d/1/-/img_d18ab4b1d65b1d58c7dc2b64a67c5992234217.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZC8xLy0vaW1nX2QxOGFiNGIxZDY1YjFkNThjN2RjMmI2NGE2N2M1OTkyMjM0MjE3LmpwZw=="
                },
                {
                    "filename": "img_22236b5f8529fb3b52b782da652322a1276346.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/2/2/-/img_22236b5f8529fb3b52b782da652322a1276346.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMi8yLy0vaW1nXzIyMjM2YjVmODUyOWZiM2I1MmI3ODJkYTY1MjMyMmExMjc2MzQ2LmpwZw=="
                },
                {
                    "filename": "img_7f2187214350d7cc0482d907d00cdfb9116784.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/7/f/-/img_7f2187214350d7cc0482d907d00cdfb9116784.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNy9mLy0vaW1nXzdmMjE4NzIxNDM1MGQ3Y2MwNDgyZDkwN2QwMGNkZmI5MTE2Nzg0LmpwZw=="
                },
                {
                    "filename": "img_fb7632e7f6a564f029e557323f1b925643234.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/f/b/-/img_fb7632e7f6a564f029e557323f1b925643234.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZi9iLy0vaW1nX2ZiNzYzMmU3ZjZhNTY0ZjAyOWU1NTczMjNmMWI5MjU2NDMyMzQuanBn"
                },
                {
                    "filename": "img_cca56fc121adf07ffa5a9e3149e02a3c180010.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/c/c/-/img_cca56fc121adf07ffa5a9e3149e02a3c180010.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYy9jLy0vaW1nX2NjYTU2ZmMxMjFhZGYwN2ZmYTVhOWUzMTQ5ZTAyYTNjMTgwMDEwLmpwZw=="
                },
                {
                    "filename": "img_0da1d816384a86a0c0902c6f2633bff4161152.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/0/d/-/img_0da1d816384a86a0c0902c6f2633bff4161152.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMC9kLy0vaW1nXzBkYTFkODE2Mzg0YTg2YTBjMDkwMmM2ZjI2MzNiZmY0MTYxMTUyLmpwZw=="
                },
                {
                    "filename": "img_30fc2b1c6320d62c7827f80e3fed6e70146671.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/3/0/-/img_30fc2b1c6320d62c7827f80e3fed6e70146671.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMy8wLy0vaW1nXzMwZmMyYjFjNjMyMGQ2MmM3ODI3ZjgwZTNmZWQ2ZTcwMTQ2NjcxLmpwZw=="
                },
                {
                    "filename": "img_9feeb4f47db6e17f611059429bb33531158654.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/9/f/-/img_9feeb4f47db6e17f611059429bb33531158654.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvOS9mLy0vaW1nXzlmZWViNGY0N2RiNmUxN2Y2MTEwNTk0MjliYjMzNTMxMTU4NjU0LmpwZw=="
                },
                {
                    "filename": "img_d786cc090d5f5db34c79e155bbb35c5a245574.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/d/7/-/img_d786cc090d5f5db34c79e155bbb35c5a245574.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZC83Ly0vaW1nX2Q3ODZjYzA5MGQ1ZjVkYjM0Yzc5ZTE1NWJiYjM1YzVhMjQ1NTc0LmpwZw=="
                },
                {
                    "filename": "img_cdc7f78ce154b9d2824971829c204847152254.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/c/d/-/img_cdc7f78ce154b9d2824971829c204847152254.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYy9kLy0vaW1nX2NkYzdmNzhjZTE1NGI5ZDI4MjQ5NzE4MjljMjA0ODQ3MTUyMjU0LmpwZw=="
                },
                {
                    "filename": "img_6b10003923843f3ecd78121666d43af7201444.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/6/b/-/img_6b10003923843f3ecd78121666d43af7201444.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNi9iLy0vaW1nXzZiMTAwMDM5MjM4NDNmM2VjZDc4MTIxNjY2ZDQzYWY3MjAxNDQ0LmpwZw=="
                },
                {
                    "filename": "img_46253589199adfeb20410d92aad00942135999.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/4/6/-/img_46253589199adfeb20410d92aad00942135999.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNC82Ly0vaW1nXzQ2MjUzNTg5MTk5YWRmZWIyMDQxMGQ5MmFhZDAwOTQyMTM1OTk5LmpwZw=="
                },
                {
                    "filename": "img_a92944730ca29afc5924cc52e4b6d883146323.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/a/9/-/img_a92944730ca29afc5924cc52e4b6d883146323.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYS85Ly0vaW1nX2E5Mjk0NDczMGNhMjlhZmM1OTI0Y2M1MmU0YjZkODgzMTQ2MzIzLmpwZw=="
                },
                {
                    "filename": "img_1ab1c64cf31b8e5e023a8abc1b68b8b673211.jpg",
                    "type": "tab",
                    "url": "https://bunshun.ismcdn.jp/mwimgs/1/a/-/img_1ab1c64cf31b8e5e023a8abc1b68b8b673211.jpg",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMS9hLy0vaW1nXzFhYjFjNjRjZjMxYjhlNWUwMjNhOGFiYzFiNjhiOGI2NzMyMTEuanBn"
                }
            ]);
    });


    test("articles/-/69544", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bunshun.jp/articles/-/69544",
            "bunshun.jp-articles---69544/",
            [
                {
                    "filename": "img_dcdd96d22a52d625f6f74cf185a2e65c303219.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/d/c/-/img_dcdd96d22a52d625f6f74cf185a2e65c303219.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZC9jLy0vaW1nX2RjZGQ5NmQyMmE1MmQ2MjVmNmY3NGNmMTg1YTJlNjVjMzAzMjE5LmpwZw=="
                },
                {
                    "filename": "img_1360744ce13b611f05a22671afc5b18318285.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_1360744ce13b611f05a22671afc5b18318285.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMS8zLy0vaW1nXzEzNjA3NDRjZTEzYjYxMWYwNWEyMjY3MWFmYzViMTgzMTgyODUuanBn"
                }
            ]);
    });

    test("articles/-/73938", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bunshun.jp/articles/-/73938",
            "bunshun.jp-articles---73938/",
            [
                {
                    "filename": "img_e4c58283d71a8772093e1dd25c963f054744499.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/e/4/-/img_e4c58283d71a8772093e1dd25c963f054744499.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZS80Ly0vaW1nX2U0YzU4MjgzZDcxYTg3NzIwOTNlMWRkMjVjOTYzZjA1NDc0NDQ5OS5qcGc="
                },
                {
                    "filename": "img_657cf9114bb4faf6b74a68f8a924ad374182336.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/6/5/-/img_657cf9114bb4faf6b74a68f8a924ad374182336.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNi81Ly0vaW1nXzY1N2NmOTExNGJiNGZhZjZiNzRhNjhmOGE5MjRhZDM3NDE4MjMzNi5qcGc="
                }
            ]);
    });

    test("articles/photo/68029?pn=1", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bunshun.jp/articles/photo/68029?pn=1",
            "bunshun.jp-articles-photo-68029/",
            [
                {
                    "filename": "img_73a5fc698cf82c7e613e488cb0a1a6c32646272.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/7/3/-/img_73a5fc698cf82c7e613e488cb0a1a6c32646272.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNy8zLy0vaW1nXzczYTVmYzY5OGNmODJjN2U2MTNlNDg4Y2IwYTFhNmMzMjY0NjI3Mi5qcGc="
                },
                {
                    "filename": "img_5dc59836294e61bd906f0b0bed943f19183867.png",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/5/d/-/img_5dc59836294e61bd906f0b0bed943f19183867.png",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNS9kLy0vaW1nXzVkYzU5ODM2Mjk0ZTYxYmQ5MDZmMGIwYmVkOTQzZjE5MTgzODY3LnBuZw=="
                },
                {
                    "filename": "img_b70e14158a7455102d37c47eaecaa68d132064.png",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/b/7/-/img_b70e14158a7455102d37c47eaecaa68d132064.png",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYi83Ly0vaW1nX2I3MGUxNDE1OGE3NDU1MTAyZDM3YzQ3ZWFlY2FhNjhkMTMyMDY0LnBuZw=="
                },
                {
                    "filename": "img_08291a0054b2b1cb4052d6f1c057f16b72692.jpg",
                    "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/0/8/-/img_08291a0054b2b1cb4052d6f1c057f16b72692.jpg",
                    "type": "tab",
                    "websiteCS": "inject-cs.js",
                    "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMC84Ly0vaW1nXzA4MjkxYTAwNTRiMmIxY2I0MDUyZDZmMWMwNTdmMTZiNzI2OTIuanBn"
                }
            ]);
    });

})
