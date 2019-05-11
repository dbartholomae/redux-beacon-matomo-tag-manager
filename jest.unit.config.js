const commonConfig = require('./jest.config')

module.exports = {
  ...commonConfig,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testRegex: '.*\.(test|spec)\\.(t|j)sx?$'
}
