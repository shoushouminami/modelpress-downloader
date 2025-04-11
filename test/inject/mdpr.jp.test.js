const {testDirectDownload, getBrowserFactory} = require("./testbase");
const pageutils = require("../pageutils");
const https = require("https");
const browser = getBrowserFactory(beforeAll, afterAll);

test("Test mdpr App API on app2-mdpr.freetls.fastly.net", (resolve, error) => {
    https.get("https://app2-mdpr.freetls.fastly.net/api/images/dialog/article?index=0&image_id=0&article_id=1927015", (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let list = [];
            let payload;
            try {
                payload = JSON.parse(data);
            } catch (e) {
                console.error("Failed parsing JSON: " + e);
            }

            if (payload && payload.list && payload.list.length) {
                for (const item of payload.list) {
                    list.push(item.url);
                }
            }

            expect(list.length).toBe(24);
            resolve();
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        error();
    });
});


test("Test music news page", async () => {
    await testDirectDownload(
        browser(),
        "https://mdpr.jp/music/detail/2576015",
        "mdpr.jp-music-detail-2576015/",
        [
            "https://img-mdpr.freetls.fastly.net/article/1OVO/nm/1OVOzqxHTRK7Nav0IFEzAhinilPC7xlkPLvCJ5QoB7w.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/8WMM/nm/8WMMJ8b4pw-esuoBYFukI5hHdlTA6LCwj6gaJTeTMAY.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/IBIX/nm/IBIXimmJzEjUcRMussBuX7clvchroC937lvMrD4JFhc.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/cPm6/nm/cPm6v2HjgpM0qStzVypXhxcXH4mHhWupF3vLB57Ff88.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Kfnk/nm/KfnkT1qOqXhYuLgbBe2Jc5ymIKXuKuc6dAM0Ww9VaNo.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/JTsC/nm/JTsCOCIeH_2HJjjur9sMWfNkre6MF6GAZdswAho92jk.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/WNRf/nm/WNRffGd7IiW2VWA1foPzRs7JlRBpVYZ44V9dM2U-2lI.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/7O4m/nm/7O4mFnpAB07jEpDv9z0U-oYGI-p18CjzFbtRzcp6XKk.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Tu8j/nm/Tu8jkguMPRF3Q9bUGJlhS00YlFDahnvN5rmJyzOCjNM.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/dmDc/nm/dmDciNMGu3f27l4Py8GSxtqlXjd_w577uNcfYyQ7Xhk.jpg?quality=100"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test music news photo detail page", async () => {
    await testDirectDownload(
        browser(),
        "https://mdpr.jp/photo/detail/9877215",
        "mdpr.jp-photo-detail-9877215/",
        [
            "https://img-mdpr.freetls.fastly.net/article/IBIX/nm/IBIXimmJzEjUcRMussBuX7clvchroC937lvMrD4JFhc.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/1OVO/nm/1OVOzqxHTRK7Nav0IFEzAhinilPC7xlkPLvCJ5QoB7w.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/8WMM/nm/8WMMJ8b4pw-esuoBYFukI5hHdlTA6LCwj6gaJTeTMAY.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/WNRf/nm/WNRffGd7IiW2VWA1foPzRs7JlRBpVYZ44V9dM2U-2lI.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/7O4m/nm/7O4mFnpAB07jEpDv9z0U-oYGI-p18CjzFbtRzcp6XKk.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Tu8j/nm/Tu8jkguMPRF3Q9bUGJlhS00YlFDahnvN5rmJyzOCjNM.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/dmDc/nm/dmDciNMGu3f27l4Py8GSxtqlXjd_w577uNcfYyQ7Xhk.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/cPm6/nm/cPm6v2HjgpM0qStzVypXhxcXH4mHhWupF3vLB57Ff88.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Kfnk/nm/KfnkT1qOqXhYuLgbBe2Jc5ymIKXuKuc6dAM0Ww9VaNo.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/JTsC/nm/JTsCOCIeH_2HJjjur9sMWfNkre6MF6GAZdswAho92jk.jpg?quality=100"
        ]
    );
});

test("Test photo detail page with app photo", async () => {
    let data = await testDirectDownload(
        browser(),
        "https://mdpr.jp/photo/detail/9835727",
        "mdpr.jp-photo-detail-9835727/",
        [
            "https://img-mdpr.freetls.fastly.net/article/M49t/hm/M49t_28oigLBGCFwxeWjTquwXb7k8WmHtO_Wr9tW2Q4.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/p_L0/wm/p_L0QFlqr2wb1b-wAVMSlfRN9EwuygfkInQdoJ1hJUs.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/1cqN/hm/1cqNwY42v9Ezw6f7Mi26TtKJWA9_RqyO6VWnuKX6h04.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/ozR4/hm/ozR4kCux_us3aWXVqiFJeOOqphBmb2bgB-Dj8wz3HdM.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Eos_/hm/Eos_z2MNlS4Po_u2haKLfuyDGyZdRPRKCpUyccNtl6M.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/ft9F/hm/ft9F921G9ktLqsP9huc2Tcup7W7Nmn-zTovhEQMils0.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Kyou/hm/KyouC1n4ctU5ub8DPhjf4LCoXggkeV4Wjpyg3BELtdA.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/nFRO/wm/nFROuJ3atQTOwxgJYEbd7OvsizAwVozQpZQF-p-wm6w.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/AvLT/nm/AvLTtlxtaqGHkkXQn46DCzPkh_pSvrzJ-TIblDW5xME.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/_55G/nm/_55GPwLPM7mG8O86I39HejcZQlrLq77hEVA4S1E4GPI.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/N0Tv/hm/N0Tv36zbBehqlwBm-wr3HMnpn-NQ59eErC1UKCNYah8.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/6Oo7/wm/6Oo7GBlT-gmPXAaLh_Xph29ggQC_JcV1-1kxqUtjLFc.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/0W4P/nm/0W4PZp-QJ92yVFpyWjoYh3yuEmecPnxwTqc1ihczSg4.jpg?quality=100"
        ]
    );
});

test("Test news article page with app photo", async () => {
    let data = await testDirectDownload(
        browser(),
        "https://mdpr.jp/interview/detail/2563180",
        "mdpr.jp-interview-detail-2563180/",
        [
            "https://img-mdpr.freetls.fastly.net/article/M49t/hm/M49t_28oigLBGCFwxeWjTquwXb7k8WmHtO_Wr9tW2Q4.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/p_L0/wm/p_L0QFlqr2wb1b-wAVMSlfRN9EwuygfkInQdoJ1hJUs.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/1cqN/hm/1cqNwY42v9Ezw6f7Mi26TtKJWA9_RqyO6VWnuKX6h04.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/ozR4/hm/ozR4kCux_us3aWXVqiFJeOOqphBmb2bgB-Dj8wz3HdM.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Eos_/hm/Eos_z2MNlS4Po_u2haKLfuyDGyZdRPRKCpUyccNtl6M.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/ft9F/hm/ft9F921G9ktLqsP9huc2Tcup7W7Nmn-zTovhEQMils0.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/Kyou/hm/KyouC1n4ctU5ub8DPhjf4LCoXggkeV4Wjpyg3BELtdA.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/nFRO/wm/nFROuJ3atQTOwxgJYEbd7OvsizAwVozQpZQF-p-wm6w.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/AvLT/nm/AvLTtlxtaqGHkkXQn46DCzPkh_pSvrzJ-TIblDW5xME.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/_55G/nm/_55GPwLPM7mG8O86I39HejcZQlrLq77hEVA4S1E4GPI.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/N0Tv/hm/N0Tv36zbBehqlwBm-wr3HMnpn-NQ59eErC1UKCNYah8.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/6Oo7/wm/6Oo7GBlT-gmPXAaLh_Xph29ggQC_JcV1-1kxqUtjLFc.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/0W4P/nm/0W4PZp-QJ92yVFpyWjoYh3yuEmecPnxwTqc1ihczSg4.jpg?quality=100"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 90);
            }
        }
    );

});

test("Test news article page with instagram photos", async () => {
    await testDirectDownload(
        browser(),
        "https://mdpr.jp/news/detail/2587451",
        "mdpr.jp-news-detail-2587451/",
        [
            {
                regex: /.*\.cdninstagram\.com\/.*/,
                count: 3
            },
            "https://img-mdpr.freetls.fastly.net/article/tyJU/wm/tyJUVAtLPKFIyc6Q-yyf-w395mRFXcZxexrdBWf2EME.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/KO5E/nm/KO5EYh54YA0ydjFEBgshPZb0wr9-o0r8w4SrONMZM_E.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/5n0s/wm/5n0sBCFvkGSiW5J1S26R0-GU_usVGL_RYLAJwEPei4I.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/M0DI/hm/M0DI4VlYIXFSrf4qhVc5R726xdT7G2CIWHUj_mD6gII.jpg?quality=100",
            "https://img-mdpr.freetls.fastly.net/article/8csb/wm/8csbx2G96VxNFJkf_pUvJXRPFS7_-8xQFqq1FewzC4E.jpg?quality=100"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 90);
            }
        }
    );
});
