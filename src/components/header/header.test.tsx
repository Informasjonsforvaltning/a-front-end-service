import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from '.';

function setup(): ShallowWrapper {
  const wrapper = shallow(<Header />);
  return wrapper;
}

describe('Header component', () => {
  beforeEach(() => {
    setup();
  });
  it('should render without error', () => {});
  it('should show a login button for uanuthenticated users', () => {});
  it('should show user info for autehnticated users');
});
