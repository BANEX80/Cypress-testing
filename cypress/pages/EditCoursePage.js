class EditCooursePage {
elements = {
    openWebApp: () => cy.visit("/login"),
    usernameInputField: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInputField: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.get('.MuiButton-contained'),
    listOfCourses: () => cy.contains('List of Courses'),
    theCourse: () => cy.get(':nth-child(2) > .MuiCardMedia-root'),
    theEditBtn: () => cy.get('.css-klop1v'),
    addressField: () => cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
    updateCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),

}
cickOnTheCourse () {
this.elements.openWebApp();
this.elements.usernameInputField().type("ay@mail.com");
this.elements.passwordInputField().type("pass1234");
this.elements.loginBtn().click();
this.elements.listOfCourses().should("be.visible");
this.elements.theCourse().click();
}

clickOnEdit () {
    this.elements.theEditBtn().click();
    this.elements.addressField().clear();
    this.elements.addressField().type("https://youtu.be/6I2N1b7dN60?si=Pt-xiN-InNuD8ghj");
}
clickOnUpateCourse () {
this.elements.updateCourseBtn().click();
 }
}

 export const editCoursePage = new EditCooursePage ();