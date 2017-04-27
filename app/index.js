import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware,
} from 'react-router'
import useRelay from 'react-router-relay'

import App from './components/App'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

import ViewerQueries from './queries/ViewerQueries'
import ProductQueries from './queries/ProductQueries'

import './index.css'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(process.env.GRAPHQL_URL),
)

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route
      path="/"
      component={App}
    >
      <IndexRoute
        component={ProductList}
        queries={ViewerQueries}
      />

      <Route
        path="/product/:productId"
        component={ProductDetail}
        queries={ProductQueries}
      />
    </Route>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
)
