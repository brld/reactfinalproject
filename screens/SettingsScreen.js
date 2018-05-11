import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import {connect} from "react-redux"
import {updateSettings} from "../redux/actions.js"

class SettingsScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            show: "legal_name",
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Settings',
            headerTintColor: '#d31b1b'
        }
    }

    handleTap(show) {
        if (show == "legal_name") {
            this.props.updateSettings("ceo")
        } else {
            this.props.updateSettings("legal_name")
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>You are currently showing {this.state.show}.</Text>
            <Button onPress={() => this.handleTap(this.state.show)} title="Toggle"/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
})

const mapStateToProps = state => ({
    show: state.show,
})

export default connect(mapStateToProps, {updateSettings})(SettingsScreen)