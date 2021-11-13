const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test photo page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://binb.bricks.pub/contents/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/speed_reader?u0=aeb9949e36bf4a1d81a0a6781051df20",
        "binb.bricks.pub-山本直樹 最新作品集 第一篇「練習」その12/",
        [
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/T_1ZOsht.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0000.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/qlcgcKo8.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0001.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/jblovQWW.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0002.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/0sxsuSx1.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0003.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/ya3iUA7E.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0004.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/dKHINanu.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0005.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/fe386b1d-5573-485d-8cf8-5cf5a7275023_1635407952/member_trial/pages/B2P0FuFL.jpg/M_H.jpg?dmytime=20211028075940",
                "filename": "P0006.jpg",
                "type": "msg"
            }
        ]
    );
});
