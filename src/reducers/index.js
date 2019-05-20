import { combineReducers } from 'redux'
import auth from './auth'
import pol from './pol'

const reducers = combineReducers({ auth, pol })

export default reducers
