import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { deleteCoursePage } from "@pages/DeleteCoursePage";

Given("A user is on the list of Courses Page", () => {
deleteCoursePage.listOfCoursesIsVisible();
}
);

When("A user selects the course he wants to delete", () => {
    deleteCoursePage.selectTheCourseToBeDeleted();
}
);

Then("User should be able to delete the course successfully", () => {
    deleteCoursePage.clickOnTheDeleteBtn();
}
);