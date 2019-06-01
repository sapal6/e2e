"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const selenium_webdriver_1 = require("selenium-webdriver");
class LoginPage {
    navigateTo() {
        return protractor_1.browser.driver.get("https://uat.ormuco.com/login");
    }
    getUserNameField() {
        return protractor_1.element(selenium_webdriver_1.By.id('username'));
    }
    getPasswordField() {
        return protractor_1.element(selenium_webdriver_1.By.id('password'));
    }
    getSignInButton() {
        return protractor_1.element(selenium_webdriver_1.By.xpath('//*[@id="login_form"]/ng-form/div[3]/div[2]/button'));
    }
    getErrorMessage() {
        return protractor_1.element(selenium_webdriver_1.By.xpath('//*[@id="login_form"]/ng-form/div[3]/div[1]/div/div/span'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2UucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUQ7QUFDakQsMkRBQXdDO0FBRXhDLE1BQWEsU0FBUztJQUVsQixVQUFVO1FBQ04sT0FBTyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtJQUM3RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxvQkFBTyxDQUFDLHVCQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sb0JBQU8sQ0FBQyx1QkFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxvQkFBTyxDQUFDLHVCQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sb0JBQU8sQ0FBQyx1QkFBRSxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUVKO0FBdEJELDhCQXNCQyJ9