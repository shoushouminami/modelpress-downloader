const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);
const {getFilename} = require("../../src/inject/friday.gold");

test("Test gravure article intro", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/gravure/article/86647",
        "friday.gold-gravure-article-86647/",
        [
            {
                prefix: "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/06/01-777.jpg",
            },
            {
                prefix: "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/06/05-1019.jpg"
            }
        ].concat(dummyItems(7))
    );
});

test("gravure/article/274863", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/gravure/article/274863",
        "friday.gold-gravure-article-274863/",
        [
            {
                "prefix": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2024/09/03147-12082934778312.jpg",
            },
            {
                "prefix": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2024/09/02949-12082934079706.jpg",
            }
        ].concat(dummyItems(5)));
});

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/article/88160",
        "friday.gold-article-88160/",
        [
            {
                prefix: "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/07/SH482249.jpg",
            },
            {
                prefix: "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/07/image11.jpg"
            }
        ].concat(dummyItems(3))
    );
});

test("Test getFilename", () => {
    expect(getFilename("https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/06/07-0374.jpg/v/-/format:type=webp?Expires=1729130061&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=XWwc0LfU6btcWHcEeq~1eYS0K~rDOtCjl8ALZ3CkAkY9HSyEUACUfR9WfW~a4ktWr7XIvLH-TtMX7M7n8X-0Xp3MZBlL2CZ4abz1988OEJmrcFwQQgSGypl9W7c2PbJ7j6H~n-tMqUliw0EjdJoWsLYporRINe-BTj-Sd-27Sbid~OrEaKBZhhpqA1Mrf12ZIhdKNmUiqX1aprY1Bwts7gdgyt7d9kj2us6gAlPzBgbx3A2bkS1tm8eqJaNoDEwvYyOgcL2RLR6YHvC1J5mj~6EtfETNLLq~GD0-tulilG6kRorPSaWYfKMh1C7BzINnyarWC3E2MsJlR1qT2apehg__"))
        .toBe("07-0374.jpg")
    expect(getFilename("https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/06/07-0374.jpeg/v/-/format:type=webp?Expires=1729130061&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=XWwc0LfU6btcWHcEeq~1eYS0K~rDOtCjl8ALZ3CkAkY9HSyEUACUfR9WfW~a4ktWr7XIvLH-TtMX7M7n8X-0Xp3MZBlL2CZ4abz1988OEJmrcFwQQgSGypl9W7c2PbJ7j6H~n-tMqUliw0EjdJoWsLYporRINe-BTj-Sd-27Sbid~OrEaKBZhhpqA1Mrf12ZIhdKNmUiqX1aprY1Bwts7gdgyt7d9kj2us6gAlPzBgbx3A2bkS1tm8eqJaNoDEwvYyOgcL2RLR6YHvC1J5mj~6EtfETNLLq~GD0-tulilG6kRorPSaWYfKMh1C7BzINnyarWC3E2MsJlR1qT2apehg__"))
        .toBe("07-0374.jpeg")
    expect(getFilename("https://assets.friday.gold/friday-wp-production-assets/app/uploads/2021/06/07-0374.png/v/-/format:type=webp?Expires=1729130061&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=XWwc0LfU6btcWHcEeq~1eYS0K~rDOtCjl8ALZ3CkAkY9HSyEUACUfR9WfW~a4ktWr7XIvLH-TtMX7M7n8X-0Xp3MZBlL2CZ4abz1988OEJmrcFwQQgSGypl9W7c2PbJ7j6H~n-tMqUliw0EjdJoWsLYporRINe-BTj-Sd-27Sbid~OrEaKBZhhpqA1Mrf12ZIhdKNmUiqX1aprY1Bwts7gdgyt7d9kj2us6gAlPzBgbx3A2bkS1tm8eqJaNoDEwvYyOgcL2RLR6YHvC1J5mj~6EtfETNLLq~GD0-tulilG6kRorPSaWYfKMh1C7BzINnyarWC3E2MsJlR1qT2apehg__"))
        .toBe("07-0374.png")
});
