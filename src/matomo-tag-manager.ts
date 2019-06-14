import { Target } from 'redux-beacon'

/** Options for the redux-beacon Matomo tag manager */
export interface IMatomoTagManagerOptions {
  /** The dataLayer used for pushing events and variables. By default '_mtm' */
  dataLayerName?: string
}

const MatomoTagManager = ({
  dataLayerName = '_mtm'
}: IMatomoTagManagerOptions = {}): Target => (events: object[]) => {
  // tslint:disable-next-line:strict-type-predicates
  if (typeof window === 'undefined') {
    return
  }

  if (
    !(window as any)[dataLayerName] ||
    typeof (window as any)[dataLayerName].push !== 'function'
  ) {
    throw new Error(
      `redux-beacon error: window.${dataLayerName} is not defined. Have you forgotten to include Matomo Tag Manager and dataLayer?`
    )
  }

  events.forEach(event => {
    // tslint:disable-next-line:strict-type-predicates
    if (typeof event === 'object') {
      // tslint:disable-next-line:semicolon
      ;(window as any)[dataLayerName].push(event)
    }
  })
}

export default MatomoTagManager
