const urlUtils = require("../../src/utils/url-utils");

test("Test removeMwimgsSize",  function () {
    expect(
        urlUtils.removeMwimgsSize("https://bunshun.ismcdn.jp/mwimgs/e/4/64h/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png")
    ).toBe("https://bunshun.ismcdn.jp/mwimgs/e/4/-/img_e4d0e4cdbbf9f2087b144541ec0bd16d547325.png");
    expect(
        urlUtils.removeMwimgsSize("https://bunshun.ismcdn.jp/mwimgs/1/3/128w/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg")
    ).toBe("https://bunshun.ismcdn.jp/mwimgs/1/3/-/img_13bb0e4fd2c89d6a5f2bd2441ed48eec13515506.jpg");
    expect(
        urlUtils.removeMwimgsSize("https://shuon.ismcdn.jp/mwimgs/2/c/744mw/img_2c8c27564a6d038ab3c0e3f42acb9d8f944169.jpg")
    ).toBe("https://shuon.ismcdn.jp/mwimgs/2/c/-/img_2c8c27564a6d038ab3c0e3f42acb9d8f944169.jpg");
    //
    expect(
        urlUtils.removeMwimgsSize("https://arweb.ismcdn.jp/mwimgs/0/6/790wm/img_064541828047ebf8f20f896e7ec90b0b96007.jpg")
    ).toBe("https://arweb.ismcdn.jp/mwimgs/0/6/-/img_064541828047ebf8f20f896e7ec90b0b96007.jpg");
});
