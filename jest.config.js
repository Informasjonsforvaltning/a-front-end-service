module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/*/.*\\.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  setupFiles: ['./test/utils/setupJest.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}']
};
