import React from 'react';
import { render, shallow, ShallowWrapper } from 'enzyme';
import { Action } from 'redux';
import { ServiceList } from '.';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';
import { FETCH_REQUESTED } from '../../redux/actions/types';
import { ServiceEndpoint } from '../../types';

interface TestState {
  loggedIn: boolean;
  endpointVersions: Array<ServiceEndpoint>;
}

const dispatchSpy = jest.fn().mockImplementation((any: Action) => {
  return any.type;
});

let testState: TestState = { loggedIn: false, endpointVersions: [] };

const useEffectSpy = jest
  .spyOn(React, 'useEffect')
  .mockImplementation(f => f());

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return dispatchSpy;
    },
    useSelector: () => {
      return testState;
    }
  };
});

function setup(): ShallowWrapper {
  const wrapper = shallow(<ServiceList />);
  return wrapper;
}

describe('Service list', () => {
  const listIds = TestIdValues.serviceList;
  let wrapper: ShallowWrapper;
  describe('When list is empty', () => {
    beforeEach(() => {
      useEffectSpy.mockClear();
      dispatchSpy.mockClear();
      wrapper = setup();
    });
    it('should call dispatch a fetch_requested event exactly once', () => {
      expect(useEffectSpy.mock.calls.length).toBe(1);
      expect(dispatchSpy.mock.calls.length).toBe(1);
      expect(dispatchSpy.mock.results[0].value).toBe(FETCH_REQUESTED);
    });
    it('should render without errors', () => {
      const component = findByTestId(wrapper, listIds.component);
      expect(component.length).toBe(1);
    });
    it('should not have an admin section for public users', () => {});
    it('should have empty list', () => {
      const listItems = findByTestId(wrapper, listIds.table)
        .children()
        .last()
        .children();
      expect(listItems.length).toBe(0);
    });
  });

  describe('When list has 3 elements', () => {
    beforeEach(() => {
      dispatchSpy.mockClear();
      testState = {
        loggedIn: false,
        endpointVersions: [
          { name: 'some-name', url: 'http://somversion/hjdkh' },
          { name: 'other-name', url: 'http://othernam/hjdkh' },
          { name: 'yesno-name', url: 'http://yesno/hjdkh' }
        ]
      };
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
      const listItems = findByTestId(wrapper, listIds.table)
        .children()
        .last()
        .children();
      expect(listItems.length).toBe(3);
    });
  });
  describe('When logged in as admin', () => {
    let renderWrapper: Cheerio;
    beforeEach(() => {
      useEffectSpy.mockClear();
      dispatchSpy.mockClear();
      testState = {
        loggedIn: true,
        endpointVersions: [
          { name: 'some-name', url: 'http://somversion/hjdkh' },
          { name: 'other-name', url: 'http://othernam/hjdkh' },
          { name: 'yesno-name', url: 'http://yesno/hjdkh' }
        ]
      };
      renderWrapper = render(<ServiceList />);
    });

    it('should have an admin section for admin users', () => {
      const adminSection = findByTestId(
        renderWrapper,
        TestIdValues.adminContent.component
      );
      expect(adminSection.length).toBe(1);
    });
  });
  describe('When logged in as admin', () => {
    let renderWrapper: Cheerio;
    beforeEach(() => {
      useEffectSpy.mockClear();
      dispatchSpy.mockClear();
      testState = {
        loggedIn: false,
        endpointVersions: [
          { name: 'some-name', url: 'http://somversion/hjdkh' },
          { name: 'other-name', url: 'http://othernam/hjdkh' },
          { name: 'yesno-name', url: 'http://yesno/hjdkh' }
        ]
      };
      renderWrapper = render(<ServiceList />);
    });

    it('should not have an admin section for public users', () => {
      const adminSection = findByTestId(
        renderWrapper,
        TestIdValues.adminContent.component
      );
      expect(adminSection.length).toBe(0);
    });
  });
});
