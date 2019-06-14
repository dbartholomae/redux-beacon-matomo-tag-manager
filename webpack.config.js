const path = require('path')

module.exports = {
  devServer: {
    index: './fixtures/index.html',
    historyApiFallback: {
      index: './fixtures/index.html'
    }

  },
  entry: './fixtures/index.js'
}
