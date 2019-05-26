exports.config = {

    directConnect: true,

    // Optipons for the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['e2e/*spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },

    baseUrl: "https://uat.ormuco.com/login" 
};