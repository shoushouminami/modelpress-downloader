const https = require('https');

test("Test mdpr App API on app2-mdpr.freetls.fastly.net", async (resolve, error) => {
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
            console.log(payload)
            resolve();
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        error();
    });
});

test("Test mdpr App API on app-mdpr.freetls.fastly.net should fail", done => {
    https.get("https://app-mdpr.freetls.fastly.net/api/images/dialog/article?index=0&image_id=0&article_id=1927015", (resp) => {
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
                done();
            }

            console.log(payload);
            if (payload) {
                done("Should fail to parse JSON");
            }
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        done("should not err");
    });
});

test("Test mdpr App API on app1-mdpr.freetls.fastly.net", done => {
    https.get("https://app1-mdpr.freetls.fastly.net/api/images/dialog/article?index=0&image_id=0&article_id=1927015", (resp) => {
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
                done();
            }

            console.log(payload);
            if (payload) {
                done("Should fail to parse JSON");
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
        done("should not err");
    });
});


