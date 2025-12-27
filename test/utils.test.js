const utils = require("../src/utils.js");

test("Test getDomBackgroundImage", () => {
    expect(utils.getBackgroundImageFromDOM(null)).toBeNull();
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: " url(\"https://thetv.jp/i/nw/204813/1245283.jpg?w=125&h=125&f=1\")"
            }
        }))
        .toBe("https://thetv.jp/i/nw/204813/1245283.jpg?w=125&h=125&f=1");
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: "url(https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg);"
            }
        }))
        .toBe("https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg");
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: "url('https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg');"
            }
        }))
        .toBe("https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg");
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: "url(\"https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082388?w=615\")"
            }
        }))
        .toBe("https://movie.walkerplus.com/api/resizeimage/news/article/1009954/10082388?w=615");
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: "url('/wp-content/uploads/2020/08/20200805-yodayuuki-sub2.jpeg')"
            }
        }))
        .toBe("/wp-content/uploads/2020/08/20200805-yodayuuki-sub2.jpeg");
    expect(utils.getBackgroundImageFromDOM(
        {
            style: {
                backgroundImage: "url(\"content/images/_gravure-style/2022ym17cover01_oyeitHAsBTLG.jpg\")"
            }
        }))
        .toBe("content/images/_gravure-style/2022ym17cover01_oyeitHAsBTLG.jpg");
});

test("Test getBackgroundImage", () => {
    expect(utils.getBackgroundImageFromString(null)).toBeNull();
    expect(utils.getBackgroundImageFromString("url(\"https://img.popnroll.tv/uploads/news_item/image/17304/thumb_A-sha_S.jpg\")"))
        .toBe("https://img.popnroll.tv/uploads/news_item/image/17304/thumb_A-sha_S.jpg");
});

test("Test removeTrailingResolutionNumbers", () => {
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2019/08/collage-1024x683.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2019/08/collage.jpg");
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2020/03/25680-150x150.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2020/03/25680.jpg");
    //"http://popwave.jp/wp-content/uploads/2020/03/25607-150x150-1.jpg"
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2020/03/25607-150x150-1.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2020/03/25607.jpg");
    expect(utils.removeTrailingResolutionNumbers("https://img.hanako.tokyo/2021/09/30114511/20210702h0093-1-1536x1022.jpg"))
        .toBe("https://img.hanako.tokyo/2021/09/30114511/20210702h0093-1.jpg");
});


test("Test getChildElement", () => {
    let o = {
        "a": {
            "b": {
                "c": 1
            }
        }
    };

    expect(utils.getChildElement(
        o,
        ["a", "b", "c"]
    )).toBe(1);
    expect(utils.getChildElement(
        o,
        ["e", "f", "g"]
    )).toBeNull()

});

test("Test pushIfNew", () => {
    let l = [];
    utils.pushIfNew(l, 0);
    expect(l).toStrictEqual([0]);
    utils.pushIfNew(l, 0);
    expect(l).toStrictEqual([0]);
    utils.pushIfNew(l, {url: "abc"});
    expect(l).toStrictEqual([0, {url: "abc"}]);
    utils.pushIfNew(l, {url: "abc"});
    expect(l).toStrictEqual([0, {url: "abc"}]);
});

test("test getSearchParams", function (){
    expect(utils.getSearchParam("http://example.com?a=1").get("a")).toBe("1");
    expect(utils.getSearchParam("http://example.com?a=1").get("b")).toBeNull();
});

test("test replaceSpecialChars", function (){
    expect(utils.replaceSpecialChars("*")).toBe("-");
    expect(utils.replaceSpecialChars("*", "bla")).toBe("bla");
    expect(utils.replaceSpecialChars("~+*")).toBe("---");
    expect(utils.replaceSpecialChars("~!@#$%^&*+?<>")).toBe("-------------");
    expect(utils.replaceSpecialChars("e66b04_f13c1935704043c8b12098e40a8cc2ed~mv2.jpg")).toBe("e66b04_f13c1935704043c8b12098e40a8cc2ed-mv2.jpg");
});

test("test getFileExt", function () {
    expect(utils.getFileExt("abc.png")).toBe("png");
    expect(utils.getFileExt("abc")).toBeNull();
    expect(utils.getFileExt("abc.png?blal.good")).toBe("png");
    expect(utils.getFileExt("http://www.domain.com/abc.png?blal.good")).toBe("png");
    expect(utils.getFileExt("http://www.domain.com/abc.png#blal.good")).toBe("png");
    expect(utils.getFileExt("http://www.domain.com/abc.jpeg?what#blal.good")).toBe("jpeg");
});

test("test clearObjectProperties", function () {
    expect(utils.clearObjectProperties({"a": "b"})).toEqual({});
});

test("test getFileName", function(){
    expect(utils.getFileName("abc.png", null, null)).toBe("abc.png");
    expect(utils.getFileName("https://domain.com/path/abc.jpg", null, null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc", "jpg", null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg?arg=val", null, null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg?arg=val#hashtag", null, null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg#hashtag", null, null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg:bla?arg=val", null, null)).toBe("abc.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg", null, "def.jpg")).toBe("def.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.jpg", "jpg", "def")).toBe("def.jpg");
    expect(utils.getFileName("https://domain.com/path/abc", "jpg", "def.jpg")).toBe("def.jpg");
    expect(utils.getFileName("https://domain.com/path/abc.xhtml", "jpg")).toBe("abc.xhtml.jpg");
});
