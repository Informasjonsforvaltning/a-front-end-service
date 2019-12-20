import { EndpointVersion, ServiceDetails } from '../../types';
import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_SUCCEEDED
} from './types';

export function fetchServiceEndpointsSucceded(
  fetchedEndpoints: Array<EndpointVersion>
) {
  return {
    type: FETCH_SUCCEEDED,
    payload: { serviceEndpoints: fetchedEndpoints }
  };
}
export function fetchServiceEndpointsFailed(message: string) {
  return {
    type: FETCH_FAILED,
    payload: { error: message }
  };
}

export function fetchServiceDetailsSucceded(
  serviceDetails: Array<ServiceDetails>
) {
  return {
    type: FETCH_DETAILS_SUCCEEDED,
    payload: { details: serviceDetails }
  };
}
export function fetchServiceDetailsFailed(message: string) {
  return { type: FETCH_DETAILS_FAILED, error: message };
}
