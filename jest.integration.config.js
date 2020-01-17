module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/src/api/.*\\.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  setupFiles: ['./test/utils/setupJest.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/api/*.{ts,tsx}']
};
