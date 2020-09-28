# WebDriverIO
This file comprises a test script for automating in WebdriverIO
How to generate allure report in WebDriverIO
How to run test 

1) Install allure-reporter using cmd "npm install @wdio/allure-reporter --save-dev" in your proj
Eg: E:\webdriverio_tutorials>npm install @wdio/allure-reporter --save-dev

2) Check if allure in package.json as `"@wdio/allure-reporter": "^6.5.2"`
    i) It should contain in package.json as:
        "devDependencies": {
            "@rpii/wdio-html-reporter": "^6.1.1",
            "@wdio/allure-reporter": "^6.5.2",
            "@wdio/local-runner": "^6.4.7",
            "@wdio/mocha-framework": "^6.4.7",
            "@wdio/selenium-standalone-service": "^6.4.7",
            "@wdio/spec-reporter": "^6.4.7",
            "@wdio/sync": "^6.4.7",
            "chai": "^4.2.0",
            "chai-webdriverio": "^1.0.0",
            "chromedriver": "^85.0.1",
            "local-runner": "^0.1.1-alpha",
            "wdio-chromedriver-service": "^6.0.4",
            "webdriverio": "^6.4.7"
        },
        "dependencies": {
            "@wdio/cli": "^6.4.7",
            "allure-commandline": "^2.13.0"
        }
    
    ii)Check if allure-commandline is not installed,if not used use cmd :
        "npm install -g allure-commandline --save-dev"

        and check using cmd "allure help" if it's installed or not

********************** NOTE **********************
3) If allure is not found in windows are any errors found like :
    a)'allure' is not recognized as an internal or external command, operable program or batch file in terminal 
    or
    b) allure : File C:\Users\Adol-sys-410\AppData\Roaming\npm\allure.ps1 cannot be loaded because running scripts is disabled on this system
    C) rESOLVED ISSUE FOR ABOVE ERRORS ARE:
      
      i) Then run cmd in Powershell as admin or in terminal and type below cmd:
        "Set-ExecutionPolicy RemoteSigned"
      ii) Then prenn "A",then "Enter"

4)If there is no error,then open windows terminal(Not VisualSTudio terminal) and run below cmd:
        "allure generate && allure open"

5) Then Report successfully generated to allure-report
and then Starting web server... were the user can see all the reports 