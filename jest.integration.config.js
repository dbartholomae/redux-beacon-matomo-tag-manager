const commonConfig = require('./jest.config')

module.exports = {
  ...commonConfig,
  testRegex: '.*\.int-(test|spec)\\.(t|j)sx?$'
}
