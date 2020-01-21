const { I } = inject();

class AdminPage {
  constructor() {
    this.serviceList = '<table>';
  }
  login(username,password){
    I.goToHomePage();
    I.click('Login')
  }
}

module.exports = new AdminPage();
