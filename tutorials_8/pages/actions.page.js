class Spicejet{

    get loginSignupLink(){ return $('#ctl00_HyperLinkLogin')}
    get spiceClubMem(){ return $('=SpiceClub Members')}
    get memberLogin(){ return $('=Member Login')}

    get search(){ return $('#target')}
    get result(){ return $('#result')}

    enterSearch(text){
        this.search.waitForDisplayed();
        this.search.setValue(text);
    }

    getResultLabelText(){
        this.result.waitForDisplayed();
        return this.result.getText();
    }
     

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

    clickElement(element){
        element.waitForDisplayed();
        element.click();
    }

}
module.exports = new Spicejet(); 