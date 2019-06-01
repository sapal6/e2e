
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

    // Optipons for the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['login/*.e2e.spec.js', 'login/*.page.po.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000
    },
    
  onPrepare: function(){

    jasmine.getEnv().addReporter(new SpecReporter({

      displayFailuresSummary: true,

      displayFailuredSpec: true,

      displaySuiteNumber: true,

      displaySpecDuration: true

    }));

  },

    baseUrl: "https://uat.ormuco.com/login" ,
};

