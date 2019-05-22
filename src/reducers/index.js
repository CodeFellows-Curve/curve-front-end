import { combineReducers } from 'redux'
import auth from './auth-reducer'
import graph from './graph-reducer'

const reducers = combineReducers({ graph, auth })


export default reducers
