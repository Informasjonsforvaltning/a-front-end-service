import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Action } from 'redux';
import { ServiceList } from '.';
import { ServiceEndpoint } from '../../types';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { FETCH_REQUESTED } from "../../redux/actions/types";

let endpointList: Array<ServiceEndpoint> = [];
const dispatchSpy = jest.fn().mockImplementation((any: Action) => {
  return any.type;
});

jest.mock('react-redux', () => ({
  useDispatch: () => {
    return dispatchSpy;
  },
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
    it('should call dispatch a fetch_requested event exactly once', () => {
      expect(dispatchSpy.mock.calls.length).toBe(1);
      expect(dispatchSpy.mock.results[0].value).toBe(FETCH_REQUESTED);
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

    afterAll(() => {
      dispatchSpy.mockClear();
    });
  });

  describe('When list has 3 elements', () => {
    beforeAll(() => {
      dispatchSpy.mockClear();
    });

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

    it('should not dispatch a fetch_requested event', () => {
      expect(dispatchSpy.mock.calls.length).toBe(0);
    });

    it('should have 3 elements in list', () => {
      const listItems = wrapper
        .children()
        .last()
        .children();
      expect(listItems.length).toBe(3);
    });
    afterAll(() => {
      dispatchSpy.mockClear();
    });
  });
});
