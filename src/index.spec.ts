import MatomoTagManager, { IMatomoTagManagerOptions } from './'

describe('index', () => {
  it('exports the MatomoTagManager', () => {
    expect(MatomoTagManager).toBeDefined()
  })
  it('exports the IMatomoTagManagerOptions', () => {
    const options: IMatomoTagManagerOptions = {}
    expect(options).toBeDefined()
  })
})
