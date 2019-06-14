const commonConfig = require('./jest.common.config')

module.exports = {
  ...commonConfig,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*', '!src/**/*.int-spec.ts'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testRegex: '.*\\.(test|spec)\\.(t|j)sx?$'
}
