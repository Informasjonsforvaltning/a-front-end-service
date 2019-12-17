import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ServiceListItem } from './service-list-item/index';
import { Version } from '../../types';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';

function listItemSetup(
  versionProps: Version = { name: 'some name', version: '1.0.9' }
) {
  const wrapper = shallow(
    <ServiceListItem key={versionProps.name} version={versionProps} />
  );

  return wrapper;
}
/*
function listSetup(state: GlobalState) {
  const wrapper = shallow(<ServiceList />);
  return wrapper;
} */

describe('Service list items', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = listItemSetup();
  });
  it('renders wihtout error', () => {
    console.log(wrapper.debug());
    const listItem = findByTestId(wrapper, TestIdValues.serviceList.listItem);
    expect(listItem.length).toBe(1);
  });
});

/*
describe('Service list', () => {
  let wrapper: ShallowWrapper;

  describe('with three services', () => {
    const testVersion = [
      { name: 'somename', version: '1.09' },
      { name: 'somename', version: '1.09' },
      { name: 'somename', version: '1.09' }
    ];
    const testState: GlobalState = { loggedIn: false, services: testVersion };
    beforeEach(() => {
      wrapper = listSetup(testState);
    });
    it('renders wihtout error', () => {
      const list = findByTestId(wrapper, TestIdValues.serviceList.component);
      expect(list.length).toBe(1);
    });
    it('renders 3 listitems', () => {
      const listItem = findByTestId(wrapper, TestIdValues.serviceList.listItem);
      expect(listItem.length).toBe(3);
    });
  });
});
*/
