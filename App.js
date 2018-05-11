import React from 'react'
import {Constants} from 'expo'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import StockListScreen from './screens/StockListScreen'
import StockSpecificsScreen from './screens/StockSpecificsScreen'
import SettingsScreen from './screens/SettingsScreen'
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux'
import store from './redux/store'

console.disableYellowBox = true;

// Navigation pages
const MainStack = createStackNavigator (
  {
    StockList: StockListScreen,
    StockSpecifics: StockSpecificsScreen,
  },
  {
    initialRouteName: 'StockList',
    navigationOptions: {
      headerTintColor: '#d31b1b',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

// Credit to lecture 7 for tab navigator
const MainTabs = createBottomTabNavigator(
  {
    Stocks: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#d31b1b',
    },
  }
)


const AppNavigator = createSwitchNavigator({
	Main: MainTabs
})

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "", movies:""
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
