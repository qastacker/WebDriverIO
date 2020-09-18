describe("Page action feature", function () {
    it("move to element", function () {
        browser.url("https://jqueryui.com/resources/demos/droppable/default.html");
        browser.maximizeWindow();
        browser.pause(5000);
        
       //const scrollElement = $("//p[@class='desc']");
       const sourceElement = $('#draggable');
       const targetElement = $('#droppable');

       //scrollElement.scrollIntoView();
       sourceElement.dragAndDrop(targetElement, 10);
       browser.pause(5000);

    });
});