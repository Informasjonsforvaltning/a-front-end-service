import { EndpointVersion } from '.';

export interface SystemState {
  token: string;
}
export interface ServiceEndpointState {
  error?: string;
  serviceEndpoints: Array<EndpointVersion>;
}
export interface Payload {
  payload: {};
}
