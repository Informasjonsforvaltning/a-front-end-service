import { ShallowWrapper } from 'enzyme';

export function findByTestId(wrapper: ShallowWrapper, testId: string) {
  const selector = `[data_test="${testId}"]`;
  return wrapper.find(selector);
}

export interface TestIdProp {
  data_test: string;
}

export function insertTestId(testId: string): TestIdProp {
  return { data_test: testId };
}

export const TestIdValues = {
  serviceList: {
    component: 'service-list-component',
    listItem: 'service-list-item-component'
  }
};
