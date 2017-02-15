/**
 * Created by htsi on 2/13/17.
 */
'use strict'

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native'
import { TabViewAnimated, TabBar } from  'react-native-tab-view'

import Max from './Max'
import Mega from './Mega'

export default class App extends Component {

    state = {
        index: 0,
        routes: [
            {key: '1', title: 'MEGA645'},
            {key: '2', title: 'MAX4D'}
        ]
    }

    _handleChangeTab = (index) => {
        this.setState({index})
    }

    _renderHeader = (props) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                style={styles.tabBar}
                labelStyle={styles.labelStyle}
            />
        )
    }

    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <Mega/>
            case '2':
                return <Max/>
            default:
                return null
        }
    }

    constructor (props) {
        super(props)

    }

    render() {

        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    indicator: {
        backgroundColor:'#fff'
    },
    tabBar: {
        backgroundColor:'#000',
    },
    labelStyle: {
        color:'#fff'
    }
})