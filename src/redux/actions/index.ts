import { EndpointVersion, ServiceDetails } from '../../types';
import {
  ServiceActionTypes,
  FetchServiceEndpointSuccededAction,
  FetchServiceEndpointFailedAction
} from './types';

export function fetchServiceEndpointsSucceded(
  fetchedEndpoints: Array<EndpointVersion>
): FetchServiceEndpointSuccededAction {
  return {
    type: ServiceActionTypes.FETCH_SUCCEEDED,
    payload: { serviceEndpoints: fetchedEndpoints }
  };
}
export function fetchServiceEndpointsFailed(
  message: string
): FetchServiceEndpointFailedAction {
  return {
    type: ServiceActionTypes.FETCH_FAILED,
    payload: { error: message }
  };
}

export function fetchServiceDetailsSucceded(
  serviceDetails: Array<ServiceDetails>
) {
  return {
    type: ServiceActionTypes.FETCH_DETAILS_SUCCEEDED,
    payload: serviceDetails
  };
}
export function fetchServiceDetailsFailed(message: string) {
  return { type: ServiceActionTypes.FETCH_DETAILS_FAILED, error: message };
}
