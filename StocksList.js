import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

const StocksList = (props) => {
    return (
        <FlatList
            keyExtractor = {item => item.ticker} // Gerald Ding
            data = {props.stocks}
            renderItem = {(object) => <Row item={object.item} navigation={props.navigation} />}
        />
    )
}

StocksList.propTypes = {
    stocks: PropTypes.arrayOf(PropTypes.object),
    navigation: PropTypes.object.isRequired
};

export default StocksList
