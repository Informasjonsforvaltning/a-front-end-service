const { I } = inject();
Then('The list contains <name>$', () => {
  I.seeTextEquals(
    'running version for hajjlskfjlaksfkk is156371537',
    '//ul/li[1]'
  );
});

Given('I am on homepage', () => {
  I.amOnPage('/');
  I.seeInTitle('A frontend service');
});

Then('I can see <total>$ list items', () => {
  I.seeNumberOfVisibleElements('li', 1);
});

Then('The list contains <name>$', () => {
  I.seeTextEquals(
    'running version for hajjlskfjlaksfkk is156371537',
    '//ul/li[1]'
  );
});

Then('<name>$ has an url', () => {
  I.seeTextEquals(
    'running version for hajjlskfjlaksfkk is156371537',
    '//ul/li[1]'
  );
});

Then('the list iten has a version', () => {
  I.seeTextEquals(
    'running version for hajjlskfjlaksfkk is156371537',
    '//ul/li[1]'
  );
});

When('I click <service-name>$', () => {
  // From "features/overview.feature" {"line":13,"column":5}
  throw new Error('Not implemented yet');
});

Then('I can see a details about the service', () => {
  // From "features/overview.feature" {"line":14,"column":5}
  throw new Error('Not implemented yet');
});

Given('I am admin', () => {
  // From "features/admin.feature" {"line":8,"column":3}
  throw new Error('Not implemented yet');
});

When('I go to admin page', () => {
  // From "features/admin.feature" {"line":9,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":10,"column":5}
  throw new Error('Not implemented yet');
});

When('I fill inn fields', () => {
  // From "features/admin.feature" {"line":11,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":14,"column":5}
  throw new Error('Not implemented yet');
});

Then('I see <name>? in servicelist', () => {
  // From "features/admin.feature" {"line":15,"column":7}
  throw new Error('Not implemented yet');
});

Then('service has url like <url>?', () => {
  // From "features/admin.feature" {"line":16,"column":7}
  throw new Error('Not implemented yet');
});

Then('I see <name>? in service on homepage', () => {
  // From "features/admin.feature" {"line":17,"column":7}
  throw new Error('Not implemented yet');
});

Given('I am admin', () => {
  // From "features/admin.feature" {"line":20,"column":3}
  throw new Error('Not implemented yet');
});

When('I am on admin page', () => {
  // From "features/admin.feature" {"line":21,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":22,"column":5}
  throw new Error('Not implemented yet');
});

When('I fill inn fields', () => {
  // From "features/admin.feature" {"line":23,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":26,"column":5}
  throw new Error('Not implemented yet');
});

Then('I see an error message {string}', () => {
  // From "features/admin.feature" {"line":27,"column":7}
  throw new Error('Not implemented yet');
});

Given('I am admin', () => {
  // From "features/admin.feature" {"line":31,"column":3}
  throw new Error('Not implemented yet');
});

When('I go to admin page', () => {
  // From "features/admin.feature" {"line":32,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":33,"column":5}
  throw new Error('Not implemented yet');
});

When('I see', () => {
  // From "features/admin.feature" {"line":34,"column":5}
  throw new Error('Not implemented yet');
});

When('I fill in name like <name>? and url like <url>', () => {
  // From "features/admin.feature" {"line":37,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":38,"column":5}
  throw new Error('Not implemented yet');
});

Then('I see an error message {string}', () => {
  // From "features/admin.feature" {"line":39,"column":7}
  throw new Error('Not implemented yet');
});

Given('I am admin', () => {
  // From "features/admin.feature" {"line":42,"column":3}
  throw new Error('Not implemented yet');
});

When('I go to admin page', () => {
  // From "features/admin.feature" {"line":43,"column":5}
  throw new Error('Not implemented yet');
});

When('I see <name>?', () => {
  // From "features/admin.feature" {"line":44,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":47,"column":5}
  throw new Error('Not implemented yet');
});

When('I fill field url', () => {
  // From "features/admin.feature" {"line":48,"column":5}
  throw new Error('Not implemented yet');
});

When('I fill in name like <name>? and url like <url>', () => {
  // From "features/admin.feature" {"line":51,"column":5}
  throw new Error('Not implemented yet');
});

When('I click {string}', () => {
  // From "features/admin.feature" {"line":52,"column":5}
  throw new Error('Not implemented yet');
});

Then('<name>? has new url like <url?>', () => {
  // From "features/admin.feature" {"line":53,"column":7}
  throw new Error('Not implemented yet');
});

Given('I am a public user', () => {
  // From "features/overview.feature" {"line":8,"column":3}
  throw new Error('Not implemented yet');
});

When('I access the homepage', () => {
  // From "features/overview.feature" {"line":9,"column":5}
  throw new Error('Not implemented yet');
});
