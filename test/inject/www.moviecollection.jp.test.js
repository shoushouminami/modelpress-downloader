const { testDirectDownload, getBrowserFactory, dummyItems } = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.moviecollection.jp", () => { 
    test("news/283588/?gallery=2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.moviecollection.jp/news/283588/?gallery=2",
            "www.moviecollection.jp-news-283588-/",
            [
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_0Y4A0570.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_MINAMO_202404110473MJ-2.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_202404061209.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_202404232864.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_misaki_202404100386MJ-2.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_miyashita_202404120648.jpg"
            ]);
    });

    test("news/283588/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.moviecollection.jp/news/283588/",
            "www.moviecollection.jp-news-283588-/",
            [
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_MINAMO_202404110473MJ-2.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_202404061209.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_202404232864.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_misaki_202404100386MJ-2.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_miyashita_202404120648.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2026/12/OK_0Y4A0570.jpg"
            ]);
    });



    test("present/282753/?gallery=2", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.moviecollection.jp/present/282753/?gallery=2",
            "www.moviecollection.jp-present-282753-/",
            [
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/edd435d3ef357f75da3fabd52d191345.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/salli_main.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/salli_sub01.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/salli_sub02.jpg"
            ]);
    });

    test("interview/283071/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.moviecollection.jp/interview/283071/",
            "www.moviecollection.jp-interview-283071-/",
            [
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara01.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara08.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara09.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara04.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara03.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara05.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara02.jpg",
                "https://www.moviecollection.jp/wp/wp-content/uploads/2025/12/fujiwara07.jpg"
            ]);
    });
});


