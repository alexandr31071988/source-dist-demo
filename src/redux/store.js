import {createStore, applyMiddleware} from "redux";

import reducer from './sources'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({});

const enhancer = applyMiddleware(thunk, logger)
const store = createStore(reducer, enhancer)
window.store = store.getState()
export default store
