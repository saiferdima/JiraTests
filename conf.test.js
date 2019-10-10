let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    seleniumAddress: 'http://127.0.0.1:9515/',
    framework: 'jasmine',
    allScriptsTimeout: 100000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000000
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'prefs': {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false
                }
            },
           'args': ['start-maximized']
        }

        //'browserName': 'internet explorer'
        //'browserName': 'firefox'
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false)
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                consolidate: true,
                consolidateAll: true,
                savePath: 'reports/'
            })
        );
        //
        // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //     consolidate: true,
        //     consolidateAll: true,
        //     savePath: 'junitreports',
        //     filePrefix: 'xmloutput'
        // }));
    },
    specs: [
        'Specs/**/*.js'

    ],
    baseUrl: 'http://10.10.7.112:17101',
    dashboardUrl: '/secure/Dashboard.jspa',

    params : {
        testUserLogin: 'admin',
        testUserPassword: '',
        elementDefaultWaitTime: 5000,
        // authorizePageUrl: "authorize",
        // profilePageUrl: "user/profile"
    }
};