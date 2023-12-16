Feature: This feature ensures that the quales login functionality is working appropraitely

As a user i want to visit the login page successfully so that i can perform some course management task

Scenario: verify that a user can login to the web app
Given A user is on the quales login page
When A user types in correct username and password
Then User should be logged into the web app