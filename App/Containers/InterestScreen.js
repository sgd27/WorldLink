import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InterestScreenStyle'

class InterestScreen extends Component {
  static navigationOptions = {
    title: '兴趣',
    header: null
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior="position">
            <Text>InterestScreen</Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InterestScreen)
