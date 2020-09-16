const blazeHomePage = require("../pages/blazemeter")

describe("blaze page elements", function(){

    it("get all elements", function(){
 
        browser.url('https://blazemeter.com/');
        browser.maximizeWindow();
        browser.pause('5000');
        blazeHomePage.getTextForLi;
        // browser.pause('5000');
        // blazeHomePage.useCasesElementsText;

        // console.log('the link is : ', blazeHomePage.specificHeaderChildElement(3).getText());
        // blazeHomePage.specificHeaderChildElementText(2);
        // console.log('the linked element is : ', blazeHomePage.specificFooterChildElement(4).getText());
        // blazeHomePage.specificFooterChildElementText(6);
    })

    it("Main heading is dislayed?", function(){
        console.log(blazeHomePage.mainHeader.isDisplayed());
    })

    it("Main heading is enabled?", function(){
        console.log(blazeHomePage.mainHeader.isEnabled());
    })

    it("Does main heading exist?", function(){
        console.log(blazeHomePage.mainHeader.isExisting());
    })

    it("Does main heading is displayed in view port?", function(){
        console.log(blazeHomePage.mainHeader.isDisplayedInViewport());
    })

    it("Does mock Service link is displayed?", function(){
        console.log(blazeHomePage.mockServics.isDisplayedInViewport());
    })

    it("Click on product link if displayed?", function(){
       blazeHomePage.clickOnProductLink();
       browser.pause(5000);
    })
});