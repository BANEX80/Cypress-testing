import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createCoursePage } from "@pages/CreateCoursePage";

Given ("A user can click on the add course button", () => {
    createCoursePage.clickOnAddCourseBtn();
});

When ("A user fills the required input fields", () => {
createCoursePage.fillTheFields();
});
Then ("A user clicks on add course btn at the buttom of the fields to successfully add a new course", () => {
createCoursePage.clickOnAddCourseBtnToAddCourse();
});