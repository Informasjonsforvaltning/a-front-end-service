import { combineReducers } from 'redux';
import ServiceEndpointReducer from './ServiceEndpointReducer';

const rootReducer = combineReducers({
  serviceEndpoints: ServiceEndpointReducer
});

export type RootState = ReturnType<typeof rootReducer>;
