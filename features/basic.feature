Feature: Overview of service
  In order to find information of the running services 
  As a user
  I want to have a list containing releveant information

  Scenario: See overview 
    Given I am on homepage
    When no additional services are added
      Then I can see one list item
      And The list item is a-backend-service
      And The list item has an url
      And the list iten has a version
