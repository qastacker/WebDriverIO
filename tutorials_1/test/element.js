describe("interaction with web element", function(){

    it("enter value in field",function(){
    browser.url('/');
    const search = $('#twotabsearchtextbox');
    search.setValue('Iphone XR');
    browser.pause(5000);
    const search_icon = $('input.nav-input');
    search_icon.click();
    browser.pause(5000);
    });

    it("Get text field",function(){    
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    
    });

    it("Click on search field",function(){    
        browser.url('/');
        const search_icon = $('input.nav-input');
        search_icon.click();
        browser.pause(5000);
    });

});