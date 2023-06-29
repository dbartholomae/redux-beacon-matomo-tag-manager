const commonConfig = require('./jest.common.config')

module.exports = {
  ...commonConfig,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.int-spec.ts'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)\\.(t|j)sx?$'
}
