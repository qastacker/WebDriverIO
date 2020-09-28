# WebDriverIO
This file comprises a test script for automating in WebdriverIO
How to create Test Suites Runners by automating in WebDriverIO
How to run test 


/*****************************How to run suites in terminal******************/

1) Add the suites  in wdio.config.js
 we need to automate after 'specs' under "Specify Test Files"
    For eg:
        // ==================
        // Specify Test Files
        // ==================
        // Define which test specs should run. The pattern is relative to the directory
        // from which `wdio` was called. Notice that, if you are calling `wdio` from an
        // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
        // directory is where your package.json resides, so `wdio` will be called from there.
        //
        specs: [
            './test/**/*.js'
        ],

        suites:{
            elements: [ 
                './test/elements/*.js'
            ],
            waits: [ 
                './test/waits/*.js'
            ]
        },

2) Similarly create the suites in package.json
    We have to add elements and waits under scripts in package.json
    For eg:
        "scripts": {
                    "test": "./node_modules/.bin/wdio wdio.conf.js",
                    "elements": "./node_modules/.bin/wdio wdio.conf.js --suite elements",
                    "waits": "./node_modules/.bin/wdio wdio.conf.js --suite waits"
                    },

3) Specify the full path of pages folder files

4)To run the suites in Terminal :
    i) To run elements: npm run --suite elements or npm run elements
    ii)To run waits: npm run --suite waits or npm run waits

    
