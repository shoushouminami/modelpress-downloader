const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite nbpress.online", () => {
    test("archives/123142#jp-carousel-123127", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nbpress.online/archives/123142#jp-carousel-123127",
            "nbpress.online-archives-123142/",
            [
                "https://i.ytimg.com/vi/E603NmW50Ew/maxresdefault.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC00588-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2030-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1848-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC00512-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2124-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2148-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1888-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1625-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC08587-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC08631-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2926-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1672-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC00451-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC08664-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1824-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1920-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2231-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC00473-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/DSC08651-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1929-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1967-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1726-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1773-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_1784-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/N29_2089-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/scandaleve_KV_ABEMAnon.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/scandaleve_KVtate_ABEMAnon.jpg"
            ]);
    });

    test("archives/123009", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nbpress.online/archives/123009",
            "nbpress.online-archives-123009/",
            [
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_2994-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/202404061209.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3041-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3020-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404102215MJ.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3030-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3038-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/Sakuya_Cheki-125924-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3001-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3019-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/12/NB9_3035-Edit-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/N29_1830-wm.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/bce66dcb1c92eb597e220c004a4798c2.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/202404080358.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/202404080609.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/202404200540.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/33bbc809b774a002e8cb1a79239bbd69.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404060685.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404100519MJ.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404230961.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404231281.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_202404260118.jpg",
                "https://i.ytimg.com/vi/-e5cIxfPfGA/maxresdefault.jpg",
                "https://nbpress.online/wp/wp-content/uploads/2025/11/OK_hoshitsuki_B1_poster.jpg"
            ]);
    });

    test("archives/117600", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://nbpress.online/archives/117600",
            "nbpress.online-archives-117600/",
            dummyItems(44));
    });
}); 
