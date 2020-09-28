# WebDriverIO
This file comprises a test script for automating in WebdriverIO
How to Configure Environment URL's by automating in WebDriverIO
How to run test 

1) Create an url.js file containing different URL's 
2) To Import URL's, use below code in wdio.config.js:

    const url = require('./urls')
    const ENV = process.env.ENV

    if(!ENV || !['qa', 'dev', 'stage', 'prod'].includes(ENV)){
        console.log('please pass the correct ENV value : ENV=qa|dev|stage|prod')
        process.exit()
    }

3) Change the base URL in wdio.config.js:

    baseUrl: url[process.env.ENV]

4) To run the particular URL file, open window command prompt

    for eg:

        i)First set the ENV=qa
            "set ENV=qa"
        ii)Then run the npm file as
            "npm test -- --spec YourFilePath/url.test.js"

    It is beacuse for windows setting the environment variable process is diffrent.

5) Similarly, to run the different URL file, open window command prompt

    for eg:

        i)First set the ENV=stage
            "set ENV=stage"
        ii)Then run the npm file as
            "npm test -- --spec ./test/elements/url.test.js"

    It is beacuse for windows setting the environment variable process is diffrent.

/********************** NOTE ****************************/
Before run test script set ENV='<The urls which u need to automate>'