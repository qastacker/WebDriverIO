const loginPage = require("../pages/loginpage");
const { assert } = require("chai");

describe("Handle application login", function(){

    it("Enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        browser.maximizeWindow();
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith',loginPage.username.getValue());    
    });

    it("Enter Password", function(){
        loginPage.enterUserPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword',loginPage.password.getValue());    
    });

    it("Click login button", function(){
        loginPage.clickOnLogin();
    });

    it("should clear username", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('',loginPage.username.getValue());

    });
});