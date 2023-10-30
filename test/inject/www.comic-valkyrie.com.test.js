const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test samplebook page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/",
        "www.comic-valkyrie.com-samplebook-val_bakesyo18-/",
        [
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0002.jpg",
                "filename": "0002.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0003.jpg",
                "filename": "0003.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0004.jpg",
                "filename": "0004.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0005.jpg",
                "filename": "0005.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0001.jpg",
                "filename": "0001.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0006.jpg",
                "filename": "0006.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0007.jpg",
                "filename": "0007.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0008.jpg",
                "filename": "0008.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0009.jpg",
                "filename": "0009.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0010.jpg",
                "filename": "0010.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0011.jpg",
                "filename": "0011.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0012.jpg",
                "filename": "0012.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0013.jpg",
                "filename": "0013.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0014.jpg",
                "filename": "0014.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0015.jpg",
                "filename": "0015.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0016.jpg",
                "filename": "0016.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0017.jpg",
                "filename": "0017.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0018.jpg",
                "filename": "0018.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0019.jpg",
                "filename": "0019.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0020.jpg",
                "filename": "0020.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0021.jpg",
                "filename": "0021.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0022.jpg",
                "filename": "0022.jpg",
                "type": "msg"
            },
            {
                "url": "https://www.comic-valkyrie.com/samplebook/val_bakesyo18/data/0023.jpg",
                "filename": "0023.jpg",
                "type": "msg"
            }
        ],
        {
            preinject: async function () {
                await pageutils.wait(2000);
            }
        }
    );
});
