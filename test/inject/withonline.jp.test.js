const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test people article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://withonline.jp/people/ent-osyareol/bxGlh",
        "withonline.jp-people-ent-osyareol-bxGlh/",
        [
            "https://cdn.clipkit.co/tenants/381/articles/images/000/132/282/large/8dbe33af-6c86-4d43-9d46-e91a64ea8d0c.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/000/975/375/large/17b3b4bb-3056-49bd-b4cc-9b4cfd4893c5.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/000/975/377/large/8261052e-71ee-4417-a93b-4b67819b8e70.jpg"
        ]
    );
});

test("Test fashion article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://withonline.jp/fashion/ahmZb",
        "withonline.jp-fashion-ahmZb/",
        [
            "https://cdn.clipkit.co/tenants/381/articles/images/000/133/763/large/d88dc64c-9244-472e-b9f5-efd4f11d3aeb.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/012/986/large/4ae29c23-98f9-4a3d-8d82-ba51af75d2b7.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/012/997/large/379475ef-c88b-45a6-a0ea-0f242f03d185.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/012/996/large/8b3021e0-70a9-45a4-841c-8611bcbfb0a9.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/012/993/large/f2cdecc1-bf8e-4777-87ae-cfc8f2adb9b9.jpg"
        ]
    );
});

test("Test fashion article with slider images", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://withonline.jp/fashion/miyo-tsuchiya-illust/ywLRc",
        "withonline.jp-fashion-miyo-tsuchiya-illust-ywLRc/",
        [
            "https://cdn.clipkit.co/tenants/381/articles/images/000/133/794/large/fde63795-2034-452f-8e6b-0f21ccdeebaa.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/012/206/large/11fdab5c-85ff-4724-8717-057a8ba1ada4.jpg",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/040/large/cf6d3b25-27a8-474f-aec3-4ef4d8419c08.png",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/041/large/5f1873c9-5b22-428d-8776-b4fa017cf01c.png"
        ]
    );
});

test("Test beauty article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://withonline.jp/beauty/airi-arimura/kIEyL?page=2",
        "withonline.jp-beauty-airi-arimura-kIEyL/",
        [
            "https://cdn.clipkit.co/tenants/381/articles/images/000/133/769/large/6ca78da1-ef35-475b-b1fd-52deba00520d.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/011/368/large/587c55e8-c50d-41e3-a910-3d066a4950c3.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/011/367/large/f9adb703-2de4-486c-ab97-7cee84a15e4b.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/011/354/large/9f494514-fb4b-4764-ab63-ee0c28354e75.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/011/335/large/cf8f62b4-34fe-4adb-ad40-864868e39cf3.jpg"
        ]
    );
});

test("Test comic article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://withonline.jp/comic/ent-peanuts/l8kD7",
        "withonline.jp-comic-ent-peanuts-l8kD7/",
        [
            "https://cdn.clipkit.co/tenants/381/articles/images/000/133/900/large/9627f033-0ab7-4fdf-9c37-0563457d7566.jpg",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/014/001/large/44654d6d-46f3-47b9-b3bb-f07e9051617c.png",
            "https://cdn.clipkit.co/tenants/381/item_images/images/001/014/005/large/b8b418f6-f694-4d07-978c-66a3ab11e610.jpg",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/161/large/0dd13f4a-7265-472d-8e85-d4d91ff8b4b9.png",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/162/large/bb45e258-ab24-4d5d-97fc-53bf1da6241f.png",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/163/large/1d20c95d-e439-46ca-8d22-e4bef0b84554.png",
            "https://cdn.clipkit.co/tenants/381/galleries/images/000/033/164/large/bcd9192c-22be-4a5d-967c-fb5517990907.png"
        ]
    );
});
