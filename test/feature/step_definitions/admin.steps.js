const {I,adminPage} = inject();
const defaultRowPath = "//tr[text()=a-backend-service]"

When('I login as admin', () => {
  adminPage.login();
});

Then('I can see Add service button', () => {
  I.see('Add','//button')
});

Then('I can see Edit service button on table rows', () => {
  I.see('Edit', '//tr//button[text()=Edit]');
});

Given('I am admin', () => {
  adminPage.login();
});

When('I see a-backend-service', () => {
  I.see(defaultRowPath)
});
When('I click Add service', () => {
  I.click(`${defaultRowPath}//button[text()="Edit"]`)
});

When('I click Edit service', () => {
  I.click(`${defaultRowPath}//button[text()="Edit"]`)
});

When(/^I fill field url https:\/\/github\.com\/Informasjonsforvaltning\/a-backend-service$/, () => {
  I.fillField('//input', 'https://github.com/Informasjonsforvaltning/a-backend-service')
});

When('I click OK', () => {
  I.click('//button[text()=OK]')
});

Then(/^a-backend-service has a new url like https:\/\/github\.com\/Informasjonsforvaltning\/a-backend-service$/, () => {
  I.see('//tr[text()=https://github.com/Informasjonsforvaltning/a-backend-service]]')
});

When('I fill field url with {string}', (url) => {
  I.fillField('input', url)
});

Then('I see error message {string}', (message) => {
  I.see(message)
});
