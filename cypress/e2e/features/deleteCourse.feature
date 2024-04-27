Feature: This feature is to ensure that a user can successfully delete a course created on the Quales webapp
As a user I want to be able to delete a course that I have created on the Quales learning app

Scenario: verify that a user can successfully delete a course


Given A user is on the list of Courses Page
When A user selects the course he wants to delete
Then User should be able to delete the course successfully