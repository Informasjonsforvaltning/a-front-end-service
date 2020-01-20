module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]s?$': './test/utils/unit.transformer.js'
  },
  testRegex: '/*/.*\\.test.(ts|tsx)$',
  testPathIgnorePatterns: ['/src/api/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'd.ts'],
  setupFiles: ['./test/utils/setupJest.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['src/api'],
  transformIgnorePatterns: ['node_modules/?!(redux-saga)/*.d.ts']
};
