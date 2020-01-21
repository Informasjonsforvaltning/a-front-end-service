import { ServiceDetails } from '../../types';
import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_DETAILS_FAILED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_REQUESTED,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED, LOGOUT_SUCCEDED
} from "./types";

export function fetchServiceEnpoints() {
  return {
    type: FETCH_REQUESTED
  };
}

export function fetchServiceEndpointsSucceded(fetchedEndpoints: {}) {
  return {
    type: FETCH_SUCCEEDED,
    payload: { serviceEndpoints: fetchedEndpoints }
  };
}
export function fetchServiceEndpointsFailed(message: string) {
  return {
    type: FETCH_FAILED,
    error: message
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

export function loginSucceded(user: string) {
  return {
    type: LOGIN_SUCCEEDED,
    userInfo: user
  };
}

export function logoutSucceded() {
  return {
    type: LOGOUT_SUCCEDED
  };
}
export function loginFailed(message: string) {
  return {
    type: LOGIN_FAILED,
    error: message
  };
}
