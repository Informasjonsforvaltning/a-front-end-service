const { I, homePage } = inject();

Given('I am a public user', () => {
  I.say('Accessing public website');
});
Given('I am on homepage', () => {
  I.goToHomePage();
});

Then('I can see {int} table rows', number => {
  // From "features/overview.feature" {"line":10,"column":7}
  I.seeElement('//table');
  return homePage.tableRowTotal(number);
});

Then('The table contains {string}', name => {
  homePage.tableContains('a-backend-service');
});

Then('{string} has an url', () => {
  // From "features/overview.feature" {"line":12,"column":7}
  I.say('Not implemented yet');
});

Then('{string} has a version', () => {
  // From "features/overview.feature" {"line":13,"column":7}
  I.say('Not implemented yet');
});

When('I click a-backend-service', () => {
  // From "features/overview.feature" {"line":17,"column":5}
  //  homePage.seeDetailedInformation;
  I.say('Not implemented yet');
});

Then('I can see details about the service', table => {
  const value_row = table.rows[1];
  const exp_repo = value_row.cells[0].value;
  const exp_sha = table.rows[1].cells[1].value;
  const exp_branch = table.rows[1].cells[2].value;
  const exp_version = table.rows[1].cells[3].value;
  const exp_buildTime = table.row[1].cells[4].value;
});
