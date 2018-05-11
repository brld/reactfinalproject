import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import store from './redux/store'

const styles = StyleSheet.create({
    row: {
        padding:10, 
        flexDirection: 'row', 
        alignSelf: 'stretch', 
    },
    item: {
        marginLeft: 5,
    },
    ticker: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    legalName: {
        position: 'absolute',
        padding: 10,
        fontSize: 14,
        fontStyle: 'italic',
        marginLeft: Dimensions.get('window').width / 2 + 10
    },
})

const mapStateToProps = state => ({ show: state })

const Row = props => {
    console.log(props.show)
    return (
    <TouchableOpacity style={styles.row} onPress={() => props.navigation.navigate('StockSpecifics', {stock: props.item})}>
        <View style={styles.row}>
                <Text style={[styles.item, styles.ticker]}>{props.item.ticker}</Text><Text style={[styles.item, styles.legalName]}>{props.item[props.show]}</Text>
        </View>
    </TouchableOpacity>
    )
}

Row.propTypes = {
    navigation: PropTypes.object.isRequired,
    item: PropTypes.shape({
        ticker: PropTypes.string.isRequired,
    }),
}

export default connect(state => ({ show: state }))(Row)
