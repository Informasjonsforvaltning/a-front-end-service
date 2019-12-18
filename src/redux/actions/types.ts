import { EndpointVersion } from '../../types';

export enum ServiceActionTypes {
  FETCH_REQUESTED = 'FETCH_SERVICE_ENDPOINTS_REQUESTED',
  FETCH_SUCCEEDED = 'FETCH_SERVICE_ENDPOINTS_SUCCEEDED',
  FETCH_FAILED = 'FETCH_SERVICE_ENDPOINTS_FAILED',
  FETCH_DETAILS_REQUESTED = 'FETCH_SERVICE_DETAILS_REQUESTED',
  FETCH_DETAILS_SUCCEEDED = 'FETCH_SERVICE_DETAILS_SUCCEEDED',
  FETCH_DETAILS_FAILED = 'FETCH_SERVICE_DETAILS}_FAILED'
}
export interface ServiceAction {
  type: ServiceActionTypes;
}

export interface FetchServiceEndpointSuccededAction extends ServiceAction {
  type: typeof ServiceActionTypes.FETCH_SUCCEEDED;
  payload: { serviceEndpoints: Array<EndpointVersion> };
}

export interface FetchServiceEndpointFailedAction extends ServiceAction {
  type: ServiceActionTypes;
  payload: { error: string };
}

export type ServiceActions =
  | FetchServiceEndpointFailedAction
  | FetchServiceEndpointSuccededAction;
