import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  banner: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth / 1.5
  },
  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 40,
    height: 40
  },
  iconText: {
    marginTop: 8,
    fontSize: 11,
    color: Colors.blackText
  },
  contentTitle: {
    marginLeft: 5,
    fontSize: 14,
    color: Colors.blackText
  },
  recommendBackground: {
    width: 130,
    height: 100,
    marginLeft: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 8
  },
  hotNo: {
    color: Colors.greenBackground,
    fontSize: 13,
    fontStyle: 'italic'
  },
  hotText: {
    color: 'white',
    fontSize: 10,
    marginBottom: 4
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 86,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10
  },
  itemImage: {
    width: 100,
    height: 66
  },
  itemTitle: {
    color: Colors.blackText,
    fontSize: 10
  },
  itemTag: {
    borderRadius: 3,
    borderColor: Colors.greenBackground,
    borderWidth: 1,
    padding: 2,
    color: Colors.greenBackground,
    fontSize: 10
  },
  itemPeriod: {
    flex: 1,
    fontSize: 10,
    color: Colors.mediumGrayText
  },
  itemPrice: {
    color: Colors.greenBackground,
    fontSize: 15
  },
  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 14
  }
})
