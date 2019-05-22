import { combineReducers } from 'redux'
import auth from './auth-reducer'
import graph from './graph-reducer'
import competencies from './competencies-reducer'
import users from './users-reducer'

const reducers = combineReducers({ graph, auth, competencies, users })

export default reducers
