class LoginPage{

    get username() { return $('#username')}
    get password() { return $('#password')}
    get loginButton() { return $('button')}

    enterUserName(text){
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }

    enterUserPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickOnLogin(){
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }
}
module.exports = new LoginPage(); 