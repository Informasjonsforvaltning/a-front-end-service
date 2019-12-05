@homepage
Feature: Overview of service
  As a public user 
  I want to see a table of running service endpoints
  So that I can: know which version of a service endpoint I am accessing 
  So that I can: get detailed information about the state of development of the service endpoint  

  Scenario: See all services 
  Given I am a public user 
    When I access the homepage
      Then I can see <total>$ table rows
      And The table contains <name>$
      And <name>$ has an url
      And  <name>$ has a version

  Scenario: See details of service
  Given I am on homepage 
    When I click <service-name>$
      Then I can see a details about the service
      | version | sha | branch |
      
  

