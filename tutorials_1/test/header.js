describe("interaction with web element", function(){

    it("Get header value in field",function(){
    browser.url('https://www.freshworks.com/');
    const header = $('h1');
    let text = header.getText();
    console.log(text);
    });
});