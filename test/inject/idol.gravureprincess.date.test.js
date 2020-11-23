const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test apress.jp article with only embeded image", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://idol.gravureprincess.date/2020/11/saito-asuka-friday-20201204-20201204.html",
        "idol.gravureprincess.date-2020-11-saito-asuka-friday-20201204-20201204.html/",
        [
                "https://1.bp.blogspot.com/-nvmjEzg9XRM/X7ij7YoxWcI/AAAAAAABZsE/nNG7B-D9OUAYRxiEHTA2__TQiYOhIKlQACLcBGAsYHQ/s0/000.jpg",
                "https://1.bp.blogspot.com/-GdOOmIm6yeg/X7ij8X7SVGI/AAAAAAABZsM/yWDyZXXoe5QiuKj2TzqhAQppR2JUewWJwCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25281%2529.jpg",
                "https://1.bp.blogspot.com/-ftZsLqMeKgY/X7ij-IQagiI/AAAAAAABZsY/dwBT2rGwm8M4uS6bMmxWFO9NIOBf_qiOwCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25282%2529.jpg",
                "https://1.bp.blogspot.com/-i5L7i0pgcrg/X7ij-1jl3nI/AAAAAAABZsc/RRgwvxY3XyARzotlIrz-nK5w135ddK9JgCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25283%2529.jpg",
                "https://1.bp.blogspot.com/-yezHDwv76No/X7ij-zrmPJI/AAAAAAABZsg/9eFdRMxwx9w0ksGCy8IMKxjXpm7FY9EBgCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25284%2529.jpg",
                "https://1.bp.blogspot.com/-pKQ6vmpBxRk/X7ij_u8fdAI/AAAAAAABZsk/FDrEmDgWSV4-XOfr3OleaCbt6-CvlPuRwCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25285%2529.jpg",
                "https://1.bp.blogspot.com/-CzuKYibn260/X7ikAn4dmDI/AAAAAAABZso/FvWB4mTTxu87iZWovz1CgGOjLZiNWRHJACLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25286%2529.jpg",
                "https://1.bp.blogspot.com/-w1Eat84miow/X7ikA_ZkkCI/AAAAAAABZss/t2tQr6VUsLQiPo6zXnvvXw4T6ibJ3urVQCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25287%2529.jpg",
                "https://1.bp.blogspot.com/-9DQ--pRVxeU/X7ikBK6BLBI/AAAAAAABZsw/VuQ95Ujby9wF32_nXtI9nlHiqaEhtqPnQCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25288%2529.jpg",
                "https://1.bp.blogspot.com/-wdBaEwxyjlw/X7ikBybcSKI/AAAAAAABZs0/GDScOVtjQOwqWP5_SU8vBlwEWeSv8wfqACLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%25289%2529.jpg",
                "https://1.bp.blogspot.com/-Wq4CRpjSPy8/X7ij8Zi1QsI/AAAAAAABZsI/5Lg3uCo2ibMmH28TfV-CtQFZqfmfU8GVgCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%252810%2529.jpg",
                "https://1.bp.blogspot.com/-LTVEG2mwUDs/X7ij8sq9g9I/AAAAAAABZsQ/QhJ-DFEkcrI44zLkLTF4lgzEekS7VedPgCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%252811%2529.jpg",
                "https://1.bp.blogspot.com/-ILrJjHvcq8E/X7ij9RIR9-I/AAAAAAABZsU/fUiDpWon9iUGx38ogIZlYu0vtLgxtzDngCLcBGAsYHQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5%2B%252812%2529.jpg"
        ]
    );
});
