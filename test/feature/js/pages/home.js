import { expect } from 'chai';

const { I } = inject();

class HomePage {
  constructor() {
    this.serviceTable = '//table';
  }

  async seeDetailedInformation(serviceName) {
    const elementPath = `//tr[text()=${serviceName}]`;
    I.click(elementPath);
    const detail_path = '//div//table//legend[text()=Details]';
    I.seeElement(detail_path);
  }

  async tableRowTotal(expected) {
    return I.grabNumberOfVisibleElements(`${this.serviceTable}/tbody/tr`).then(
      result => {
        expect(result).to.equal(expected);
      }
    );
  }

  tableContains(expected) {
    const elementPath = `${this.serviceTable}/tbody/tr/td[text()[contains(. ,'${expected}')]]`;
    I.seeElement({ xpath: elementPath });
  }
}

module.exports = new HomePage();
