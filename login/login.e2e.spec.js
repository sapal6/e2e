"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_page_po_1 = require("./login.page.po");
describe('Login Page', () => {
    let protractorExpectedCondition;
    const page = new login_page_po_1.LoginPage();
    protractorExpectedCondition = protractor_1.ExpectedConditions;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield page.navigateTo();
    }));
    const parameters = [{
            description: 'should display correct error message when invalid credentials are entered',
            invalidUserName: 'testuser@gmail.com',
            invalidPassword: 'testpassword',
            errorMessage: 'The user or password is incorrect.'
        }];
    parameters.forEach((parameter) => __awaiter(this, void 0, void 0, function* () {
        it(parameter.description, function () {
            return __awaiter(this, void 0, void 0, function* () {
                page.getUserNameField().sendKeys(parameter.invalidUserName);
                page.getPasswordField().sendKeys(parameter.invalidUserName);
                page.getSignInButton().click();
                const errorMessage = yield page.getErrorMessage().getText();
                protractor_1.browser.wait(protractorExpectedCondition.visibilityOf(page.getErrorMessage()), 8000);
                expect(errorMessage).toEqual(parameter.errorMessage);
            });
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZTJlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi5lMmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXVGO0FBRXZGLG1EQUE0QztBQUk1QyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUN4QixJQUFJLDJCQUF5RCxDQUFDO0lBQzlELE1BQU0sSUFBSSxHQUFHLElBQUkseUJBQVMsRUFBRSxDQUFDO0lBRTdCLDJCQUEyQixHQUFHLCtCQUFrQixDQUFDO0lBRWpELFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDbEIsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLE1BQU0sVUFBVSxHQUFHLENBQUM7WUFDaEIsV0FBVyxFQUFFLDJFQUEyRTtZQUN4RixlQUFlLEVBQUUsb0JBQW9CO1lBQ3JDLGVBQWUsRUFBRSxjQUFjO1lBQy9CLFlBQVksRUFBRSxvQ0FBb0M7U0FDckQsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFNLFNBQVMsRUFBQyxFQUFFO1FBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFOztnQkFFdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUUvQixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUQsb0JBQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=