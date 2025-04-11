const {removeMwimgsSize} = require("./../src/utils/url-utils");

test("Test removeMwimgsSize", () => {
    expect(removeMwimgsSize("https://arweb.ismcdn.jp/mwimgs/a/5/650mw/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"))
        .toBe("https://arweb.ismcdn.jp/mwimgs/a/5/-/img_a51243ea92baaa94cd74edae5642ac25191202.jpg");
    
    expect(removeMwimgsSize("https://times-abema.ismcdn.jp/mwimgs/2/8/1448w/img_282140be4f76eec3bfce4658a720451f268882.jpg"))
        .toBe("https://times-abema.ismcdn.jp/mwimgs/2/8/-/img_282140be4f76eec3bfce4658a720451f268882.jpg");

    expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/mwimgs/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg"))
        .toBe("https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg");

    expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/mwimgs/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100"))
        .toBe("https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100");

    expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/aaa/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg"))
        .toBe("https://mezamashi.ismcdn.jp/aaa/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg");

});
