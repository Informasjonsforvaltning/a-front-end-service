import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ServiceListItem } from './service-list-item/index';
import { EndpointVersion } from '../../types';
import { findByTestId, TestIdValues } from '../../../test/utils/unitUtils';

function setup(
  versionProps: EndpointVersion = { name: 'some name', url: '1.0.9' }
) {
  const wrapper = shallow(
    <ServiceListItem key={versionProps.name} version={versionProps} />
  );
  return wrapper;
}
describe('Service list items', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('renders wihtout error', () => {
    const listItem = findByTestId(wrapper, TestIdValues.serviceList.listItem);
    expect(listItem.length).toBe(1);
  });
});
