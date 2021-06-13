const pagecache = require("../src/pagecache");

test("Test getOrSet", () => {
    let o = pagecache.getOrSet([]);
    expect(o).toStrictEqual([]);
    o.push("a");
    expect(o).toStrictEqual(["a"]);
    expect(pagecache.get()).toStrictEqual([]);
    expect(pagecache.set(o)).toStrictEqual(["a"]);
    expect(pagecache.set("abc")).toStrictEqual("abc");
    expect(pagecache.get()).toStrictEqual("abc");
});
