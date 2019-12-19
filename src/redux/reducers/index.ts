import { combineReducers } from 'redux';
import ServiceEndpointsReducer from './ServiceEndpointReducer';

const rootReducer = combineReducers({
  serviceEndpoints: ServiceEndpointsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
