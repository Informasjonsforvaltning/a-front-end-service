export interface ServiceEndpoint {
  name: string;
  url: string;
}

export interface ServiceEndpointCollection {
  total: number;
  serviceEndpoints: Array<ServiceEndpoint>;
}

export interface ServiceDetails {
  repositoryUrl: string;
  branchName: string;
  buildTime: string;
  sha: string;
  versionId: string;
}

export interface Config {
  apiBasePath: string;
  authUrl: string;
}

export * from './common';
