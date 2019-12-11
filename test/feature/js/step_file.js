// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    loginAsAdmin() {
      this.say('Login as admin');
    },
    goToHomePage() {
      this.amOnPage('/');
    }
  });
};
