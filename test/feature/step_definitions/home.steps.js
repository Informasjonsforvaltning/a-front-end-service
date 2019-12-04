const { I, homePage } = inject();

Given('I am a public user', () => {
  I.say('Accessing public website');
});

When('I access the homepage', () => {
  // From "features/overview.feature" {"line":9,"column":5}
  I.goToHomePage();
});

Then('I can see <total>$ list items', () => {
  // From "features/overview.feature" {"line":10,"column":7}
  I.seeElement('//ul');
  homePage.listHasSize(1);
});

Then('The list contains <name>$', () => {
  homePage.listContains('a-backend-service');
});

Then('<name>$ has an url', () => {
  // From "features/overview.feature" {"line":12,"column":7}
  I.say('Not implemented yet');
});

Then('the list item has a version', () => {
  // From "features/overview.feature" {"line":13,"column":7}
  I.say('Not implemented yet');
});

Given('I am on homepage', () => {
  // From "features/overview.feature" {"line":16,"column":3}
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
