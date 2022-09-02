const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);
const pageutils = require("../pageutils");

test("Test news article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.loveteen.jp/post/20211119-2",
        "www.loveteen.jp-post-20211119-2/",
        [
            "https://static.wixstatic.com/media/e66b04_f13c1935704043c8b12098e40a8cc2ed~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_f12d9032df6d4292bd10b6cfe47e4899~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_9896a60d18ab4d2fb61a9a84ea67fefb~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_67f12c4685b34ec29dc2052c1508ce50~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_0428b09d6a6b4c2f92d94cecbfc2c094~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_c6983cfcd03045cc8e17f10af4e96e79~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_d0167a51b02b446596e6444b90dfb5b8~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_2cec7e762a094e6295242fa08f3ced2b~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_e6a3675b5acd4b31928c49b451a481c3~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_00fc7a050c894d59b5bd53ce079ce27d~mv2.png",
            "https://static.wixstatic.com/media/e66b04_2dd6b49dbad74f0db5b1f038f46a9a80~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_9126a9136393423fab793fd892bc2613~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_eccbc66452cb46e2b0712c4bb7dc3ec8~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_de9f3920cee54fdbbb6b370fd536f28b~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_6ffa3512a33c49ce8c45036d02dd8749~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_50de682c10ab4aafa68d026e351506ee~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_e8fd5e3465ce42bc8be7c4e4d9688fa7~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_956eb54dc7374e6594933543f317dced~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_d62c03631ce245188706e7b0e4711247~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_20e789a3f19c41b8adb01b4da36d190e~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_14ed08c037034007a8f131a019bc6f5d~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_4e3755b4f07e4c5498c74d4200ac324b~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_a546d6e55d1b491e8d3ec65f7324f371~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_ee628d8267c641cfbade6a205e13f3dc~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_484eaa3097614e4ea127574164da3c31~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_791a2669f4f54ac682c3ca9a22f152fb~mv2.jpg",
            "https://static.wixstatic.com/media/e66b04_1077da79d7424943924db41e0ff91975~mv2.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});
