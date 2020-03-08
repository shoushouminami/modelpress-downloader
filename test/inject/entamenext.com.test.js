const mod = require("../../src/inject/entamenext.com").test;

test("Test pattern", () => {
    expect("https://images.entamenext.com/articles_photos/3000/3908/231x410/8873ee858bbbb110f73e67ec63c44ddd.jpg"
        .match(mod.pattern)).toBeTruthy();
});


test("Test getLargeImgFromUrl", () => {
    let largeUrl = mod.getLargeImgFromUrl("https://images.entamenext.com/articles_photos/3000/3908/231x410/8873ee858bbbb110f73e67ec63c44ddd.jpg");
    expect(largeUrl).toBeDefined();
    expect(largeUrl).toBe("https://images.entamenext.com/articles_photos/3000/3908/ORG/8873ee858bbbb110f73e67ec63c44ddd.jpg");
});

