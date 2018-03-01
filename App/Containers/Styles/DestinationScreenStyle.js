import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
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
  }
})
