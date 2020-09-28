class CRMPage{

    get forgotpwdLink(){
        return $('=Forgot Password?');
    }

    moveToElement(ele){
        ele.waitForDisplayed();
        ele.moveTo();
    }
}
module.exports = new CRMPage();