import delay from 'delay'

describe('matomo-tag-manager', () => {
  const consoleListener = jest.fn()
  beforeAll(async () => {
    page.on('console', msg => consoleListener(msg.text()))
    await page.goto('http://localhost:3000/')
  })

  it('activates the test trigger on initialization', async () => {
    await delay(1000)
    expect(consoleListener).toHaveBeenCalledWith('Tag manager loaded')
  })
})
