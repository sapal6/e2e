import { browser, element } from 'protractor';
import { By } from "selenium-webdriver";

export class LoginPage{
    
    navigateTo(){
        return browser.driver.get("https://uat.ormuco.com/login")
    }

    getUserNameField(){
        return element(By.id('username'));
    }

    getPasswordField(){
        return element(By.id('password'));
    }

    getSignInButton(){
        return element(By.xpath('//*[@id="login_form"]/ng-form/div[3]/div[2]/button'));
    }

    getErrorMessage(){
        return element(By.xpath('//*[@id="login_form"]/ng-form/div[3]/div[1]/div/div/span'));
    }

}