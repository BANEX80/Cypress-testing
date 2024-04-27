class CreateCoursePage {
    elements = {
        openWebApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        addCourseBtn: () => cy.contains("Add Course"),
        titleInputField: () => cy.get('[data-testid="Title*"]'),
        descriptionInputField: () => cy.get('[data-testid="Description*"]'),
        categorySelectionDropdown: () => cy.get('#demo-simple-select'),
        selectQualityAssurance: () => cy.get('[data-value="1"]'),
        premiumCourse: () => cy.get('[data-testid="isPremium"]'),
        imageUrl: () => cy.get('[data-testid="ImageURL"]'),
        offlineBtn: () => cy.get('[data-testid="offline"]'),
        onlineBtn: () => cy.get('[data-testid="online"]'),
        offlineAddressINputField: () => cy.get('[data-testid="Address*"]'),
        toAddCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),



};
    clickOnAddCourseBtn () {
        this.elements.openWebApp();
        this.elements.usernameInputField().type("ay@mail.com");
        this.elements.passwordInputField().type("pass1234");
        this.elements.loginBtn().click();
      this.elements.addCourseBtn().click();
    }
    fillTheFields () {
        this.elements.titleInputField().type("Cypress Testing 001",{force:true});
        this.elements.descriptionInputField().type("Trying to get better at cypress",{force:true});
        this.elements.categorySelectionDropdown().click();
        this.elements.selectQualityAssurance().click();
        // this.elements.premiumCourse().check();
        this.elements.imageUrl().type("https://www.youtube.com/watch?v=8vXoMqWgbQQ");
        this.elements.offlineBtn().check();
        this.elements.offlineAddressINputField().type("Abuja, Nigeria");
        
    }
clickOnAddCourseBtnToAddCourse () {
    this.elements.toAddCourseBtn().click();
}

}

export const createCoursePage = new CreateCoursePage();