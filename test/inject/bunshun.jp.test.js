const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {getLargeImg} = require("../../src/inject/bunshun.jp");

test("test getLargeImg", () => {
    expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/e/4/64h/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png"))
        .toStrictEqual({url: "https://bunshun.ismcdn.jp/mwimgs/e/4/-/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png"});
    expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/128w/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
        .toStrictEqual({url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"});
    expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/650wm/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
        .toStrictEqual({url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"});
    expect(getLargeImg("https://bunshun.ismcdn.jp/mwimgs/1/3/64h/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"))
        .toStrictEqual({url: "https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg"});
});

    test("articles/photo/62734", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bunshun.jp/articles/photo/62734",
        "bunshun.jp-articles-photo-62734/",
        [
            {
                "filename": "img_ebd5bed54a125bef91ef40471df23eaf7951770.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/e/b/-/img_ebd5bed54a125bef91ef40471df23eaf7951770.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZS9iLy0vaW1nX2ViZDViZWQ1NGExMjViZWY5MWVmNDA0NzFkZjIzZWFmNzk1MTc3MC5qcGc="
            },
            {
                "filename": "img_bf14ea6568c40a351aa2da6a08611cdc7542147.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/b/f/-/img_bf14ea6568c40a351aa2da6a08611cdc7542147.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYi9mLy0vaW1nX2JmMTRlYTY1NjhjNDBhMzUxYWEyZGE2YTA4NjExY2RjNzU0MjE0Ny5qcGc="
            },
            {
                "filename": "img_7096732f37510da1086ef27e69e1b53d6887631.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/7/0/-/img_7096732f37510da1086ef27e69e1b53d6887631.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNy8wLy0vaW1nXzcwOTY3MzJmMzc1MTBkYTEwODZlZjI3ZTY5ZTFiNTNkNjg4NzYzMS5qcGc="
            },
            {
                "filename": "img_28554ffd9d24b8bfbc695a264a5f7c2e9257441.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/2/8/-/img_28554ffd9d24b8bfbc695a264a5f7c2e9257441.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMi84Ly0vaW1nXzI4NTU0ZmZkOWQyNGI4YmZiYzY5NWEyNjRhNWY3YzJlOTI1NzQ0MS5qcGc="
            },
            {
                "filename": "img_4cce3c1d5282814f8aa9f7e46a3467d88822421.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/4/c/-/img_4cce3c1d5282814f8aa9f7e46a3467d88822421.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNC9jLy0vaW1nXzRjY2UzYzFkNTI4MjgxNGY4YWE5ZjdlNDZhMzQ2N2Q4ODgyMjQyMS5qcGc="
            },
            {
                "filename": "img_bafa9e5c8dc9740068ce397d5dd6409b7369628.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/b/a/-/img_bafa9e5c8dc9740068ce397d5dd6409b7369628.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYi9hLy0vaW1nX2JhZmE5ZTVjOGRjOTc0MDA2OGNlMzk3ZDVkZDY0MDliNzM2OTYyOC5qcGc="
            },
            {
                "filename": "img_aa93434e6b7e4217d2b3ef6b6db5e7107254445.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/a/a/-/img_aa93434e6b7e4217d2b3ef6b6db5e7107254445.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYS9hLy0vaW1nX2FhOTM0MzRlNmI3ZTQyMTdkMmIzZWY2YjZkYjVlNzEwNzI1NDQ0NS5qcGc="
            },
            {
                "filename": "img_ba3ab7d33c161b3dbabf75a2720db6096939677.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/b/a/-/img_ba3ab7d33c161b3dbabf75a2720db6096939677.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYi9hLy0vaW1nX2JhM2FiN2QzM2MxNjFiM2RiYWJmNzVhMjcyMGRiNjA5NjkzOTY3Ny5qcGc="
            },
            {
                "filename": "img_f21cc63631945ed60865beeb1baf19986663791.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/f/2/-/img_f21cc63631945ed60865beeb1baf19986663791.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZi8yLy0vaW1nX2YyMWNjNjM2MzE5NDVlZDYwODY1YmVlYjFiYWYxOTk4NjY2Mzc5MS5qcGc="
            },
            {
                "filename": "img_fe5d7c8150c113b990660df9968dc5cd7243967.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/f/e/-/img_fe5d7c8150c113b990660df9968dc5cd7243967.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvZi9lLy0vaW1nX2ZlNWQ3YzgxNTBjMTEzYjk5MDY2MGRmOTk2OGRjNWNkNzI0Mzk2Ny5qcGc="
            },
            {
                "filename": "img_71984193f9a400b662cad4deb1f77ad98895430.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/7/1/-/img_71984193f9a400b662cad4deb1f77ad98895430.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvNy8xLy0vaW1nXzcxOTg0MTkzZjlhNDAwYjY2MmNhZDRkZWIxZjc3YWQ5ODg5NTQzMC5qcGc="
            },
            {
                "filename": "img_8de77eabcf29f4fd074da777c5b5426c6379873.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/8/d/-/img_8de77eabcf29f4fd074da777c5b5426c6379873.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvOC9kLy0vaW1nXzhkZTc3ZWFiY2YyOWY0ZmQwNzRkYTc3N2M1YjU0MjZjNjM3OTg3My5qcGc="
            },
            {
                "filename": "img_381a5caab9f1ef8f0794b4c861f1d5078442426.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/3/8/-/img_381a5caab9f1ef8f0794b4c861f1d5078442426.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMy84Ly0vaW1nXzM4MWE1Y2FhYjlmMWVmOGYwNzk0YjRjODYxZjFkNTA3ODQ0MjQyNi5qcGc="
            },
            {
                "filename": "img_192a2c8f53997aca81e89160d3be0e5f7735333.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/1/9/-/img_192a2c8f53997aca81e89160d3be0e5f7735333.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvMS85Ly0vaW1nXzE5MmEyYzhmNTM5OTdhY2E4MWU4OTE2MGQzYmUwZTVmNzczNTMzMy5qcGc="
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

test("articles/-/69638", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://bunshun.jp/articles/-/69638",
        "bunshun.jp-articles---69638/",
        [
            {
                "filename": "img_b7c5fe0c3c57f542d2977d5719a15c8f123464.jpg",
                "imageUrl": "https://bunshun.ismcdn.jp/mwimgs/b/7/-/img_b7c5fe0c3c57f542d2977d5719a15c8f123464.jpg",
                "type": "tab",
                "websiteCS": "inject-cs.js",
                "websiteUrl": "https://bunshun.jp/common/css/bunshun/v1/smartphone/flickity.min.css#mid_aHR0cHM6Ly9idW5zaHVuLmlzbWNkbi5qcC9td2ltZ3MvYi83Ly0vaW1nX2I3YzVmZTBjM2M1N2Y1NDJkMjk3N2Q1NzE5YTE1YzhmMTIzNDY0LmpwZw=="
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
