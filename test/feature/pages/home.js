const { I } = inject();

class HomePage {
  constructor() {
    this.serviceTable = '<table>';
  }

  async seeInList(serviceName) {
    await I.waitForVisible(this.serviceList);
    I.seeElement(serviceName, '//li');
  }

  async seeDetailedInformation(serviceName) {
    const elementPath = `//li[text()=${serviceName}]`;
    I.click(elementPath);
    return locate('//div//table//legend[text()=Details]');
  }
}

export default new HomePage();
