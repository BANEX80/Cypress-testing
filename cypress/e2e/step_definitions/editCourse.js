import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { editCoursePage } from "@pages/EditCoursePage";

Given("A user has selected the course to edit", () => {
editCoursePage.cickOnTheCourse();
});

When("A user clicks on edit", () => {
    editCoursePage.clickOnEdit();
});

Then("User updates what they want to edit", () => {
editCoursePage.clickOnUpateCourse();
});