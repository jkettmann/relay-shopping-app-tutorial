import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router'

import App from './components/App'
import ProductList from './components/ProductList'

import './index.css'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(process.env.GRAPHQL_URL),
)

ReactDOM.render(
  <Router
    history={browserHistory}
  >
    <Route
      path="/"
      component={App}
    >
      <IndexRoute
        component={ProductList}
      />
    </Route>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
