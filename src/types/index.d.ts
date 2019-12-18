export interface EndpointVersion {
  name: string;
  url: string;
}

export interface ServiceDetails {
  repositoryUrl: string;
  branchName: string;
  buildTime: string;
  sha: string;
  versionId: string;
}
export * from './common';
