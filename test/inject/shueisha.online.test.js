const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("entertainment/102517?gi=9", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/entertainment/102517?gi=9",
        "shueisha.online-entertainment-102517/",
        [
            {
                "filename": "_YUU5403-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013820238951/0/_YUU5403-Edit.jpg"
            },
            {
                "filename": "_YUU5381-Edit-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013156419052/0/_YUU5381-Edit-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5372-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013221464640/0/_YUU5372-Edit-Edit.jpg"
            },
            {
                "filename": "2826_000.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013457593244/0/2826_000.jpg"
            },
            {
                "filename": "2826_001.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013918766710/0/2826_001.jpg"
            },
            {
                "filename": "_YUU5265-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014039505441/0/_YUU5265-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5275-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014134553574/0/_YUU5275-Edit.jpg"
            },
            {
                "filename": "_YUU5399-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014205806965/0/_YUU5399-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5366-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014312589905/0/_YUU5366-Edit.jpg"
            }
        ]);
});

test("entertainment/102517?gi=9&photo=4", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/entertainment/102517?gi=9&photo=4",
        "shueisha.online-entertainment-102517/",
        [
            {
                "filename": "_YUU5403-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013820238951/0/_YUU5403-Edit.jpg"
            },
            {
                "filename": "_YUU5381-Edit-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013156419052/0/_YUU5381-Edit-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5372-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013221464640/0/_YUU5372-Edit-Edit.jpg"
            },
            {
                "filename": "2826_000.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013457593244/0/2826_000.jpg"
            },
            {
                "filename": "2826_001.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10013918766710/0/2826_001.jpg"
            },
            {
                "filename": "_YUU5265-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014039505441/0/_YUU5265-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5275-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014134553574/0/_YUU5275-Edit.jpg"
            },
            {
                "filename": "_YUU5399-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014205806965/0/_YUU5399-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5366-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014312589905/0/_YUU5366-Edit.jpg"
            },
            {
                "filename": "_YUU5498-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014646641747/0/_YUU5498-Edit.jpg"
            },
            {
                "filename": "_YUU5523-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014700927191/0/_YUU5523-Edit.jpg"
            },
            {
                "filename": "_YUU5436-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014713246412/0/_YUU5436-Edit.jpg"
            },
            {
                "filename": "_YUU5305-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014722061938/0/_YUU5305-Edit.jpg"
            },
            {
                "filename": "_YUU5319-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014746465889/0/_YUU5319-Edit.jpg"
            },
            {
                "filename": "_YUU5312-Edit-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014759359805/0/_YUU5312-Edit-Edit.jpg"
            },
            {
                "filename": "_YUU5279-Edit.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/10014821016772/0/_YUU5279-Edit.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(4000);
            }
        });
});

test("sports/57307?photo=3&gi=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/sports/57307?photo=3&gi=0",
        "shueisha.online-sports-57307/",
        [
            {
                "filename": "aflo_158402714.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2022/09/22004346718139/0/aflo_158402714.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(4000);
            }
        });
});

test("entertainment/110902?photo=6&gi=0", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://shueisha.online/entertainment/110902?photo=6&gi=0",
        "shueisha.online-entertainment-110902/",
        [
            {
                "filename": "03_14_1.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085211197579/0/03_14_1.jpg"
            },
            {
                "filename": "syoei.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28081556808232/0/syoei.jpg"
            },
            {
                "filename": "03_17_8.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085353016765/0/03_17_8.jpg"
            },
            {
                "filename": "03_17_7.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085351420937/0/03_17_7.jpg"
            },
            {
                "filename": "03_17_6.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085348380836/0/03_17_6.jpg"
            },
            {
                "filename": "03_17_5.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085344767914/0/03_17_5.jpg"
            },
            {
                "filename": "03_17_4.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085342323599/0/03_17_4.jpg"
            },
            {
                "filename": "03_17_3.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085340443418/0/03_17_3.jpg"
            },
            {
                "filename": "03_17_2.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085337189672/0/03_17_2.jpg"
            },
            {
                "filename": "03_17_1.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085334809317/0/03_17_1.jpg"
            },
            {
                "filename": "03_16_8.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085332411772/0/03_16_8.jpg"
            },
            {
                "filename": "03_16_7.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085329815902/0/03_16_7.jpg"
            },
            {
                "filename": "03_16_6.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085327487552/0/03_16_6.jpg"
            },
            {
                "filename": "03_16_5.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085325563108/0/03_16_5.jpg"
            },
            {
                "filename": "03_16_4.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085315113215/0/03_16_4.jpg"
            },
            {
                "filename": "03_16_3.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085312403429/0/03_16_3.jpg"
            },
            {
                "filename": "03_16_2.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085309990410/0/03_16_2.jpg"
            },
            {
                "filename": "03_16_1.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085307309459/0/03_16_1.jpg"
            },
            {
                "filename": "03_15_8.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085304935081/0/03_15_8.jpg"
            },
            {
                "filename": "03_15_7.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085301800632/0/03_15_7.jpg"
            },
            {
                "filename": "03_15_6.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085259709831/0/03_15_6.jpg"
            },
            {
                "filename": "03_15_5.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085256454293/0/03_15_5.jpg"
            },
            {
                "filename": "03_15_4.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085252881814/0/03_15_4.jpg"
            },
            {
                "filename": "03_15_3.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085250883806/0/03_15_3.jpg"
            },
            {
                "filename": "03_15_2.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085249110383/0/03_15_2.jpg"
            },
            {
                "filename": "03_15_1.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085246540612/0/03_15_1.jpg"
            },
            {
                "filename": "03_14_8.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085243914326/0/03_14_8.jpg"
            },
            {
                "filename": "03_14_7.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085241694106/0/03_14_7.jpg"
            },
            {
                "filename": "03_14_6.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085239567350/0/03_14_6.jpg"
            },
            {
                "filename": "03_14_5.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085237334975/0/03_14_5.jpg"
            },
            {
                "filename": "03_14_4.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085235116456/0/03_14_4.jpg"
            },
            {
                "filename": "03_14_3.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085232827472/0/03_14_3.jpg"
            },
            {
                "filename": "03_14_2.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085229215867/0/03_14_2.jpg"
            },
            {
                "filename": "03_14_1.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28085226640483/0/03_14_1.jpg"
            },
            {
                "filename": "i-006.jpg",
                "type": "msg",
                "url": "https://assets.shueisha.online/image/2023/02/28082920631996/0/i-006.jpg"
            }
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(4000);
            }
        });
});
