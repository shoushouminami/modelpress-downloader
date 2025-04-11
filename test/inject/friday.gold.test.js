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

test("article/330665", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/article/330665",
        "friday.gold-article-330665/",
        [
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/04/WF0425_P096-10140048855848.jpg/v/clamp-size:width=640/format:type=webp?Expires=1744427875&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=A~lRFsm380KBKT0o3IacLK4UIBGSUtF9exQ2HcyDfKZrmmBHoSq3DCniZESSuZOXLmgk~aEE7SLD4xxDoeenAoknlZ~vxOHNJIviH8giKafjq-D-HjRZZUd8fm09u6nIUxii-CmLkChiChytppIp~ey5xbWOOLVtHIDkglpsADsXK8W8hGnsAh9lvWXPJyYdNIeNWpGSPc-dw70YGE2NcXDUcrFnAKB-1CWjLdXtZy6RbzxjHuzHLoNWd8GWAublEy0b7DTgjCWVeQsUimbcCPflAWa6aWy8mmHNGJ6uoC0B96SogFFoAHLkMYgjElkMFztbyalXUG0eQWh38P7Kpg__",
                "filename": "WF0425_P096-10140048855848.jpg"
            },
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/04/WF0425_P097-10140050525758.jpg/v/clamp-size:width=640/format:type=webp?Expires=1744427875&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=NUzpbJu8X8AzTabhzcQvHLLBRISjEcixbUIKVnUu86BCBDi8ND2yU-4jF3qsxYkPBd-Ot0JaaZWpqt0O~aAU2c05eyhjYihxq~yoC0XMmakrlNN1bEu1nuQTEzEtYaqoQ~F0Tx1PsPhmgM1E-irLj-dyYD4JaYAdIRXieNhpjOSZEFGPQ3CUEM5YVGqAHYgxJpsADIzyfk4BzwZLTS9Eoa1gE1dMe~87DEBNMkho8lsDelT1~yzJ6FBeIGqjymGjYeCw0Z-1Ca5Y-G1rj1hTI~qeLaTrt0AGlcpDDPOq4iWJJ3Lx3qhNIhL7sr4jtGCCO-EPELnsFLEsaOgGfEZxag__",
                "filename": "WF0425_P097-10140050525758.jpg"
            }
        ]);
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
