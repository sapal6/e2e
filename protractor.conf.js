exports.config = {

    directConnect: true,

    // Optipons for the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['./../login.e2e.spec.ts'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },

    baseUrl: "https://uat.ormuco.com/login" 
};