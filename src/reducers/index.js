import { combineReducers } from 'redux'
import pol from './pol'
import graph from './graph-reducer'

const reducers = combineReducers({ graph })

export default reducers
