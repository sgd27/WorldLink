import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  banner: {
    alignSelf: 'center',
    height: (Metrics.screenWidth - 40) / 4,
    width: Metrics.screenWidth - 40,
    marginTop: 20
  },
  menu: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIcon: {
    height: 50,
    width: 50,
    marginBottom: 10
  },
  menuText: {
    fontSize: 24,
    color: Colors.blackText
  },
  border: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border
  },
  contentTitle: {
    marginLeft: 5,
    fontSize: 20,
    color: Colors.blackText
  },
  gridBackground: {
    justifyContent: 'center',
    width: (Metrics.screenWidth - 150) / 2,
    height: (Metrics.screenWidth - 150) / 2.5
  },
  gridTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})
