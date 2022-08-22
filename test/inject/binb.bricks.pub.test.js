const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("contents/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/speed_reader", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://binb.bricks.pub/contents/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/speed_reader?u0=e3d6ac68dfaf478ca5b5ffad9ab23342",
        "binb.bricks.pub-山本直樹 最新作品集 第二篇「夜景」その3/",
        [
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/wKUJ27ve.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0000.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/3sRVLyMo.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0001.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/uw8Vth2l.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0002.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/yYdhZO8O.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0003.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/kaPRFPVM.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0004.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/egD33U7F.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0005.jpg",
                "type": "msg"
            },
            {
                "url": "https://s3-ap-northeast-1.amazonaws.com/binb.bricks.pub/output/c4f58067-f745-4719-93ea-d3a20aa56797_1658914467/member_trial/pages/IUO9_Z0W.jpg/M_H.jpg?dmytime=20220727093457",
                "filename": "P0006.jpg",
                "type": "msg"
            }
        ]);
});
