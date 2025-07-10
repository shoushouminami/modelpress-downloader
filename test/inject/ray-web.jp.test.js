const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("54526?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/54526?page=1",
        "ray-web.jp-54526/",
        [
            "https://cdn.ray-web.jp/images/98/03/67/65/jpg/zbg2jzvsj2ebj5bahm4voikqpryiyi.webp",
            "https://cdn.ray-web.jp/images/92/45/71/26/jpg/m5kfywqgkgun7ygp7vrs7xodloo7pd.webp",
            "https://cdn.ray-web.jp/images/27/20/68/22/jpg/lttzbnbgwyacaw8lunz9bzq3vf8kjx.webp",
            "https://cdn.ray-web.jp/images/50/32/44/56/jpg/twns3aaxf4bdedihtgwfnkyzs4a8vx.webp"
        ]);
});

test("54526", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/54526",
        "ray-web.jp-54526/",
        [
            "https://cdn.ray-web.jp/images/98/03/67/65/jpg/zbg2jzvsj2ebj5bahm4voikqpryiyi.webp",
            "https://cdn.ray-web.jp/images/92/45/71/26/jpg/m5kfywqgkgun7ygp7vrs7xodloo7pd.webp",
            "https://cdn.ray-web.jp/images/27/20/68/22/jpg/lttzbnbgwyacaw8lunz9bzq3vf8kjx.webp",
            "https://cdn.ray-web.jp/images/50/32/44/56/jpg/twns3aaxf4bdedihtgwfnkyzs4a8vx.webp"
        ]);
});

test("56094?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/56094?page=1",
        "ray-web.jp-56094/",
        [
            "https://cdn.ray-web.jp/images/45/28/04/13/jpg/sdgebx5tbubmqfbpvvaijiwsrpknex.webp",
            "https://cdn.ray-web.jp/images/04/47/29/12/jpg/ultozj3jm962a0zvzqrfimskvjkpng.webp",
            "https://cdn.ray-web.jp/images/96/04/06/98/jpg/v8wlwd4uvhxeh1fzxjxorrjynl1pio.webp",
            "https://cdn.ray-web.jp/images/37/04/42/51/jpg/lc9k18ahvz95t8sq89ju6v0jhxgu78.webp",
            "https://cdn.ray-web.jp/images/40/26/23/73/jpg/hxb2jpkuq9lrx7gduwrw3algk7zqec.webp",
            "https://cdn.ray-web.jp/images/32/04/68/87/jpg/tnrwwxs9b8vazifmsaaeguptl6fgps.webp",
            "https://cdn.ray-web.jp/images/25/87/34/89/jpg/z2wtcjxoeav3q3o3akhri0hhbcze3z.webp",
            "https://cdn.ray-web.jp/images/20/56/01/71/jpg/vynpnejn9yx4tvmgppiiphwe7wb7zv.webp",
            "https://cdn.ray-web.jp/images/66/17/73/49/jpg/ruvabebjwmalnyo8j0gnqgzihubnnh.webp"
        ]);
});

test("142819", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/142819",
        "ray-web.jp-142819/",
        [
            "https://cdn.ray-web.jp/images/78/58/46/64/jpg/acetsonqzctnlwwacdwows027trbcl.webp",
            "https://cdn.ray-web.jp/images/34/49/17/95/jpg/sgryuv1miisytqlsu5nxciktlu4oje.webp",
            "https://cdn.ray-web.jp/images/99/23/18/49/jpg/qmwununvpxfv2aswzzslhum5bh8tlf.webp",
            "https://cdn.ray-web.jp/images/65/84/13/83/jpg/vv2ethnj5e4tbrbooz3chcdaibxm7e.webp",
            "https://cdn.ray-web.jp/images/11/45/64/68/jpg/uk8ofhtusdgvxpm9devezpap1nf5wj.webp",
            "https://cdn.ray-web.jp/images/88/23/94/50/jpg/sb14fmd1nhwc32zjuxvot4epolxrp1.webp",
            "https://cdn.ray-web.jp/images/78/23/42/08/jpg/bqkpcce52x3q4pyeutxkkgklffkwp6.webp"
        ]);
});

test("505952", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/505952",
        "ray-web.jp-505952/",
        [
            "https://cdn.ray-web.jp/images/51/43/16/59/jpg/4x220wpipaw1jwlxmnij1zpcban0yc.webp",
            "https://cdn.ray-web.jp/images/20/71/82/90/jpg/tw9cph5yrbpkoqyxlsdjz4lnwuylbv.webp",
            "https://cdn.ray-web.jp/images/53/47/84/54/jpg/cde5jwgwflh5yjwb52e2xrubo8w6iv.webp",
            "https://cdn.ray-web.jp/images/94/99/49/97/jpg/eqvdblrvy4rix7vfiadyaoff9qln6q.webp"
        ]);
});

test("517515", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/517515",
        "ray-web.jp-517515/",
        [
            "https://cdn.ray-web.jp/images/38/78/81/23/jpg/al2trdqaorvz9zlehorrc6jbibkygl.webp",
            "https://cdn.ray-web.jp/images/81/84/42/25/jpg/n7xzolzu8jqj33gooreogs3vo9rssq.webp",
            "https://cdn.ray-web.jp/images/42/74/30/56/jpg/3p0uf7aijwitkyemxvmqvqrgp6qhra.webp",
            "https://cdn.ray-web.jp/images/84/42/47/27/jpg/spsqv6dqivh213ov5vwaqujo3gkv4e.webp"
        ]);
});

test("517519", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/517519",
        "ray-web.jp-517519/",
        [
            "https://cdn.ray-web.jp/images/56/78/85/43/jpg/pgoaujh5jrxrtfqx8u2tmxybbqa4gn.webp",
            "https://cdn.ray-web.jp/images/40/83/04/25/jpg/t1erimnv2wqp05mxxjdhyfqawenspq.webp",
            "https://cdn.ray-web.jp/images/99/14/41/83/jpg/1urajbrxwviau3fjpglarxiswolzdb.webp",
            "https://cdn.ray-web.jp/images/49/64/10/84/jpg/rzs2oapllbzgtsq7ie9zhyu1mreavx.webp"
        ]);
});
