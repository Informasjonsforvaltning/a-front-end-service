Feature: Administering service endpoints
As an admin user
I want to have a admin page
So that I can add new service endpoints
So that I can update service endpoints 

Scenario: Attempting to add a service with correct information
  Given I am admin
    When I go to admin page
    And I click "Add service"  
    And I fill inn fields
    | name              | url                                                           |
    | concept-catalouge | https://github.com/Informasjonsforvaltning/concept-catalogue  |  
    And I click "Add"
      Then I see <name>? in servicelist
      And service has url like <url>?
      And I see <name>? in service on homepage

Scenario: Attempting to add a non-existing service
  Given I am admin
    When I am on admin page
    And I click "Add service"  
    And I fill inn fields
    | name              | url                     |
    | non-existing      | https://github.com/Informasjonsforvaltning/non-existing          |  
    And I click "Add"
      Then I see an error message "Service <name>? does not exist"

Scenario: Attempting to add service that is already in list
Scenario: Adding a service with correct information
  Given I am admin
    When I go to admin page
    And I click "Add service"  
    And I see
    | name              | url                                                           |
    | concept-catalouge | https://github.com/Informasjonsforvaltning/concept-catalogue  |  
    And I fill in name like <name>? and url like <url>
    And I click "Add"
      Then I see an error message "Service endpoint <name>? is already listed"

Scenario: Attempting to update url of service with correct information
  Given I am admin
    When I go to admin page
    And I see <name>?
    | name              |
    | a-backend-service |
    And I click "Edit service"  
    And I fill field url
    | url                                                               | 
    | https://github.com/Informasjonsforvaltning/a-backend-service  |  
    And I fill in name like <name>? and url like <url>
    And I click "Update"
      Then <name>? has new url like <url?>
