/**
 * Created by htsi on 2/14/17.
 */
import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native'
import moment from 'moment-timezone'

import GiftedListView from 'react-native-gifted-listview'

export default class Mega extends Component {

    _renderRowView(rowData: Object) {
        return (
            <TouchableHighlight style={styles.row}>
                <View>
                    <Text style={styles.titleDrawNo}>Kỳ <Text style={{color:'red'}}>#000{rowData.draw_no}</Text> ngày <Text style={{color:'red'}}>{moment(new Date(rowData.draw_date)).format('DD/MM/YYYY')}</Text></Text>
                    <View style={styles.panelNumber}>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball1}</Text></View>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball2}</Text></View>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball3}</Text></View>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball4}</Text></View>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball5}</Text></View>
                        <View style={styles.circleText}><Text style={{textAlign:'center', backgroundColor:'rgba(0,0,0,0)'}}>{rowData.ball6}</Text></View>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.panelPrize}>
                        <Text style={{fontWeight:'700', width:80, textAlign:'left'}}>Jackpot</Text>
                        <Text style={{width:50, textAlign:'right'}}>{rowData.num_of_jackpot_vl}</Text>
                        <Text style={{width:120, textAlign:'right'}}>{rowData.jackpot}</Text>
                    </View>
                    <View style={styles.panelPrize}>
                        <Text style={{fontWeight:'700', width:80, textAlign:'left'}}>Giải nhất</Text>
                        <Text style={{width:50, textAlign:'right'}}>{rowData.num_of_first_prize_vl}</Text>
                        <Text style={{width:120, textAlign:'right'}}>10.000.000</Text>
                    </View>
                    <View style={styles.panelPrize}>
                        <Text style={{fontWeight:'700', width:80, textAlign:'left'}}>Giải nhì</Text>
                        <Text style={{width:50, textAlign:'right'}}>{rowData.num_of_second_prize_vl}</Text>
                        <Text style={{width:120, textAlign:'right'}}>300.000</Text>
                    </View>
                    <View style={styles.panelPrize}>
                        <Text style={{fontWeight:'700', width:80, textAlign:'left'}}>Giải ba</Text>
                        <Text style={{width:50, textAlign:'right'}}>{rowData.num_of_third_prize_vl}</Text>
                        <Text style={{width:120, textAlign:'right'}}>30.000</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={[ styles.page, {backgroundColor: '#fafafa'}]}>
                <GiftedListView
                    rowView={this._renderRowView}
                    withSections={false}
                    onFetch={this._onFetch}
                    firstLoader={true}
                    pagination={false}
                    refreshable={true}
                    enableEmptySections={true}
                />
            </View>
        )
    }

    _onFetch(page = 0, callback, options) {
        /*setTimeout(() => {
             rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
            if (page === 3) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching*/
        fetch('http://14.161.21.179:8889/api/v1/mega/history')
            .then((response) => response.json())
            .then((json) => {
                callback(json.data)
            })
            .catch((error) => {
                console.error(error)
            })
            .done()
    }

    _longToDate(millisecond) {
        var date = new Date(millisecond)
        return date.toDateString();
    }
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent: 'center'
    },
    row: {
        backgroundColor: "#fff",
        borderRadius: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0.3,
        },
        marginLeft:8,
        marginRight:8,
        marginTop:8,
        padding: 8
    },
    titleDrawNo: {
        textAlign: 'left',
        fontWeight: '300'
    },
    panelNumber: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:8
    },
    circleText: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius:16,
        justifyContent:'center',
        width:32,
        height:32
    },
    line: {
        backgroundColor:'red',
        height:1,
        margin:8,
        opacity:0.1
    },
    panelPrize: {
        flexDirection: 'row',
        justifyContent:'space-between',
        margin: 8,
        flex:1
    }
})