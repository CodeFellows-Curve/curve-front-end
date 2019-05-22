import { combineReducers } from 'redux'
import auth from './auth-reducer'
import graph from './graph-reducer'
import competencies from './competencies-reducer'

const reducers = combineReducers({ graph, auth, competencies })

export default reducers
