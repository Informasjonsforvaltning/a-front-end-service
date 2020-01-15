module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/*/.*\\.test.(ts|tsx)$',
  testPathIgnorePatterns: ['/src/api/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  setupFiles: ['./test/utils/setupJest.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}']
};
