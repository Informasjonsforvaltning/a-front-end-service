import { fromJS } from 'immutable';
import * as actions from '../actions';
import { Actions } from '../../types';
import { LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT_SUCCEDED } from "../actions/types";

const initalState = fromJS({
  loggedIn: false,
  attempts: 0
});

export default function reducer(
  state = initalState,
  action: Actions<typeof actions>
) {
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
      const ret = state.set('loggedIn', true).set('attempts', 0);
      return ret;
    }
    case LOGIN_FAILED: {
      const attempts = state.get('attempts') + 1;
      const ret = state.set('loggedIn', false).set('attempts', attempts);
      return ret;
    }
    case LOGOUT_SUCCEDED: {
      const ret = state.set('loggedIn', false);
      return ret;
    }
    default:
      return state;
  }
}
