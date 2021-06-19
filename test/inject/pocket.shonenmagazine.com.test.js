const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test manga page 1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://pocket.shonenmagazine.com/episode/10834108156643573186",
        "pocket.shonenmagazine.com-episode-10834108156643573186/",
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
