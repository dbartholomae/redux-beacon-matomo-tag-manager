import { applyMiddleware, createStore } from 'redux'
import { createMiddleware } from 'redux-beacon'
import MatomoTagManager from '../lib/index'

const ACTION_TYPE = 'ACTION_TYPE'

// Set up which actions should trigger which events or variables
const eventsMap = {
  [ACTION_TYPE]: () => ({
    event: 'integrationTestEvent'
  })
}

// Create the middleware
const matomoTagManager = MatomoTagManager()
const matomoTagManagerMiddleware = createMiddleware(eventsMap, matomoTagManager)

const store = createStore((state = {}) => state, applyMiddleware(matomoTagManagerMiddleware))

// When you dispatch an action, the middleware will trigger the event
store.dispatch({
  type: ACTION_TYPE
})
