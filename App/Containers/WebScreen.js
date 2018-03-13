import React, { Component } from 'react'
import {
  WebView,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native'
import { Icon } from 'antd-mobile'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WebScreenStyle'

class WebScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
      >
        <View
          style={{
            width: 60,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 13
          }}
        >
          <Icon type="left" size="md" color="white" />
        </View>
      </TouchableOpacity>
    ),
    headerRight: <View style={{ width: 60 }} />
  })

  renderLoadingView() {
    return (
      <ActivityIndicator
        size="small"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    )
  }
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <WebView
          source={{ uri: params.url }}
          style={styles.container}
          startInLoadingState
          renderLoading={this.renderLoadingView}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WebScreen)
