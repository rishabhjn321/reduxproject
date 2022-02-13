import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
const store = createStore(rootReducer, applyMiddleware(logger)) // second parameter middleware logs infor related to redux store

export default store