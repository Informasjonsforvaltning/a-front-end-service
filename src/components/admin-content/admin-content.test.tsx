import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TestIdValues, findByTestId } from '../../../test/utils/unitUtils';
import { AdminContent } from './index';

function mockFunction() {}

function setup() {
  const wrapper = shallow(<AdminContent onAddServiceClicked={mockFunction} />);
  return wrapper;
}

function simulateButtonClick(wrapper: ShallowWrapper) {
  const button = findByTestId(wrapper, TestIdValues.adminContent.addButton);
  button.simulate('click');
  return wrapper;
}

// util: shallow wrapper does not render form

function findForm(wrapper: ShallowWrapper) {
  const selector = `[testId="${TestIdValues.adminContent.addForm}"]`;
  return wrapper.find(selector);
}

describe('Admin content', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('should render without error', () => {
    const component = findByTestId(
      wrapper,
      TestIdValues.adminContent.component
    );
    expect(component.length).toBe(1);
  });
  it('should render an add button in default state', () => {
    const button = findByTestId(wrapper, TestIdValues.adminContent.addButton);
    expect(button.length).toBe(1);
  });
  it('should not render add form in default state', () => {
    const addForm = findForm(wrapper);
    expect(addForm.length).toBe(0);
  });
  it('should render an add form when add button is clicked', () => {
    wrapper = simulateButtonClick(wrapper);
    const addForm = findForm(wrapper);
    expect(addForm.length).toBe(1);
  });
  it('should not render an add button when button is clicked', () => {
    wrapper = simulateButtonClick(wrapper);
    const button = findByTestId(wrapper, TestIdValues.adminContent.addButton);
    expect(button.length).toBe(0);
  });
});
