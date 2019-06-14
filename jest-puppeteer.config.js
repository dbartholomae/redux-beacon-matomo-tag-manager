module.exports = {
  launch: {
    headless: false
  },
  server: {
    command: 'npm start',
    host: 'localhost',
    protocol: 'http',
    port: 3000,
    launchTimeout: 600000,
    usedPortAction: 'kill'
  }
}
