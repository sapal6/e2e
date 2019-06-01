import { browser, ExpectedConditions, ProtractorExpectedConditions } from "protractor";

import { LoginPage } from "./login.page.po";

describe('Login Page', () => {
    let protractorExpectedCondition: ProtractorExpectedConditions;
    const page = new LoginPage();

    protractorExpectedCondition = ExpectedConditions;
    
    beforeEach(async () => {
        await page.navigateTo();
    })

    const parameters = [{
        description: 'should display correct error message when invalid credentials are entered',
        invalidUserName: 'testuser@gmail.com',
        invalidPassword: 'testpassword',
        errorMessage: 'The user or password is incorrect.'
    }];

    parameters.forEach(async parameter => {
        it(parameter.description, async function() {
            
            page.getUserNameField().sendKeys(parameter.invalidUserName);
            page.getPasswordField().sendKeys(parameter.invalidUserName);
            page.getSignInButton().click();

            const errorMessage = await page.getErrorMessage().getText();
            browser.wait(protractorExpectedCondition.visibilityOf(page.getErrorMessage()), 8000);
            expect(errorMessage).toEqual(parameter.errorMessage);
        })
    })
})