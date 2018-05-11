import React from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import PropTypes from 'prop-types'
import {fetchStockData} from '../api'
import {fetchMoreStockData} from '../api'

export default class StockSpecificsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            currentStock: {}, currentStockPrice: {},
        };
    }

    static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: navigation.getParam('stock').name,
			headerTintColor: '#d31b1b'
		};
    };

    componentDidMount() {
        this.getSpecifics()
    }

    getSpecifics = async () => {
        const current = this.props.navigation.getParam('stock');
        const results = await fetchMoreStockData(current.ticker)
        this.setState({currentStock: results})
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.container}><Text style={styles.company}>{this.props.navigation.getParam('stock').name}</Text></View>

                <Text style={styles.description}>{this.props.navigation.getParam('stock').short_description}</Text>
                <View style={styles.horizontalRule}/>
                <Text style={styles.label}>OPEN: <Text style={styles.data}>{this.state.currentStock.open}</Text></Text>
                <View style={styles.hrSmall}/>
                <Text style={styles.label}>HIGH: <Text style={styles.data}>{this.state.currentStock.high}</Text></Text>
                <View style={styles.hrSmall}/>
                <Text style={styles.label}>LOW: <Text style={styles.data}>{this.state.currentStock.low}</Text></Text>
                <View style={styles.hrSmall}/>
                <Text style={styles.label}>CLOSE: <Text style={styles.data}>{this.state.currentStock.close}</Text></Text>

            </ScrollView>
        )
    }
}

StockSpecificsScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

const imageDimensions = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
    company: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    },
    label: {
        fontSize: 14,
        padding: 10,
        fontWeight: 'bold',
    },
    data: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        fontWeight: 'normal',
    },
    description: {
        padding: 10,
        fontStyle: 'italic',
    },
    horizontalRule: { // StackOverflow styling
        margin: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    hrSmall: {
        margin: 10,
        marginRight: 180,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
  });
