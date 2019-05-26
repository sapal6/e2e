import { browser, ExpectedConditions, ProtractorExpectedCondtiitons } from protractor;

import { LoginPage } from './login.page.po';


describe('Login Page', () => {
    let protractorExpectedCondition: ProtractorExpectedCondtiitons;
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
        it(parameter.description, () =>{
            page.getUserNameField().sendKeys(parameter.invalidUserName);
            page.getPasswordField().sendKeys(parameter.invalidUserName);
            page.getSignInButton().click();

            browser.wait(protractorExpectedCondition.visibilityOf(page.getErrorMessage()), 5000);
            expect(page.getErrorMessage().getText()).toEqual(parameter.errorMessage);
        })
    })


})