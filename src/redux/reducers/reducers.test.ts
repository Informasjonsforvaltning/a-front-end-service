import reducer from './ServiceEndpointReducer';
import * as actions from '../actions';
import { ServiceEndpointState } from '../../types/states';

describe('ServiceEndpointReducer ', () => {
  const originalState = {
    serviceEndpoints: []
  };
  const successState: ServiceEndpointState = {
    serviceEndpoints: [
      { name: 'some-name', url: 'http://somversion/hjdkh' },
      { name: 'other-name', url: 'http://othernam/hjdkh' },
      { name: 'yesno-name', url: 'http://yesno/hjdkh' }
    ]
  };

  const failState = {
    error: 'Could not get service endpoints. Server not avaiable',
    serviceEndpoints: []
  };

  it('should return a state with a list of service endpoints on SUCCEDED', () => {
    const result = reducer(
      originalState,
      actions.fetchServiceEndpointsSucceded(successState.serviceEndpoints)
    );
    expect(result).toEqual(successState);
  });

  it('should return a state with an error message on FAILED', () => {
    const result = reducer(
      originalState,
      actions.fetchServiceEndpointsFailed(failState.error)
    );
    expect(result).toEqual(failState);
  });

  it('should return a state with no error when request has succeded after failed attempt', () => {
    const result = reducer(
      failState,
      actions.fetchServiceEndpointsSucceded(successState.serviceEndpoints)
    );
    expect(result).toEqual(successState);
  });
});
