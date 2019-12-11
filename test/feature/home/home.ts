import { expect } from 'chai';

const { I } = inject();

class HomePage {
  serviceTable: string = '//table';

  async seeDetailedInformation(serviceName: string) {
    const elementPath = `//tr[text()=${serviceName}]`;
    I.click(elementPath);
    const detail_path = '//div//table//legend[text()=Details]';
    I.seeElement(detail_path);
  }

  async tableRowTotal(expected: number) {
    return I.grabNumberOfVisibleElements(`${this.serviceTable}/tbody/tr`).then(
      (result: number) => {
        expect(result).to.equal(expected);
      }
    );
  }

  tableContains(expected: string) {
    const elementPath = `${this.serviceTable}/tbody/tr/td[text()[contains(. ,'${expected}')]]`;
    I.seeElement({ xpath: elementPath });
  }
}

export default HomePage;
