import { combineReducers } from 'redux';
import serviceEndpoints from './serviceEndpointReducer';
import authState from './authReducer';

const rootReducer = combineReducers({
  serviceEndpoints,
  authState
});

export default rootReducer;
