describe(" Dropdown feature", function () {
    it(" Select dropdown value by text", function () {
        browser.url("https://www.spicejet.com/");
        browser.maximizeWindow();
        $("//span[contains(text(),'Hotels')]").click();
        browser.pause(5000);
        $('#ddl_Adult_MST').selectByVisibleText('5');
        $('#ddl_Child_MST').selectByVisibleText('3');
        $('#ddl_Infant_MST').selectByVisibleText('1');
        browser.pause(5000);
    });

    it(" Select drop down by index", function () {
        browser.url("https://spicejet.com/");
        browser.maximizeWindow();
        $("//span[contains(text(),'Hotels')]").click();
        browser.pause(3000);
        $('#ddl_Adult_MST').selectByIndex(7);
        $('#ddl_Child_MST').selectByIndex(4);
        $('#ddl_Infant_MST').selectByIndex(1);
        browser.pause(5000);
    });

    it(" Select drop down by attribute value", function () {
        browser.url("https://spicejet.com/");
        browser.maximizeWindow();
        $("//span[contains(text(),'Hotels')]").click();
        browser.pause(3000);
        $('#ddl_Adult_MST').selectByAttribute('value',8);
        $('#ddl_Child_MST').selectByAttribute('value',3);
        $('#ddl_Infant_MST').selectByAttribute('value',2);
        browser.pause(5000);
    });
});