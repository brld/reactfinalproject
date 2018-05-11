import React from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import {Constants} from 'expo'
import {fetchStockData} from '../api'
import {fetchMoreStocks} from '../api'
import {fetchLastPrice} from '../api'
import PropTypes from 'prop-types'
import StocksList from '../StocksList'

export default class StockListScreen extends React.Component {
  constructor() {
    super();
    this.customKey = 0;
    this.state = {
      stocks: ["AAPL", "GOOG", "FB", "TWTR", "TSLA", "MSFT", "CSCO", "INTC", "AMZN", "NFLX", "CRM", "GPRO"], stockData: [], stockPrices: [], totalStock: []
    };
    this.getStocks()
  }

  static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Stocks',
			headerTintColor: '#d31b1b'
		};
	};

  addKey = (val, key) => ({key: this.customKey++, ...val})
  getStocks = async () => {
    const results = await fetchStockData(this.state.stocks)
    const resultsMapped = results.map(this.addKey)
    this.setState({stockData: resultsMapped})

    // const resultsNew = await fetchLastPrice(this.state.stocks)
    // const resultsMappedNew = resultsNew.map(this.addKey)
    // this.setState({stockPrices: resultsMappedNew})

    // this.setState({ totalStock: [...this.state.totalStock, ...this.state.stockData] })
    // this.setState({ totalStock: [...this.state.totalStock, ...this.state.stockPrices] })
  }

  render() {
    return (
      <View style={styles.container}>
        <StocksList stocks={this.state.stockData} prices={this.state.stockPrices} navigation={this.props.navigation} />
      </View>
    );
  }
}

StockListScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
