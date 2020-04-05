const {testDirectDownload, launchBrowser} = require("./testbase");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test dwango.jp entertainment article", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/entertainment/40172-1908",
        "news.dwango.jp-entertainment-40172-1908/",
        [
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/184/167184/ltj07be0faa8psjyufy.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/184/167184/ltj07be0faa8psjyufy.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/180/167180/pqpoq9be1t1i9yzq49n.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/180/167180/pqpoq9be1t1i9yzq49n.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/181/167181/rl4v3qka2lrirqxaj1a.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/181/167181/rl4v3qka2lrirqxaj1a.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/182/167182/i558fmdnxnh5bsd3yfk.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/182/167182/i558fmdnxnh5bsd3yfk.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/183/167183/l2xbf3ihbiu8s9dntyq.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/183/167183/l2xbf3ihbiu8s9dntyq.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/185/167185/pkg6cwebm3d7b60ymp8.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/185/167185/pkg6cwebm3d7b60ymp8.jpg"
            },
            {
                retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/186/167186/msxzyejran9bgdcwhzu.jpg"],
                url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/186/167186/msxzyejran9bgdcwhzu.jpg"
            }

        ]
    );
});

test("Test dwango.jp animeseiyu article with only 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/animeseiyu/40177-1908",
        "news.dwango.jp-animeseiyu-40177-1908/",
        [{
            retries: ["https://news-img.dwango.jp/uploads/medium/file/000/167/385/167385/okazp4b30ywjm1u8b4l.jpg"],
            url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/167/385/167385/okazp4b30ywjm1u8b4l.jpg"
        }]);
});

test("Test dwango.jp tv article with only 1 image", async () => {
    await testDirectDownload(
        browser,
        "https://news.dwango.jp/tv/46886-2003/photos/218609",
        "news.dwango.jp-tv-46886-2003-photos-218609/",
        [{
            retries: ["https://news-img.dwango.jp/uploads/medium/file/000/218/609/218609/puzx1en3rr4vetgj4jc.JPG"],
            url: "https://green-img-news-dwango-jp-prod.s3.amazonaws.com/uploads/medium/file/000/218/609/218609/puzx1en3rr4vetgj4jc.JPG"
        }]);
});
