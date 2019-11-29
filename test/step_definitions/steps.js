const { I } = inject();

Given('I am on homepage', () => {
  I.amOnPage('/');
  I.seeInTitle('A frontend service');
});

When('no additional services are added', () => {
  console.log('empty');
});

Then('I can see one list item', () => {
  I.seeNumberOfVisibleElements('li', 1);
});

Then('The list item is a-backend-service', () => {
  I.seeTextEquals(
    'running version for hajjlskfjlaksfkk is156371537',
    '//ul/li[1]'
  );
});

Then('The list item has an url', () => {
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
