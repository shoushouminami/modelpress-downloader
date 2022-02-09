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
        "https://blog.nogizaka46.com/asuka.saito/2021/08/062748.php",
        "blog.nogizaka46.com-asuka.saito-2021-08-062748.php/",
        [
            {
                "imageUrl": "http://dcimg.awalker.jp/i/HLq5KFoTQ5uH5zlXr52sfdmriDj2gBP1eFKIiiOlcseL24MBzFKAnNPTINbwNEH86QBi2dubQO4bs9ZoCjlOWeGfRQt4MreYlitCTCJcTIrFQalOHVrqRwynLSTXMHT1iRdTCAFqtW2m11M79P6aJmSbHrdGYlOqvCbInZUVoMVvksufeEmnxdqsXydpRaCDrSh40JLW.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/HLq5KFoTQ5uH5zlXr52sfdmriDj2gBP1eFKIiiOlcseL24MBzFKAnNPTINbwNEH86QBi2dubQO4bs9ZoCjlOWeGfRQt4MreYlitCTCJcTIrFQalOHVrqRwynLSTXMHT1iRdTCAFqtW2m11M79P6aJmSbHrdGYlOqvCbInZUVoMVvksufeEmnxdqsXydpRaCDrSh40JLW"
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
