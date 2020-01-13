import { combineReducers } from 'redux';
import serviceEndpoints from './serviceEndpointReducer';

const rootReducer = combineReducers({
  serviceEndpoints
});

export default rootReducer;
