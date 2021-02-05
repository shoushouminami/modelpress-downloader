const { testDirectDownload, getBrowserFactory } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test 1 image article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.dispatch.co.kr/2103000",
        "www.dispatch.co.kr-2103000/",
        [
            "https://dispatch.cdnser.be/cms-content/uploads/2020/09/15/fab85708-5b17-4540-ab3a-349a21c030e5.jpeg"
        ]
    );
});

test("Test 6 images article", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://www.dispatch.co.kr/2126274",
        "www.dispatch.co.kr-2126274/",
        [
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/dc097524-67c4-49be-a9f9-b7c321dba6c4.JPG",
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/9233d113-7eb9-43e0-9bb7-23e8f0b98f67.JPG",
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/9ba09e21-e330-4844-a6df-fcdb671d38cb.JPG",
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/06130c8d-7c1a-4961-bd5b-def6ac7a8769.JPG",
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/e5e856cd-b025-496b-8b56-7a50882ed370.JPG",
            "https://dispatch.cdnser.be/cms-content/uploads/2021/01/25/e4bb9780-6bb5-4c41-b5b9-c31ba0408490.JPG"
        ]
    );
});
