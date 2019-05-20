import React from 'react'
import { Router } from '@reach/router'
// import { Provider } from 'react-redux';
import Layout from '../components/layout/'
import PrivateRoute from '../components/private-route'
import Login from '../components/login'
import Graph from '../components/graph'

// import createStore from "../store";
// const store = createStore();
// console.log('app.js line 11', store);

// const Graph = () => <div>I am beautiful graph</div>
const List = () => <div>I am very much list</div>

const App = () => (
  <Layout>
     <Router>
        <PrivateRoute path="/app/graph" component={Graph} />
        <PrivateRoute path="/app/list" component={List} />
        <Login path="/app/login" />
     </Router>
    </Layout>
)

export default App
