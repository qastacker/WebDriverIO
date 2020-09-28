const loginPage = require("../pages/loginpage");
const loginData = require("../testdata/logindata");
const { assert } = require("chai");

describe("Handle application login", function(){

    it("Enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        browser.maximizeWindow();
        loginPage.enterUserName(loginData.username);
        assert.equal(loginData.username,loginPage.username.getValue());    
    });

    it("Enter Password", function(){
        loginPage.enterUserPassword(loginData.password);
        assert.equal(loginData.password,loginPage.password.getValue());    
    });

    it("Click login button", function(){
        loginPage.clickOnLogin();
    });

    it.skip("should clear username", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('',loginPage.username.getValue());

    });
});