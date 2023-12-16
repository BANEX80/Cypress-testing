import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A user is on the quales login page", () => {
loginPage.visitQualeesWebApp();
});

When("A user types in correct username and password", () => {
    loginPage.typeUsernameAndPassword();
    loginPage.clickLoginButton();
});

Then("User should be logged into the web app", () => {
loginPage.verifySuccessfulLogin();
});