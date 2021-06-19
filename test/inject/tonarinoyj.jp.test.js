const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);
const pageutils = require("../pageutils");

test("Test manga page 1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://tonarinoyj.jp/episode/3269754496349630852",
        "tonarinoyj.jp-episode-3269754496349630852/",
        [
            {
                "filename": "1.jpg",
                "type": "msg"
            },
            {
                "filename": "2.jpg",
                "type": "msg"
            },
            {
                "filename": "3.jpg",
                "type": "msg"
            },
            {
                "filename": "4.jpg",
                "type": "msg"
            },
            {
                "filename": "5.jpg",
                "type": "msg"
            },
            {
                "filename": "6.jpg",
                "type": "msg"
            },
            {
                "filename": "7.jpg",
                "type": "msg"
            },
            {
                "filename": "8.jpg",
                "type": "msg"
            },
            {
                "filename": "9.jpg",
                "type": "msg"
            },
            {
                "filename": "10.jpg",
                "type": "msg"
            },
            {
                "filename": "11.jpg",
                "type": "msg"
            },
            {
                "filename": "12.jpg",
                "type": "msg"
            }
        ]
    );
});

test("Test one punch man page 1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://tonarinoyj.jp/episode/3269754496334930840",
        "tonarinoyj.jp-episode-3269754496334930840/",
        [
            {
                "filename": "1.jpg",
                "type": "msg"
            },
            {
                "filename": "2.jpg",
                "type": "msg"
            },
            {
                "filename": "3.jpg",
                "type": "msg"
            },
            {
                "filename": "4.jpg",
                "type": "msg"
            },
            {
                "filename": "5.jpg",
                "type": "msg"
            },
            {
                "filename": "6.jpg",
                "type": "msg"
            },
            {
                "filename": "7.jpg",
                "type": "msg"
            },
            {
                "filename": "8.jpg",
                "type": "msg"
            },
            {
                "filename": "9.jpg",
                "type": "msg"
            },
            {
                "filename": "10.jpg",
                "type": "msg"
            },
            {
                "filename": "11.jpg",
                "type": "msg"
            },
            {
                "filename": "12.jpg",
                "type": "msg"
            },
            {
                "filename": "13.jpg",
                "type": "msg"
            },
            {
                "filename": "14.jpg",
                "type": "msg"
            },
            {
                "filename": "15.jpg",
                "type": "msg"
            },
            {
                "filename": "16.jpg",
                "type": "msg"
            },
            {
                "filename": "17.jpg",
                "type": "msg"
            },
            {
                "filename": "18.jpg",
                "type": "msg"
            },
            {
                "filename": "19.jpg",
                "type": "msg"
            },
            {
                "filename": "20.jpg",
                "type": "msg"
            },
            {
                "filename": "21.jpg",
                "type": "msg"
            },
            {
                "filename": "22.jpg",
                "type": "msg"
            },
            {
                "filename": "23.jpg",
                "type": "msg"
            },
            {
                "filename": "24.jpg",
                "type": "msg"
            },
            {
                "filename": "25.jpg",
                "type": "msg"
            },
            {
                "filename": "26.jpg",
                "type": "msg"
            },
            {
                "filename": "27.jpg",
                "type": "msg"
            },
            {
                "filename": "28.jpg",
                "type": "msg"
            },
            {
                "filename": "29.jpg",
                "type": "msg"
            }
        ]
    );
});
