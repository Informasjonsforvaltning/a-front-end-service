import { fromJS } from 'immutable';
import {
  FETCH_SUCCEEDED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
  FETCH_FAILED
} from '../actions/types';
import * as actions from '../actions';
import { Actions } from '../../types';

const initialState = fromJS({
  serviceEndpoints: []
});

export default function reducer(
  state = initialState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case FETCH_SUCCEEDED: {
      const ret = state
        .set('serviceEndpoints', fromJS(action.payload.serviceEndpoints))
        .delete('error');
      return ret;
    }
    case FETCH_FAILED: {
      return state.set('error', fromJS(action.payload.error));
    }
    case FETCH_DETAILS_SUCCEEDED: {
      return state;
    }
    case FETCH_DETAILS_FAILED: {
      return state;
    }
    default:
      return initialState;
  }
}
