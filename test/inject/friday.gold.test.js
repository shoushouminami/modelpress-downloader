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

test("gravure/article/343703", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/gravure/article/343703",
        "friday.gold-gravure-article-343703/",
        dummyItems(18)
    );
});

test("article/348878", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/article/348878",
        "friday.gold-article-348878/",
        [
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/07/WF0718_P096-03131302885810.jpg/v/clamp-size:width=640/format:type=webp?Expires=1752220008&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=NdLVEq--W46bW-t0XSXR34TL-1vRP7hKGwCXf-mYYsCFBGtD56c5Nw0JNrjAhL7-Otx5khCYqnSjb9fkoLHAzxmWEl-tspGKSi8UGLxEKsQ0jp2n~VPnmKW29xvlLv8DK~edJcVOIHds9~PGnR9SlosHvzeMPuNrw6O6W7i6P5aLyG-CqGoGmmO6dwLfm-W92hPaF72bsvkfjFuUkGLcdtK5IMsDpUbPBcxuOufnHXMx8onIGtgRUUvWkw00ZB2CtPkXL9q7xZyjZLTw6nkBNqY7fBtK7SGzR83J-v8BoUiohp-7YrOFOFbTFE4CRfWLkRzFmRpJok8DzDpbkS93zw__",
                "filename": "WF0718_P096-03131302885810.jpg"
            },
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/07/WF0718_P097-03131304340526.jpg/v/clamp-size:width=640/format:type=webp?Expires=1752220008&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=E34VueQ3bSnHILqLKLT6zNE7PARwA7TkT6fXILMPfy9zNm9KNYy7Qq~e6okAfTzoCRSHbQPQNyDhfKSK~QbzRbMXlOtzPS9-URLeYgukl4o0rtv63Omw3G4v3K-nSii-rwWAiq59ucJmsXNXUE46Bs8QD5xp~ZfN7C9E7fD70Ex9B7uHJDthWNQmNNE0uSdpHyKHXrrn89oFSxjVyd8eOJpye5NK1ZIK6SCZKmJwYO2co4EqtehmH5VqflfUcxaUO0H2i4zUtEtrSn-mslP1TCq9fgV89vPbmV5q3YqNCKwDhprspu~gLzY8Zgm~sozjwYxBlKHepTor3RinZjuS4Q__",
                "filename": "WF0718_P097-03131304340526.jpg"
            }
        ]);
});

test("article/348881", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://friday.gold/article/348881",
        "friday.gold-article-348881/",
        [
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/07/WF0718_P098-03131402251090.jpg/v/clamp-size:width=640/format:type=webp?Expires=1752220051&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=uKoCIAigGoWtv8xjeyYO~ZBLOusN0Ax55rKKwos1O6VpcbgRtanrotVt0v0zbH0pynnxJnj1uAZ4FqsHFt9HRRD8GXjJL8wUqJ7F6Zuu6m35beu~Jc8Xj4t3i1hJn5Z4A8lHFaPtPgFX2gvze72ti7kauBiN~BTyON4plrd5cxDO~N6GYwt173IATa4vIjDNlui6viOFynm-0a1TQYo99iUCBh2oKnC3bcoMxABd7V~uzlSIEzDUqmeHRhqrF3cmUj472q2iYCds-pXsk6pkDcV7hrbUvJvGh3W~u6oRaUrC~8lDC8wPTpe8uTlXu4PraRGTYUfD5ZEvknfVgpC1dA__",
                "filename": "WF0718_P098-03131402251090.jpg"
            },
            {
                "url": "https://assets.friday.gold/friday-wp-production-assets/app/uploads/2025/07/WF0718_P099-03131403640486.jpg/v/clamp-size:width=640/format:type=webp?Expires=1752220051&Key-Pair-Id=K2H5GZZHVJCN4V&Signature=lFgRvnr5nJbUgz7tv3US~mzUDU74R0UetOOseiQ8PFL41nUMQK5V9zmSEnv4G0R5eVuAaJPPBZkRXeYjkQP48PSwPrxLHca6kj4gt6N4qx2jnIoG3Ynn0-QYNIwjLwrS2CT5Teu~IxDqGMAWz6Hn~HQbVUUE7LbTeF1kht6rdug6hWRoNLS7NGgicaU9fRtRWhVPnH1UAc09zUnNtj80r9uQO~TOvYYVbLZBC29avTA7UvQPV2SJtBJI6uIj7p9iDMww2IFwU0YkSaunKpEvIHfoAlNqTECuacwwR-xLEgbkmG5gEkTbNMqwxVjffa0SLzJVKn9B79EJYDqfLK1Jkw__",
                "filename": "WF0718_P099-03131403640486.jpg"
            }
        ]);
});
