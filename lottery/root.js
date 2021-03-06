/**
 * Created by htsi on 2/13/17.
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'


import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import logger from './middleware/logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './containers/App'


const createStoreWithMW = applyMiddleware(logger, thunk)(createStore)
const store = createStoreWithMW(reducers)

export default class Root extends Component {
    render () {
        return (
            <Provider store={store}>
                <App/>
            </Provider>

        )
    }
}