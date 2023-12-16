class LoginPage {
    elements = {
        openWebApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        addCourseBtn: () => cy.contains("Add Course"),
    };

    visitQualeesWebApp() {
        this.elements.openWebApp();
    }

    typeUsernameAndPassword() {
        this.elements.usernameInputField().type("ay@mail.com");
        this.elements.passwordInputField().type("pass1234");
    }

    clickLoginButton() {
        this.elements.loginBtn().click();
    }

    verifySuccessfulLogin() {
        this.elements.addCourseBtn().should("be.visible")
    }
}

export const loginPage = new LoginPage();