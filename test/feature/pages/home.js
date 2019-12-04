const { expect } = require('chai');

const { I } = inject();

class HomePage {
  constructor() {
    this.serviceList = '//ul';
  }

  async seeDetailedInformation(serviceName) {
    const elementPath = `//li[text()=${serviceName}]`;
    I.click(elementPath);
    return locate('//div//table//legend[text()=Details]');
  }

  async listHasSize(expected) {
    const listSize = await I.grabNumberOfVisibleElements(
      `${this.serviceList}//li`
    );
    expect(listSize).to.equal(expected);
  }

  listContains(expected) {
    I.seeElement(expected, '//ul//li');
  }
}

module.exports = new HomePage();
