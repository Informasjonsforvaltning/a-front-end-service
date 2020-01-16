import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { getApiConfig } from '../env';
import { Endpoints, errorMessage } from './endpoints';
import { Result } from './types';
import { ServiceEndpoint } from '../types';

const config = getApiConfig();
const endpoints = new Endpoints(config.apiBasePath);

function getPostConfig(token: string): AxiosRequestConfig {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  };
}

export function getEndpoints(): Promise<Result> {
  const promise = axios
    .get(endpoints.serviceEndpoint)
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      return { error: errorMessage(error.response.status) };
    });

  return promise;
}
export function postEndpoint(
  newEndpoint: ServiceEndpoint,
  token: string
): Promise<Result> {
  const promise: Promise<Result> = axios
    .post(
      endpoints.serviceEndpoint,
      JSON.stringify(newEndpoint),
      getPostConfig(token)
    )
    .then(result => {
      return {
        status: result.status,
        data: { location: result.headers.location }
      };
    })
    .catch(error => {
      return { error: errorMessage(error.response.status) };
    });
  return promise;
}

export function getVersion(id: string): Promise<AxiosPromise> {
  return axios.get(endpoints.getVersionUrl(id));
}
