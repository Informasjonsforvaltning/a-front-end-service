import { Endpoints } from './endpoints';
import * as api from '.';
import { ServiceEndpoint, ServiceEndpointCollection } from '../types';

const mockToken =
  'eyJraWQiOiI5ZjZjOGY3Ni0zMDlhLTQ4YTktODA5NC1mODI4MmE0NzA5Y2YiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOlsiYS1iYWNrZW5kLXNlcnZpY2UiLCJjb25jZXB0LWNhdGFsb2d1ZSIsIm9yZ2FuaXphdGlvbi1jYXRhbG9ndWUgIiwiZmRrLWFkbWluLWhhcnZlc3RlciIsInJlZ2lzdHJhdGlvbi1hcGkiXSwidXNlcl9uYW1lIjoiMTkyNDc4MjU2MyIsIm5hbWUiOiJURVNUIFVTRVIiLCJleHAiOjE1NzU2Mjc0MzQsImdpdmVuX25hbWUiOiJURVNUIiwiZmFtaWx5X25hbWUiOiJVU0VSIiwiYXV0aG9yaXRpZXMiOiJwdWJsaXNoZXI6OTEwMjQ0MTMyOmFkbWluIn0.PuSzUUNeKArpZTZrDUq9stz0oeYLssDutHY3PaRaqUpJFUJ-K7Kic69pWN41Lg4FrnJRT-aGgSKtzX2nAaMRsqksvta1S1M7kqYWLUvWGHkNNm1xUcea1urI3cvYkibD0G4Ldmc4K63BVPaOLsX9r7j09hpAEiePK2vyZ_AqpYHsYzC8t2Y4KiHSiezYLYoBHCzMw1awHRdfLChczYleqCCp_O-DrUT9L9yjQrO0k86o76JQFg4dMEp9dGh1eLp0NLe-ozSL7zx1XkzHapJwmhdHbnfOy1WOVQI6Vy7si6rFattk9ilV_3wEkucNqC19_a9DVIBKCESRq2tgMPdR7w';

function isEndpointVersionArray(
  object: any
): object is ServiceEndpointCollection {
  return (
    object.total &&
    object.serviceEndpoints &&
    object.serviceEndpoints[0].url &&
    object.serviceEndpoints[0].name
  );
}

function isServiceDetailsObject(object: any): boolean {
  return (
    object.repositoryUrl &&
    object.branchName &&
    object.buildTime &&
    object.sha &&
    object.versionId
  );
}

describe('endpoints', () => {
  it('should return an Endpoints instance with localhost URLs', () => {
    const base = 'localhost:8021';
    const id = 'nasjfnkafs';
    const endpoints = new Endpoints(base);
    const expectedEndpoints = `http://${base}/serviceendpoints`;
    const expectedVersion = `${expectedEndpoints}/${id}/version`;

    expect(endpoints.getVersionUrl(id)).toBe(expectedVersion);
    expect(endpoints.serviceEndpoint).toBe(expectedEndpoints);
  });
});

describe('API intergration', () => {
  describe('/serviceendpoints', () => {
    describe('GET', () => {
      it('should make a correct call to the api', async () => {
        await api.getEndpoints().then(result => {
          return expect(result.status).toBe(200);
        });
      });
      it('should return a Result object containing service endpoints on success', async () => {
        const result = await api.getEndpoints();
        expect(result.status).toBe(200);
        const typecheck = isEndpointVersionArray(result.data);
        expect(typecheck).toBeTruthy();
      });
    });
    describe('POST', () => {
      it('should make a correct call to the api', async () => {
        const endpoint: ServiceEndpoint = {
          name: 'new-name',
          url: 'http://nothing-at-all'
        };
        const result = await api.postEndpoint(endpoint, mockToken);
        expect(result.status).toBe(201);
      });
      it('should return a Result object containing new location on success', async () => {
        const endpoint: ServiceEndpoint = {
          name: 'new-name',
          url: 'http://nothing-at-all'
        };
        const result = await api.postEndpoint(endpoint, mockToken);

        expect(result.status).toBe(201);
        expect(result.data.location).not.toBeUndefined();
      });
      it('should return a Result object with error code on unauthorized request', async () => {
        const endpoint: ServiceEndpoint = {
          name: 'new-name',
          url: 'http://nothing-at-all'
        };
        const result = await api.postEndpoint(endpoint, '');

        expect(result.status).toBe(401);
      });
    });
  });
  describe('/version', () => {
    it('should make a correct call to the api', async () => {
      const result = await api.getVersion('nonn');
      expect(result.status).toBe(200);
    });
    it('should return a Result object containing version of service endpoint on success', async () => {
      const result = await api.getVersion('nonn');
      expect(result.status).toBe(200);
      expect(isServiceDetailsObject(result.data)).toBeTruthy();
    });
  });
});
