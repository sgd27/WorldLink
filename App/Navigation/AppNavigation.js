import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import SignUpScreen from '../Containers/SignUpScreen'
import LoginScreen from '../Containers/LoginScreen'
import React from 'react'
import { Image } from 'react-native'
import AccountScreen from '../Containers/AccountScreen'
import DestinationScreen from '../Containers/DestinationScreen'
import InterestScreen from '../Containers/InterestScreen'
import WalletScreen from '../Containers/WalletScreen'
import WebScreen from '../Containers/WebScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import { Images, Colors } from '../Themes'

// Manifest of possible screens
const tabNav = TabNavigator(
  {
    InterestScreen: { screen: InterestScreen },
    DestinationScreen: { screen: DestinationScreen },
    AccountScreen: { screen: AccountScreen },
    LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconSource
        if (routeName === 'InterestScreen') {
          iconSource = focused ? Images.xqSelected : Images.xqNormal
        } else if (routeName === 'DestinationScreen') {
          iconSource = focused ? Images.mddSelected : Images.mddNormal
        } else if (routeName === 'AccountScreen') {
          iconSource = focused ? Images.meSelected : Images.meNormal
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Image
            source={iconSource}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.blackText,
      inactiveTintColor: Colors.grayText,
      style: styles.tabBar
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)
const PrimaryNav = StackNavigator(
  {
    tabNav: { screen: tabNav },
    WalletScreen: { screen: WalletScreen },
    LaunchScreen: { screen: LaunchScreen },
    WebScreen: { screen: WebScreen },
    SignUpScreen: { screen: SignUpScreen },
    LoginScreen: { screen: LoginScreen }
  },
  {
    // Default config for all screens

    initialRouteName: 'tabNav',
    navigationOptions: {
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitleStyle
    }
  }
)

export default PrimaryNav
