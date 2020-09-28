const blazePage = require("../../pages/blazemeter")

describe("blaze page elements actions", function () {
    

    it("check page url", function () {
        browser.url("https://www.blazemeter.com/");
        expect(browser.getUrl()).equals("https://www.blazemeter.com/");
    });

    it("verify main header text", function () {
        browser.url("https://www.blazemeter.com/");
        browser.maximizeWindow();
        expect(blazePage.productLink.getText()).equals("PRODUCT");
    });

    it("click on product link", function () {
        browser.url("https://www.blazemeter.com/");
        browser.maximizeWindow();
        blazePage.productLink.click();
        browser.url("https://www.blazemeter.com/");
        browser.maximizeWindow();
        blazePage.clickOnProductLink();
    })
});