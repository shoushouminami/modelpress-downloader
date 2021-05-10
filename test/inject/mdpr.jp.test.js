const {testDirectDownload, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test https://mdpr.jp/news/detail/1844622", async () => {
    await testDirectDownload(
        browser,
        "https://mdpr.jp/news/detail/1844622",
        "mdpr.jp-news-detail-1844622/",
        [
            "https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/a2dA/wm/a2dADq2nRw44R-VCTCAy5bZGZzviIvhDjUyC5e6GDek.jpg?quality=100"
        ]
    );
});

test("Test https://mdpr.jp/photo/detail/6942679", async () => {
    await testDirectDownload(
        browser,
        "https://mdpr.jp/photo/detail/6942679",
        "mdpr.jp-photo-detail-6942679/",
        [
            "https://img-mdpr.freetls.fastly.net/article/QZD7/wm/QZD7dhbnlwCDvX1PEOiZej8mAZZhZ9LHy0I9rzdFVRE.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/zIM_/wm/zIM_-fR9nAoFFqTa6sY-qPO36tg8URuHhMr5eJ6A5nw.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/mP08/wm/mP083mIIbfNJKuaF7g68RIPQlQAh9CGGX4E91BrtC-c.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/lzgJ/wm/lzgJUm1lLDNd7K-xGOoxVSoamvYWnCMwDH_v2-qGgz4.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/a2dA/wm/a2dADq2nRw44R-VCTCAy5bZGZzviIvhDjUyC5e6GDek.jpg?quality=100"
        ]
    );
});

test("Test apparel.mdpr.jp news", async () => {
    await testDirectDownload(
        browser,
        "https://apparel.mdpr.jp/column/fashion_news/12057",
        "apparel.mdpr.jp-column-fashion_news-12057/",
        [
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160640/main4.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160643/sub14.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160719/sub9.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160638/sub10.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160646/sub24.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160652/sub34.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160658/sub42.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160701/sub53.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160706/sub63.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160710/sub71.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160714/sub8.jpg",
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test apparel.mdpr.jp photo page", async () => {
    await testDirectDownload(
        browser,
        "https://apparel.mdpr.jp/photo/12057",
        "apparel.mdpr.jp-photo-12057/",
        [
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160640/main4.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160643/sub14.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160719/sub9.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160638/sub10.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160646/sub24.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160652/sub34.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160658/sub42.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160701/sub53.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160706/sub63.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160710/sub71.jpg",
            "https://s3-ap-northeast-1.amazonaws.com/image.apparel.mdpr.jp/wordpress/wp-content/uploads/2020/02/14160714/sub8.jpg",
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});
