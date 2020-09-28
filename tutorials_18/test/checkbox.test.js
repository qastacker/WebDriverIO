const internetPage = require("../pages/internetpage");
const { expect } = require("chai");

describe("Handle checkbox", function(){

    it("Check the base url", function(){
        browser.url("/");
        browser.maximizeWindow();
        //expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
    })

    it("Check the checkbox page header", function(){
        browser.url("/");
        browser.maximizeWindow();
        browser.pause('5000');
        internetPage.clickOnLink(6);
        browser.pause('5000');
        internetPage.header.waitForDisplayed();
        const text = internetPage.header.getText();
        expect(text).equals("Checkboxes");
    })

    it("should click on checkbx", function(){
 
        browser.url('/');
        browser.maximizeWindow();
        browser.pause('5000');
        internetPage.clickOnLink(6);
        browser.pause('5000');
        internetPage.header.waitForDisplayed();
        internetPage.clickOnCheckbox(1);

        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);  //assertion
        browser.pause('5000');
    })

    it("Check the checkbox page url", function(){
        browser.url("/");
        browser.maximizeWindow();
        browser.pause('5000');
        internetPage.clickOnLink(6);
        browser.pause('5000');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    })
})