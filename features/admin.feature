@admin
Feature: Administering service endpoints
As an admin user
I want to have a admin page
So that I can add new service endpoints
So that I can update service endpoints


Scenario: Login as admin
  Given I am on homepage
    When I login as admin
      Then I can see Add service button
      And  I can see Edit service button on table rows

Scenario Outline: Successfully adding a service
  Given I am admin
    When I click Add service
    And I fill inn fields with <name> and <url>
    And I click Add
      Then I see <name> in servicelist
      And service has url like <url>
  Examples:
    | name              | url                                                           |
    | concept-catalouge | https://github.com/Informasjonsforvaltning/concept-catalogue  |
    | some-other-service| https://github.com/Informasjonsforvaltning/concept-catalogue  |


Scenario Outline: Attempting to add service with errors
  Given I am admin
    When I click Add service
    And I fill inn fields with <name> and <url>
    And I click Add
      Then I see an error message <message>
  Examples:
    | name              | url                                                          | message                      |
    | a-backend-service | https://a-backend-service.ut1.fellesdatakatalog.brreg.no     | Service already registered   |
    | not-url           | hjkkajkhsf..js                                               | Wrong format in url          |
    | wrong name format | https://a-backend-service.ut1.fellesdatakatalog.da           | Wrong format in name         |

Scenario: Successfully updating service
  Given I am admin
    When I see a-backend-service
      And I click Edit service
      And I fill field url https://github.com/Informasjonsforvaltning/a-backend-service
      And I click OK
        Then a-backend-service has a new url like https://github.com/Informasjonsforvaltning/a-backend-service

Scenario: Attempting to update url with wrong format
  Given I am admin
    When I see a-backend-service
    And I click Edit service
    And I fill field url with "url"
      | url              |
      | hjkkajkhsf..js   |
      | https://         |
    And I click OK
     Then I see error message "message"
       | message              |
       | Wrong format in url  |
       | Incomplete url       |







