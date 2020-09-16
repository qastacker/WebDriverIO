const blazeHomePage = require("../pages/blazemeter")

describe("blaze page elements", function(){

    it("get all elements", function(){
 
        browser.url('https://blazemeter.com/');
        browser.maximizeWindow();
        browser.pause('5000');
        blazeHomePage.getTextForLi;
        browser.pause('5000');
        blazeHomePage.useCasesElementsText;

        console.log('the link is : ', blazeHomePage.specificHeaderChildElement(3).getText());
        blazeHomePage.specificHeaderChildElementText(2);
        console.log('the linked element is : ', blazeHomePage.specificFooterChildElement(4).getText());
        blazeHomePage.specificFooterChildElementText(6);
    })
});