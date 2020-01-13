import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ServiceList } from '.';
import { ServiceEndpoint } from '../../types';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';

let endpointList: Array<ServiceEndpoint> = [];

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => endpointList
}));

function setup(): ShallowWrapper {
  const wrapper = shallow(<ServiceList />);
  return wrapper;
}

describe('Service list', () => {
  const listIds = TestIdValues.serviceList;
  let wrapper: ShallowWrapper;
  describe('When list is empty', () => {
    beforeEach(() => {
      wrapper = setup();
    });
    it('should render without errors', () => {
      const component = findByTestId(wrapper, listIds.component);
      expect(component.length).toBe(1);
    });
    it('should have empty list', () => {
      const listItems = wrapper
        .children()
        .last()
        .children();
      expect(listItems.length).toBe(0);
    });
  });
  describe('When list has 3 elements', () => {
    beforeEach(() => {
      endpointList = [
        { name: 'some-name', url: 'http://somversion/hjdkh' },
        { name: 'other-name', url: 'http://othernam/hjdkh' },
        { name: 'yesno-name', url: 'http://yesno/hjdkh' }
      ];
      wrapper = setup();
    });
    it('should render without errors', () => {
      const component = findByTestId(wrapper, listIds.component);
      expect(component.length).toBe(1);
    });
    it('should have 3 elements in list', () => {
      const listItems = wrapper
        .children()
        .last()
        .children();
      expect(listItems.length).toBe(3);
    });
  });
});
