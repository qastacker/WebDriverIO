const { assert } = require("chai");

describe(" Handling Wait for Enabled", function () {
    it.skip(" wait for button enabled", function () {

        browser.url("https://classic.crmpro.com/register/");
        browser.maximizeWindow();
        browser.pause(2000);
        const checkbox = $(`//input[@name='agreeTerms']`)
        const Btn = $(`#submitButton`)
        $(`//small[contains(text(),'You must agree to the Terms and Conditions before')]`).moveTo();
        checkbox.click();
        Btn.waitForEnabled(4000);
        assert.equal(true,Btn.isEnabled())
        browser.pause(4000);
    });

    it(" wait for button disabled", function () {

        browser.url("https://classic.crmpro.com/register/");
        browser.maximizeWindow();
        browser.pause(2000);

        const checkbox = $(`//input[@name='agreeTerms']`)
        const Btn = $('#submitButton')
        checkbox.waitForDisplayed(10000)
        checkbox.click();

        Btn.waitForEnabled(4000);
        assert.equal(true, Btn.isEnabled())

        browser.pause(4000);
        checkbox.click();
        //Btn.waitForEnabled(4000, true);
        assert.equal(false, Btn.isEnabled())
    });
});