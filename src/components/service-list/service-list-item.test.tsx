import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ServiceListItem } from './service-list-item/index';
import { ServiceEndpoint } from '../../types';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';

let mockloggedIn = false;

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => mockloggedIn
}));

function setLoggedInState(newState: boolean) {
  mockloggedIn = newState;
}
function setup(
  versionProps: ServiceEndpoint = { name: 'some name', url: '1.0.9' }
) {
  const wrapper = shallow(
    <ServiceListItem key={versionProps.name} version={versionProps} />
  );
  return wrapper;
}

function findForm(wrapper: ShallowWrapper) {
  const selector = `[testId="${TestIdValues.serviceList.editForm}"]`;
  return wrapper.find(selector);
}

describe('Service list items', () => {
  let wrapper: ShallowWrapper;
  describe('For admin user', () => {
    beforeEach(() => {
      setLoggedInState(true);
      wrapper = setup();
    });
    it('renders wihtout error', () => {
      const listItem = findByTestId(wrapper, TestIdValues.serviceList.listItem);
      expect(listItem.length).toBe(1);
    });
    it('should have an edit button', () => {
      const editButton = findByTestId(
        wrapper,
        TestIdValues.serviceList.editButtons
      );
      expect(editButton.length).toBe(1);
    });

    it('should show an editform when editbutton is clicked', () => {
      const editButton = findByTestId(
        wrapper,
        TestIdValues.serviceList.editButtons
      );
      editButton.simulate('click');
      const editForm = findForm(wrapper)
      expect(editForm.length).toBe(1);
    });
  });
  describe('For public users', () => {
    beforeEach(() => {
      setLoggedInState(false);
      wrapper = setup();
    });
    it('renders wihtout error', () => {
      const listItem = findByTestId(wrapper, TestIdValues.serviceList.listItem);
      expect(listItem.length).toBe(1);
    });
    it('should not have an edit button', () => {
      const editButton = findByTestId(
        wrapper,
        TestIdValues.serviceList.editButtons
      );
      expect(editButton.length).toBe(0);
    });
  });
});
