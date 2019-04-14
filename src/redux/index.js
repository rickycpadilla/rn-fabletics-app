// @flow

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

let middleware = [thunk]

if (__DEV__) {
   middleware.push(logger)
}

export default function configureStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}
