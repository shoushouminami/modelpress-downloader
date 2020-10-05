const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test.skip("Test mutliple images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.instagram.com/p/CFw1v9ujoXA/",
        "www.instagram.com-p-CFw1v9ujoXA-/",
        [
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120280644_408590486977390_1415176062772627578_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=xIN823ZvzpUAX_v983B&_nc_tp=15&oh=35689b7d84d347aedacdd17810dd8c6f&oe=5FA2A3D6",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120302905_725529791332134_1392881734404689059_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=1r4wOSi0zokAX9dv0pO&_nc_tp=15&oh=dd16a001ef2ed253e651324c29ef6dec&oe=5FA28277",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120368394_131998615312006_5620156408608222188_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=4vAf227OXtgAX8OKxhi&_nc_tp=15&oh=7a07cc74453f24b9da621d6a85774853&oe=5FA283BD",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120209508_199538384921750_5411164912256090264_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=2FVkpqZJX9AAX8RZE8O&_nc_tp=15&oh=28669d84203c57a4c86468416c29f512&oe=5FA39956",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120291706_808584246611681_7404520841523247146_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=XBn1T7mZ9jkAX_JmcgK&_nc_tp=15&oh=259af4a4d434b3e3cfb1c79e8be11096&oe=5FA2AEBD",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120233419_346444386623323_3199513176282265953_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=swCrrB4SxSMAX-RlPtL&_nc_tp=15&oh=ad0d1f38349ce1a36dc47d6b1b9bec19&oe=5FA46D69",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120312142_2670739349844693_8707158438770362045_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=iAqxfqEp6PYAX_Bc4kt&_nc_tp=15&oh=3038b2078b5d572a4d5d31875eeed691&oe=5FA1EFCA",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120355409_788668488364442_2828210862328841413_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=1y8V3oNwaawAX__sJId&_nc_tp=15&oh=0b99297e95e41a6bb3a938de90a56210&oe=5FA1B30C",
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120277436_257188088914085_5313938868154136828_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FBOEPmaYQNIAX8s9lEi&_nc_tp=15&oh=76e1e8f730b739d57ed7acd65db5af56&oe=5FA2A3C2"
        ]
    );
});

test.skip("Test 1 image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.instagram.com/p/CFeb6krDWyk/",
        "www.instagram.com-p-CFeb6krDWyk-/",
        [
            "https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120084668_663853057886423_8513815347168050301_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=IMpDTG98Ob8AX9ZNvfg&_nc_tp=15&oh=6d5f91cca49f25e75200bb79de699ec5&oe=5FA2B5D3"
        ]
    );
});