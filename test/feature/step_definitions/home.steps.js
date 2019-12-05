const { I, homePage } = inject();

Given('I am a public user', () => {
  I.say('Accessing public website');
});
Given('I am on homepage', () => {
  I.goToHomePage();
});

Then('I can see <total>$ table rows', () => {
  // From "features/overview.feature" {"line":10,"column":7}
  I.seeElement('//table');
  homePage.tableRowTotal(1);
});

Then('The table contains <name>$', () => {
  homePage.tableContains('a-backend-service');
});

Then('<name>$ has an url', () => {
  // From "features/overview.feature" {"line":12,"column":7}
  I.say('Not implemented yet');
});

Then('<name>$ has a version', () => {
  // From "features/overview.feature" {"line":13,"column":7}
  I.say('Not implemented yet');
});

When('I click <service-name>$', () => {
  // From "features/overview.feature" {"line":17,"column":5}
  I.say('Not implemented yet');
});

Then('I can see a details about the service', () => {
  // From "features/overview.feature" {"line":18,"column":7}
  I.say('Not implemented yet');
});
