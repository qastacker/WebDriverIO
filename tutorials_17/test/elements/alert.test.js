const alertPage = require("../../pages/alertPage");
const { assert } = require("chai");

describe(" Handling alert pop up", function () {
    it(" Accept alert", function () {

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.maximizeWindow();
        browser.pause(2000);
        alertPage.clickOnAlertButton(1);
        const alertText = browser.getAlertText();
        console.log(alertText);
        assert.equal('I am a JS Alert',alertText);
        browser.pause(5000);
        browser.acceptAlert();
        console.log(alertPage.getResultantText())
        assert.equal('You successfuly clicked an alert',alertPage.getResultantText())
        browser.pause(2000);
    });

    it(" Dismiss alert", function () {

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.maximizeWindow();
        browser.pause(2000);
        alertPage.clickOnAlertButton(2);
        const alertText = browser.getAlertText();
        console.log(alertText);
        assert.equal('I am a JS Confirm',alertText);
        browser.pause(5000);
        browser.acceptAlert();
        console.log(alertPage.getResultantText())
        assert.equal('You clicked: Ok',alertPage.getResultantText())
        browser.pause(2000);
    });

    it(" Enter text in alert and accept", function () {

        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        browser.maximizeWindow();
        browser.pause(2000);
        alertPage.clickOnAlertButton(3);
        browser.sendAlertText('This is a sample text');
        browser.pause(5000);
        browser.acceptAlert();
        console.log(alertPage.getResultantText())
        assert.equal('You entered: This is a sample text',alertPage.getResultantText())
        browser.pause(2000);
    });

    it(" Accept alert on Rediff Login Page", function () {

        browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
        browser.maximizeWindow();
        browser.pause(4000);
        const signInBtn = $(`//input[@name='proceed']`)
        signInBtn.waitForDisplayed()
        signInBtn.click();
        const text = browser.getAlertText()
        console.log(text)
        assert.equal('Please enter a valid user name',text)
        browser.acceptAlert();
        browser.pause(2000);
    });

});