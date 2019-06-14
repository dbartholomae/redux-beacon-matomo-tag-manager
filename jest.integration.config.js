const commonConfig = require('./jest.common.config')

module.exports = {
  ...commonConfig,
  preset: 'jest-puppeteer-preset',
  testEnvironment: 'jest-environment-puppeteer',
  testRegex: '.*\.int-(test|spec)\\.tsx?$'
}
