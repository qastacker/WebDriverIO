const blazeHomePage = require("../pages/blazemeter")

describe("blaze page elements", function(){

    it("get all elements", function(){
 
        browser.url('https://blazemeter.com/');
        browser.maximizeWindow();
        browser.pause('5000');
        blazeHomePage.getTextForLi;
        browser.pause('5000');
        blazeHomePage.useCasesElementsText;

    })
});