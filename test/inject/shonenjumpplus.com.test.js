const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test manga page 1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shonenjumpplus.com/episode/10833519556325021828",
        "shonenjumpplus.com-episode-10833519556325021828/",
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
            },
            {
                "filename": "30.jpg",
                "type": "msg"
            },
            {
                "filename": "31.jpg",
                "type": "msg"
            },
            {
                "filename": "32.jpg",
                "type": "msg"
            },
            {
                "filename": "33.jpg",
                "type": "msg"
            },
            {
                "filename": "34.jpg",
                "type": "msg"
            },
            {
                "filename": "35.jpg",
                "type": "msg"
            },
            {
                "filename": "36.jpg",
                "type": "msg"
            },
            {
                "filename": "37.jpg",
                "type": "msg"
            },
            {
                "filename": "38.jpg",
                "type": "msg"
            },
            {
                "filename": "39.jpg",
                "type": "msg"
            },
            {
                "filename": "40.jpg",
                "type": "msg"
            },
            {
                "filename": "41.jpg",
                "type": "msg"
            },
            {
                "filename": "42.jpg",
                "type": "msg"
            },
            {
                "filename": "43.jpg",
                "type": "msg"
            },
            {
                "filename": "44.jpg",
                "type": "msg"
            },
            {
                "filename": "45.jpg",
                "type": "msg"
            },
            {
                "filename": "46.jpg",
                "type": "msg"
            },
            {
                "filename": "47.jpg",
                "type": "msg"
            },
            {
                "filename": "48.jpg",
                "type": "msg"
            },
            {
                "filename": "49.jpg",
                "type": "msg"
            },
            {
                "filename": "50.jpg",
                "type": "msg"
            },
            {
                "filename": "51.jpg",
                "type": "msg"
            },
            {
                "filename": "52.jpg",
                "type": "msg"
            },
            {
                "filename": "53.jpg",
                "type": "msg"
            },
            {
                "filename": "54.jpg",
                "type": "msg"
            },
            {
                "filename": "55.jpg",
                "type": "msg"
            }
        ]
    );
});
