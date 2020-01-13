import { fromJS } from 'immutable';
import reducer from './serviceEndpointReducer';
import * as actions from '../actions';

describe('ServiceEndpointReducer ', () => {
  const originalState = fromJS({
    serviceEndpoints: []
  });
  const successState = fromJS({
    serviceEndpoints: [
      { name: 'some-name', url: 'http://somversion/hjdkh' },
      { name: 'other-name', url: 'http://othernam/hjdkh' },
      { name: 'yesno-name', url: 'http://yesno/hjdkh' }
    ]
  });

  const failState = fromJS({
    error: 'Could not get service endpoints. Server not available',
    serviceEndpoints: []
  });

  it('should return a state with a list of service endpoints on SUCCEDED', () => {
    const result = reducer(
      originalState,
      actions.fetchServiceEndpointsSucceded(
        successState.get('serviceEndpoints').toJS()
      )
    );
    expect(result).toEqual(successState);
  });

  it('should return a state with an error message on FAILED', () => {
    const result = reducer(
      originalState,
      actions.fetchServiceEndpointsFailed(failState.get('error'))
    );
    expect(result).toEqual(failState);
  });

  it('should return a state with no error when request has succeded after failed attempt', () => {
    const result = reducer(
      failState,
      actions.fetchServiceEndpointsSucceded(
        successState.get('serviceEndpoints').toJS()
      )
    );
    expect(result).toEqual(successState);
  });
});
