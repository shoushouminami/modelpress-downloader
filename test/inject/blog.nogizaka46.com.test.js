const {testDirectDownload, getBrowserFactory, launchBrowser, dummyItems} = require("./testbase");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Test http://blog.nogizaka46.com/fourth/2019/06/051125.php", async () => {
    await testDirectDownload(
        browserFactory(),
        "http://blog.nogizaka46.com/fourth/2019/06/051125.php",
        "blog.nogizaka46.com-fourth-2019-06-051125.php/",
        [
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0004.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0001.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0002.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0003.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/11/5225339/0000.jpg"
        ]);
});

test("Image url is in href of parent A node and hosted on awalker.jp", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://blog.nogizaka46.com/erika.ikuta/2021/04/061054.php",
        "blog.nogizaka46.com-erika.ikuta-2021-04-061054.php/",
        [
            {
                "imageUrl": "http://dcimg.awalker.jp/i/lAU4raXVPj4N7VrNg57DP7FrirQcQGq5mep4w2rPnB6qC0vmgO3AWJKDaDlJMiXCXEdTi59c6lss4ZJCULa2plncqPk2Np8s9B4Ma5W3ieDTmtFzfQ1Qi1POu0HAhxPRoEOnugRaBhj0ZyIbAqJ18O7FrzbQLasRACq9ymeoaOYhYA5QZdTvne6qgNWQTGDxJHGBpILn.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/lAU4raXVPj4N7VrNg57DP7FrirQcQGq5mep4w2rPnB6qC0vmgO3AWJKDaDlJMiXCXEdTi59c6lss4ZJCULa2plncqPk2Np8s9B4Ma5W3ieDTmtFzfQ1Qi1POu0HAhxPRoEOnugRaBhj0ZyIbAqJ18O7FrzbQLasRACq9ymeoaOYhYA5QZdTvne6qgNWQTGDxJHGBpILn"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/nIaLsaNoPOrJO88UpoYy4M2kxCWYHPRnqkHPPp5KPKWrwZE8YHpblKALgkDJ8Gvlr3sdljB3lAN86zg3NnzIeUWeDenLuFlq6jyUk0XuGnyII7ShtnQlOIjP8hb1V2aQfQW4qKXYwgiMrBg3uDSfYRqO30YgoU9HmKqK6sJqBCJ8Doxo72v33rowith7I72roznqVnzM.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/nIaLsaNoPOrJO88UpoYy4M2kxCWYHPRnqkHPPp5KPKWrwZE8YHpblKALgkDJ8Gvlr3sdljB3lAN86zg3NnzIeUWeDenLuFlq6jyUk0XuGnyII7ShtnQlOIjP8hb1V2aQfQW4qKXYwgiMrBg3uDSfYRqO30YgoU9HmKqK6sJqBCJ8Doxo72v33rowith7I72roznqVnzM"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/0Ijhi2puixhLTfXmc6LE0TlUKpOCoFBtD93UjNOJZhckZ4Dfdqed1FUhkoGdVAjU4AkSbmqWNYyiulFVvveDr3bN39ZdPwEMdHCdaPMPPdVydmTtpLqpHhvEhxGa95FUsrPh7v1yiqNU0TX3QwvnDw6GJT8Y64uiMdHwRFFhdQNxH3IjNXKlnITjE07e2Xjjo5jCIEgd.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/0Ijhi2puixhLTfXmc6LE0TlUKpOCoFBtD93UjNOJZhckZ4Dfdqed1FUhkoGdVAjU4AkSbmqWNYyiulFVvveDr3bN39ZdPwEMdHCdaPMPPdVydmTtpLqpHhvEhxGa95FUsrPh7v1yiqNU0TX3QwvnDw6GJT8Y64uiMdHwRFFhdQNxH3IjNXKlnITjE07e2Xjjo5jCIEgd"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/cr7DdpFuCZ1x6UcKiiXyfxuw2aAEpDhaHvNkpphe0EDNbt38agUcKPV3CZhM7iVLKqcM7sEH3mEmqM7D8w0aUBR5MTKw6WaIZi4bGoH5gJZamFjMXv7VoT9KcO8YpuNwMTYeQldOvJWW67TUxL5LJtR3GS8DpqSp5llXF0BptBCoJJsLnMcdySqxHkN1r3QV4aKPLajk.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/cr7DdpFuCZ1x6UcKiiXyfxuw2aAEpDhaHvNkpphe0EDNbt38agUcKPV3CZhM7iVLKqcM7sEH3mEmqM7D8w0aUBR5MTKw6WaIZi4bGoH5gJZamFjMXv7VoT9KcO8YpuNwMTYeQldOvJWW67TUxL5LJtR3GS8DpqSp5llXF0BptBCoJJsLnMcdySqxHkN1r3QV4aKPLajk"
            }
        ]
    );
});

test("Image url is in src of IMG node", async () => {
    await testDirectDownload(
        browserFactory(),
        "http://blog.nogizaka46.com/fourth/2019/06/051238.php",
        "blog.nogizaka46.com-fourth-2019-06-051238.php/",
        [
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0003.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0004.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0000.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0001.jpg",
            "https://img.nogizaka46.com/blog/fourth/img/2019/06/19/3478686/0002.jpg"
        ]);
});

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browserFactory(),
        "http://blog.nogizaka46.com/fourth/2019/12/053960.php",
        "blog.nogizaka46.com-fourth-2019-12-053960.php/",
        [
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384354682.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384536971.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384538742.jpg",
            "http://img.nogizaka46.com/blog/fourth/img/2019/12/15/1576384540660.jpg"
        ]);
});

test("Image url is in href of parent A node but hosted on blog.nogizaka46.com", async () => {
    await testDirectDownload(
        browserFactory(),
        "http://blog.nogizaka46.com/staff/2017/07/039636.php",
        "blog.nogizaka46.com-staff-2017-07-039636.php/",
        [
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A0%E9%A3%9B%E9%B3%A5.JPG",
            "http://img.nogizaka46.com/blog/staff/img/2017/07/05/%E2%91%A1%E4%BA%95%E4%B8%8A.JPG",
        ].concat(dummyItems(21)));
});
