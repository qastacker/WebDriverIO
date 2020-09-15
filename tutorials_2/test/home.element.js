const homePage = require('../pages/homepage')

describe("home page elements hande", function(){

    it("verify home page elements",function(){

        browser.url("https://www.freshworks.com/")
         let text = homePage.pageHeader.getText();
         console.log(text);
         console.log(homePage.subHeading.getText());
         browser.pause(5000);
         homePage.platformLink.click();
         browser.pause(5000);
    });
});