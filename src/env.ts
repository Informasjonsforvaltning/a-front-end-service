import { Config } from './types';

const mode = process.env.NODE_ENV;

export function getApiConfig(): Config {
  switch (mode) {
    case 'development':
      return { apiBasePath: 'localhost:8021', authUrl: 'localhost:8084' };
    default:
      return { apiBasePath: 'localhost:8021', authUrl: 'localhost:8084' };
  }
}
