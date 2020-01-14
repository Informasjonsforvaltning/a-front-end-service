const { I } = inject();

class AdminPage {
  constructor() {
    this.serviceList = '<table>';
  }
  login(username,password){
    I.click('//button[text()=login]');
    I.waitForVisible('//form');
    I.fillField('username',username);
    I.fillField('password')
    I.click('//button[text()=ok]')
  }
}

module.exports = new AdminPage();
