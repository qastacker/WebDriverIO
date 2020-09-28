const crmPage = require("../pages/crm.page")

describe(" Scrolling feature", function () {
    it.skip(" Scroll to forgot password", function () {

        browser.url("https://classic.crmpro.com/index.html");
        browser.maximizeWindow();
        browser.pause(5000);
        console.log("in view port",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();

    });

    it(" Scroll to forgot password,move and click", function () {

        browser.url("https://classic.crmpro.com/index.html");
        browser.maximizeWindow();
        browser.pause(5000);
        crmPage.forgotpwdLink.scrollIntoView();
        crmPage.moveToElement(crmPage.forgotpwdLink)
        crmPage.forgotpwdLink.click();

    });
});