const {re, getLargeImg}= require("../../src/inject/www.cinematoday.jp");

test("Test regex", () => {
    let m = "https://img.cinematoday.jp/a/CZJYMLQU-j7p/_size_640x/_v_1335279600/2.jpg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("_size_640x/");

    m = "https://img.cinematoday.jp/a/E0000454/_size_c200x200/_v_1335279600/1.jpg".match(re);
    expect(m).toBeTruthy();
    expect(m[1]).toBe("_size_c200x200/");
    expect("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg".match(re)).toBeNull();
});

test("Test getLargeImg", () => {
    expect(getLargeImg("https://img.cinematoday.jp/a/CZJYMLQU-j7p/_size_640x/_v_1335279600/2.jpg"))
        .toBe("https://img.cinematoday.jp/a/CZJYMLQU-j7p/_v_1335279600/2.jpg");
    expect(getLargeImg("https://img.cinematoday.jp/a/E0000454/_size_c200x200/_v_1335279600/1.jpg"))
        .toBe("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg");
    expect(getLargeImg("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg"))
        .toBe("https://img.cinematoday.jp/a/E0000454/_v_1335279600/1.jpg");
});

