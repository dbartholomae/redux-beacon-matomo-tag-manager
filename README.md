# redux-beacon-matomo-tag-manager
 [![npm version](https://badge.fury.io/js/redux-beacon-matomo-tag-manager.svg)](https://npmjs.org/package/redux-beacon-matomo-tag-manager)  [![downloads](https://img.shields.io/npm/dw/redux-beacon-matomo-tag-manager.svg)](https://npmjs.org/package/redux-beacon-matomo-tag-manager)  [![open issues](https://img.shields.io/github/issues-raw/dbartholomae/redux-beacon-matomo-tag-manager.svg)](https://github.com/dbartholomae/redux-beacon-matomo-tag-manager/issues)  [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdbartholomae%2Fredux-beacon-matomo-tag-manager.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdbartholomae%2Fredux-beacon-matomo-tag-manager?ref=badge_shield) [![debug](https://img.shields.io/badge/debug-blue.svg)](https://github.com/visionmedia/debug#readme)  [![build status](https://img.shields.io/circleci/project/github/dbartholomae/redux-beacon-matomo-tag-manager/master.svg?style=flat)](https://circleci.com/gh/dbartholomae/workflows/redux-beacon-matomo-tag-manager/tree/master)  [![codecov](https://codecov.io/gh/dbartholomae/redux-beacon-matomo-tag-manager/branch/master/graph/badge.svg)](https://codecov.io/gh/dbartholomae/redux-beacon-matomo-tag-manager)  [![dependency status](https://david-dm.org/dbartholomae/redux-beacon-matomo-tag-manager.svg?theme=shields.io)](https://david-dm.org/dbartholomae/redux-beacon-matomo-tag-manager)  [![devDependency status](https://david-dm.org/dbartholomae/redux-beacon-matomo-tag-manager/dev-status.svg)](https://david-dm.org/dbartholomae/redux-beacon-matomo-tag-manager?type=dev)  [![Greenkeeper](https://badges.greenkeeper.io/dbartholomae/redux-beacon-matomo-tag-manager.svg)](https://greenkeeper.io/)  [![semantic release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release#badge)

Matomo (formerly Piwik) tag manager integration for [redux-beacon](https://rangle.gitbook.io/redux-beacon/). 

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install redux-beacon-matomo-tag-manager --save
```

## Usage
1. Sign up for or install [Matomo Tag Manager](https://matomo.org/docs/tag-manager/) and create a new web container.
2. Add the Matomo Tag Manager container snippet to your site.
3. Install [redux-beacon](https://rangle.gitbook.io/redux-beacon/) in your app
4. Use this library to connect redux-beacon to the tag manager

```typescript
import { applyMiddleware, createStore } from 'redux'
import { createMiddleware } from 'redux-beacon'
import MatomoTagManager from 'redux-beacon-matomo-tag-manager'

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
```

## Thanks

Thanks to [Matomo](https://matomo.org) for supporting this project by providing an analytics property for integration testing this library.