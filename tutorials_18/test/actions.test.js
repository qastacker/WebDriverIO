const actionsPage = require("../pages/actions.page");
const { assert } = require("chai");

describe("Page action feature", function () {
    it("move to element", function () {
        browser.url("https://www.spicejet.com");
        browser.maximizeWindow();
        actionsPage.moveToElement(actionsPage.loginSignupLink);
        actionsPage.moveToElement(actionsPage.spiceClubMem);
        actionsPage.moveToElement(actionsPage.memberLogin);
        browser.pause(5000);

    });

    it("KEYS action perform Tab", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses?");
        actionsPage.enterSearch("Tab");
        const text = actionsPage.getResultLabelText();
        console.log(text);
        assert.equal("You entered: TAB", text);
        browser.pause(5000);
    });

    it("KEYS action perform SHIFT", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses?");
        actionsPage.enterSearch("Shift");
        const text = actionsPage.getResultLabelText();
        console.log(text);
        assert.equal("You entered: SHIFT", text);
        browser.pause(5000);
    });

    it("KEYS action perform F1", function () {
        browser.url("https://the-internet.herokuapp.com/key_presses?");
        actionsPage.enterSearch("F1");
        const text = actionsPage.getResultLabelText();
        console.log(text);
        assert.equal("You entered: F1", text);
        browser.pause(5000);
    });
});
