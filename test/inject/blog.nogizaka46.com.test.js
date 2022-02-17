const {testDirectDownload, getBrowserFactory, launchBrowser, dummyItems} = require("./testbase");

let browserFactory = getBrowserFactory(beforeAll, afterAll);

test("Image url is in href of parent A node and hosted on awalker.jp", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.nogizaka46.com/s/n46/diary/detail/59749?ima=4135&cd=MEMBER",
        "www.nogizaka46.com-s-n46-diary-detail-59749/",
        [
            {
                "imageUrl": "http://dcimg.awalker.jp/i/hJHudPkiiKXSExaZJEII6FiYDVVyEtK0EggU8SCnkAdmRFkSEcVes8WPLTaPy26PI3UUTGkouTH0Cz2FOPEjh4TSUqQJky0cPqGGDAjG0QO35KH86jts1sIbZRXKAlKhviWDwkeSAwp49arBsPgMIiv9kNWBZMCC4cYJAOSWWICiGixjtcuID73DhI1t7XAZSVCPHmCN.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/hJHudPkiiKXSExaZJEII6FiYDVVyEtK0EggU8SCnkAdmRFkSEcVes8WPLTaPy26PI3UUTGkouTH0Cz2FOPEjh4TSUqQJky0cPqGGDAjG0QO35KH86jts1sIbZRXKAlKhviWDwkeSAwp49arBsPgMIiv9kNWBZMCC4cYJAOSWWICiGixjtcuID73DhI1t7XAZSVCPHmCN"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/MT8nEr6x1kiBJPvXHvl7oaybw1enUNXrT1SHAHAjQZlfEfk9MFFgBJNPL1dp3LDywyMWL5cdLaBhOW9vOCrhUb4mEB9EwFPaAPVtnKo3p8Sp7uQU4JZqvcQ2yFDSgm5vIcrNtSh7AxJPTl2nLiCP1slKASGqlcz8LHdG4VWE48q5UnDzjGemOMpSvIA5byRchSu7KgWf.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/MT8nEr6x1kiBJPvXHvl7oaybw1enUNXrT1SHAHAjQZlfEfk9MFFgBJNPL1dp3LDywyMWL5cdLaBhOW9vOCrhUb4mEB9EwFPaAPVtnKo3p8Sp7uQU4JZqvcQ2yFDSgm5vIcrNtSh7AxJPTl2nLiCP1slKASGqlcz8LHdG4VWE48q5UnDzjGemOMpSvIA5byRchSu7KgWf"
            },
            {
                "imageUrl": "http://dcimg.awalker.jp/i/UKMonHR3vITF0wEtTyHL2N7wvrdaFI2sHfN208KFYst8E0wLpVy00YAYgftYnvRzvsUHUxe9cyhHgbRxm0glf6er06KTbRQwqnC6HkTTqb5wKS8KF49xjbPSdVWyh7lQjyLDdOFGBvMyFNMDoWZmWDng2ssLWcmJHdNUZjaPtyjCLEC3oLNfrjE9LQRz7Z7d9ffhMUNe.jpg",
                "type": "tab",
                "websiteUrl": "http://dcimg.awalker.jp/v/UKMonHR3vITF0wEtTyHL2N7wvrdaFI2sHfN208KFYst8E0wLpVy00YAYgftYnvRzvsUHUxe9cyhHgbRxm0glf6er06KTbRQwqnC6HkTTqb5wKS8KF49xjbPSdVWyh7lQjyLDdOFGBvMyFNMDoWZmWDng2ssLWcmJHdNUZjaPtyjCLEC3oLNfrjE9LQRz7Z7d9ffhMUNe"
            }
        ]
    );
});

test("Image url is in src of IMG node", async () => {
    await testDirectDownload(
        browserFactory(),
        "https://www.nogizaka46.com/s/n46/diary/detail/65304?ima=0131",
        "www.nogizaka46.com-s-n46-diary-detail-65304/",
        [
            "https://www.nogizaka46.com/files/46/diary/n46/MEMBER/0000%20%281%29_2.jpeg"
        ]
    );
});
