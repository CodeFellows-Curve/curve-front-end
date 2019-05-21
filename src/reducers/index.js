import { combineReducers } from 'redux'
import auth from './auth'
import pol from './pol'
import graph from './graph-reducer'

const reducers = combineReducers({ pol, graph, auth })

export default reducers
