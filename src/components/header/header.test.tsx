import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '.';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';

let mockloggedIn = false;

function setup(authenticated: boolean): ShallowWrapper {
  mockloggedIn = authenticated;
  const wrapper = shallow(<Header />);
  return wrapper;
}

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => mockloggedIn
}));

describe('Header component', () => {
  let wrapper: ShallowWrapper;

  it('should render without error', () => {
    wrapper = setup(false);
    const component = findByTestId(wrapper, TestIdValues.header.component);
    expect(component.length).toBe(1);
  });
  it('should show a login button for unauthenticated users', () => {
    wrapper = setup(false)
    const component = findByTestId(wrapper, TestIdValues.header.loginButton);
    expect(component.length).toBe(1);
  });
  it('should show user info for unauthenticated users', () => {
    wrapper = setup(true)
    const component = findByTestId(wrapper, TestIdValues.header.infoText);
    expect(component.length).toBe(1);
    expect(component.text()).toBe('Logged in as admin')
  });
  it('should logout button for authenticated users', () => {
    wrapper = setup(true)
    mockloggedIn = true;
    const component = findByTestId(wrapper, TestIdValues.header.logoutButton);
    expect(component.length).toBe(1);
  });
});
