import { combineReducers } from 'redux';
import serviceEndpoints from './ServiceEndpointReducer';

const rootReducer = combineReducers({
  serviceEndpoints
});

export default rootReducer;
