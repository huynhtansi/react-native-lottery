/**
 * Created by htsi on 2/14/17.
 */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Max extends Component {

    render() {
        return (
            <View style={[ styles.page, {backgroundColor: '#ffffff'}]} />
        )
    }

}

const styles = StyleSheet.create({
    page: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
})