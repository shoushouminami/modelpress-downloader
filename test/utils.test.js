const utils = require("../src/utils.js");

test("Test getDomBackgroundImage", () => {
    expect(utils.getDomBackgroundImage(null)).toBeNull();
    expect(utils.getDomBackgroundImage(
        {
            style: {
                backgroundImage: " url(\"https://thetv.jp/i/nw/204813/1245283.jpg?w=125&h=125&f=1\")"
            }
        }))
        .toBe("https://thetv.jp/i/nw/204813/1245283.jpg?w=125&h=125&f=1");
    expect(utils.getDomBackgroundImage(
        {
            style: {
                backgroundImage: "url(https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg);"
            }
        }))
        .toBe("https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg");
    expect(utils.getDomBackgroundImage(
        {
            style: {
                backgroundImage: "url('https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg');"
            }
        }))
        .toBe("https://images.entamenext.com/articles_photos/4000/4011/478x850/aef621b8d71c50e985c8872510939652.jpg");
});

test("Test removeTrailingResolutionNumbers", () => {
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2019/08/collage-1024x683.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2019/08/collage.jpg");
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2020/03/25680-150x150.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2020/03/25680.jpg");
    //"http://popwave.jp/wp-content/uploads/2020/03/25607-150x150-1.jpg"
    expect(utils.removeTrailingResolutionNumbers("http://popwave.jp/wp-content/uploads/2020/03/25607-150x150-1.jpg"))
        .toBe("http://popwave.jp/wp-content/uploads/2020/03/25607.jpg");
});
