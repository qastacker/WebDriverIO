describe(" Handling Wait for button using waitForExist", function () {
    it.skip(" wait for button enabled", function () {
        browser.url("https://the-internet.herokuapp.com/add_remove_elements/");
        browser.maximizeWindow();
        browser.pause(2000);
        const addElemnt = $(`//button[contains(text(),'Add Element')]`)
        const deleteBtn = $(`//button[contains(text(),'Delete')]`)

        addElemnt.waitForDisplayed()
        addElemnt.click()

        deleteBtn.waitForExist(4000)
        assert.equal(true, deleteBtn.isExisting())
        
        deleteBtn.click()
        assert.equal(false, deleteBtn.isExisting())
        browser.pause(3000)
    });

    it(" wait for preview button", function () {
        browser.url("https://app.hubspot.com/login");
        browser.maximizeWindow();
        browser.pause(2000);
        const emailAddr = $('#username')
        const passwrd = $('#password')
        const loginbtn = $('#loginBtn')

        emailAddr.waitForDisplayed()
        emailAddr.setValue('az143bf@gmail.com')
        passwrd.setValue('Devtest123@')        
        loginbtn.click()

        $('nav-primary-contacts-branch').waitForDisplayed()
        $('nav-primary-contacts-branch').click()
        $('nav-secondary-contacts').waitForDisplayed()
        $('nav-secondary-contacts').click()

        const prevBtn = $(`//span[text()='Samp media']//ancestor::a//following-sibling::span/button`)
        prevBtn.moveTo()
        prevBtn.waitForExist(3000)
        prevBtn.waitForDisplayed()
        prevBtn.click()

        browser.click(3000)



    });
});
