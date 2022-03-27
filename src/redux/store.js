import {createStore, applyMiddleware} from "redux";

import reducer from './sources'
import { createLogger } from 'redux-logger'

const logger = createLogger({});

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, enhancer)
window.store = store.getState()
export default store
