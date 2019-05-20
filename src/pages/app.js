import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux';
import createStore from '../store'

import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'

const store = createStore();


// const Graph = () => <div>I am beautiful graph</div>
const List = () => <div>I am very much list</div>

const App = () => (
  <Provider store={store}>
    <Layout>
     <Router>
        <PrivateRoute path="/app/graph" component={Graph} />
        <PrivateRoute path="/app/list" component={List} />
        <Login path="/app/login" />
     </Router>
    </Layout>
  </Provider>
)

export default App
