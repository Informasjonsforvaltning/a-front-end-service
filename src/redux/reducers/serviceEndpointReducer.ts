import { ServiceEndpointState } from '../../types/states';
import { ServiceActionTypes, ServiceActions } from '../actions/types';

const initialState: ServiceEndpointState = {
  serviceEndpoints: []
};

export default function reducer(state = initialState, action: ServiceActions) {
  switch (action.type) {
    case ServiceActionTypes.FETCH_SUCCEEDED: {
      if (state.error) delete state.error;
      return { ...state, ...action.payload };
    }
    case ServiceActionTypes.FETCH_FAILED: {
      return { ...state, ...action.payload };
    }
    case ServiceActionTypes.FETCH_DETAILS_SUCCEEDED: {
      return undefined;
    }
    case ServiceActionTypes.FETCH_DETAILS_FAILED: {
      return undefined;
    }
    default:
      return state;
  }
}
