const { assert } = require("chai");

describe(" Handling Wait using WaitUntil", function () {
    it.skip(" wait for button enabled", function () {
        browser.url("https://app.hubspot.com/login");
        browser.maximizeWindow();
        browser.pause(2000);

        const emailAddr = $('#username')
        const passwrd = $('#password')
        const loginbtn = $('#loginBtn')

        browser.waitUntil(function () {
            return emailAddr.isDisplayed() === true
        }, 6000, 'email is not displayed after waiting')

        emailAddr.setValue('az143bf@gmail.com')
        passwrd.setValue('Devtest123@')
        loginbtn.click()
    });

    it(" wait for Dashboard displayed", function () {
        browser.url("https://account.hubstaff.com/login");
        browser.maximizeWindow();
        browser.pause(2000);

        const emailAddr = $('#user_email')
        const passwrd = $('#user_password')
        const loginbtn = $(`//button[@name='button']`)
        const openAcc = $(`//a[@class='btn btn-success btn-block']`)

        emailAddr.setValue('gyousif.rahma.3@burgas.vip')
        passwrd.setValue('Devtest123@')
        loginbtn.click()

        openAcc.waitForExist(4000)
        assert.equal(true, openAcc.isExisting())

        openAcc.click()
        browser.pause(4000);
        browser.switchWindow('https://app.hubstaff.com/dashboard/285895/team')
        const headr = $(`//h2[@class='page-heading gs-open']`)

        browser.waitUntil(function () {
            return headr.getText() === 'Dashboard\nMon, Sep 21, 2020 - Sun, Sep 27, 2020' 
                && browser.getTitle() === 'Hubstaff - Dashboard'
        }, 6000, 'Header or Title is not displayed after waiting time')

        console.log(headr.getText())
        assert.equal('Dashboard\nMon, Sep 21, 2020 - Sun, Sep 27, 2020', headr.getText())
        browser.pause(3000)

        // browser.waitUntil(function () {
        //     return browser.getTitle() === 'Hubstaff - Dashboard'
        // }, 6000, 'Header is not displayed after waiting')

        console.log(browser.getTitle())
        assert.equal('Hubstaff - Dashboard', browser.getTitle())
        browser.pause(3000)
    });
}); 