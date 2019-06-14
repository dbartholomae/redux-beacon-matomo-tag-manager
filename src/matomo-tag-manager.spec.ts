import MatomoTagManager from './matomo-tag-manager'

describe('matomo-tag-manager', () => {
  describe('happy path', () => {
    it('pushes events to _mtm by default', () => {
      const push = jest.fn()
      // @ts-ignore
      global.window = { _mtm: { push } }

      const matomoTagManager = MatomoTagManager()
      const events = [
        {
          event: 'testEvent'
        }
      ]

      matomoTagManager(events)

      expect(push).toHaveBeenCalledWith(events[0])
    })

    it('pushes events to a custom set datalayer', () => {
      const push = jest.fn()
      // @ts-ignore
      global.window = { custom: { push } }

      const matomoTagManager = MatomoTagManager({ dataLayerName: 'custom' })
      const events = [
        {
          event: 'testEvent'
        }
      ]

      matomoTagManager(events)

      expect(push).toHaveBeenCalledWith(events[0])
    })
  })

  describe('sad path', () => {
    it('does not do anything if window is not defined', () => {
      // @ts-ignore
      global.window = undefined
      const matomoTagManager = MatomoTagManager()
      expect(matomoTagManager).not.toThrow()
    })

    it('throws an error if the dataLayer is not defined', () => {
      // @ts-ignore
      global.window = {}
      const matomoTagManager = MatomoTagManager()
      expect(matomoTagManager).toThrow()
    })

    it('throws an error if the dataLayer does not have a push method', () => {
      // @ts-ignore
      global.window = { _mtm: {} }
      const matomoTagManager = MatomoTagManager()
      expect(matomoTagManager).toThrow()
    })

    it('does not push events that are not objects', () => {
      const push = jest.fn()
      // @ts-ignore
      global.window = { _mtm: { push } }

      const matomoTagManager = MatomoTagManager()
      // tslint:disable-next-line:no-empty
      const events = [() => {}]

      matomoTagManager(events)

      expect(push).not.toHaveBeenCalled()
    })
  })
})
