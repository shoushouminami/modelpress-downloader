const {testDirectDownload, resolvePath, launchBrowser} = require("./testbase");
const pageutils = require("../pageutils");

let browser;
beforeAll(async () => {
    browser = await launchBrowser();
});

afterAll(async () => {
    await browser.close();
});

test("Test spice.eplus.jp images page", async () => {
    await testDirectDownload(
        browser,
        "https://spice.eplus.jp/articles/264390/images/811327",
        "spice.eplus.jp-articles-264390-images-811327/",
        ["https://spice.eplus.jp/images/utpB1FdcWOGlN0DJLlfjN2B7U5BKIuxlLQ0pW2kEJd5lrWh6a7cZVuQkqGkB2LfE",
            "https://spice.eplus.jp/images/IMntr6jQBRgjtc3cteh2i9bKlQ9acOo6zxOCO7TMeSMsk3jAFwJ4viG3fMPBy6Oz",
            "https://spice.eplus.jp/images/bbr5Mg3eXHNGqra1duHmyIVi9YpHF40bbEYHOFBO29vXb4kvEELld9GrrLxj2FH4",
            "https://spice.eplus.jp/images/hgKfYRVyjFtquTHj2UiFoVLr8yW2hA8zXgG5YNtfvF6PXBqRIzGuMY4sj8bWr2QV",
            "https://spice.eplus.jp/images/IaGQLUNAWyfuspzryq0L2qxoz8Lbhap0uCTgo1BRyfjdwchplyofgqd67PrHC70E",
            "https://spice.eplus.jp/images/QSnDFCUJO2jL5SMmkTJwpoLJdzGZQYYFB2rf6drUzBZKFMMaYN6GTCRiT96wZQhV",
            "https://spice.eplus.jp/images/rIZxrAxtJCZ7sriLPecd5OAB3GnfGFVv0amwKRtuFL8zTOb0XDaleM6wwEVsyVFr"],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test spice.eplus.jp article page", async () => {
    await testDirectDownload(
        browser,
        "https://spice.eplus.jp/articles/264390",
        "spice.eplus.jp-articles-264390/",
        ["https://spice.eplus.jp/images/utpB1FdcWOGlN0DJLlfjN2B7U5BKIuxlLQ0pW2kEJd5lrWh6a7cZVuQkqGkB2LfE",
            "https://spice.eplus.jp/images/IMntr6jQBRgjtc3cteh2i9bKlQ9acOo6zxOCO7TMeSMsk3jAFwJ4viG3fMPBy6Oz",
            "https://spice.eplus.jp/images/bbr5Mg3eXHNGqra1duHmyIVi9YpHF40bbEYHOFBO29vXb4kvEELld9GrrLxj2FH4",
            "https://spice.eplus.jp/images/hgKfYRVyjFtquTHj2UiFoVLr8yW2hA8zXgG5YNtfvF6PXBqRIzGuMY4sj8bWr2QV",
            "https://spice.eplus.jp/images/IaGQLUNAWyfuspzryq0L2qxoz8Lbhap0uCTgo1BRyfjdwchplyofgqd67PrHC70E",
            "https://spice.eplus.jp/images/QSnDFCUJO2jL5SMmkTJwpoLJdzGZQYYFB2rf6drUzBZKFMMaYN6GTCRiT96wZQhV",
            "https://spice.eplus.jp/images/rIZxrAxtJCZ7sriLPecd5OAB3GnfGFVv0amwKRtuFL8zTOb0XDaleM6wwEVsyVFr"],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});

test("Test spice.eplus.jp article page with extra small images", async () => {
    await testDirectDownload(
        browser,
        "https://spice.eplus.jp/articles/265387",
        "spice.eplus.jp-articles-265387/",
        ["https://spice.eplus.jp/images/VipomVaQl09y0rXLVGNoS6iGYM04182atld4QaHaPH7cZOskAALT3Nb28Lk2C1KO",
            "https://spice.eplus.jp/images/tSqnK7bsJ2q5loAJRFmtz3luYGHbmpTN1ePgPimNq65Bl5h6oXeCtY4QqRj5NiSh",
            "https://spice.eplus.jp/images/OCzZK9Gz9ilEVsmP0mnCU1elwT47HRG4HVVHyJKpEEX4B6tr8JIfRuzMscOyavW3"],
        {
            preinject: async function (page) {
                await pageutils.scrollTo(page, 80);
            }
        });
});
