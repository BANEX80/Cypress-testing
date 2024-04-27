class DeleteCoursePage {
    elements = {
        openWebApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        listOfCourses: () => cy.contains('List of Courses'),
        theCourse: () => cy.get(':nth-child(2) > .MuiCardMedia-root'),
        deleteBtn: () => cy.get('.css-wvpqgg'),
        confirmDeleteBtn: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        theDeletedCourse: () => cy.contains('Intro N'),


    };




listOfCoursesIsVisible () {
this.elements.openWebApp();
this.elements.usernameInputField().type("ay@mail.com");
this.elements.passwordInputField().type("pass1234");
this.elements.loginBtn().click();
this.elements.listOfCourses().should("be.visible")

};

selectTheCourseToBeDeleted () {
    this.elements.theCourse().click();
}
clickOnTheDeleteBtn () {
    this.elements.deleteBtn().click();
    this.elements.confirmDeleteBtn().click();
    this.elements.theDeletedCourse().should("not.be.visible");
}

};

export const deleteCoursePage = new DeleteCoursePage();