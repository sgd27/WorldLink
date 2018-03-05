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
    width: 50,
    height: 50
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.blackText
  },
  contentTitle: {
    marginLeft: 5,
    fontSize: 20,
    color: Colors.blackText
  },
  recommendBackground: {
    width: 190,
    height: 150,
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 8
  },
  hotNo: {
    color: Colors.greenBackground,
    fontSize: 22,
    fontStyle: 'italic'
  },
  hotText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 110,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  itemImage: {
    width: 120,
    height: 80
  },
  itemTitle: {
    color: Colors.blackText,
    fontSize: 14,
    fontWeight: 'bold'
  },
  itemTag: {
    borderRadius: 4,
    borderColor: Colors.greenBackground,
    borderWidth: 1,
    padding: 2,
    color: Colors.greenBackground,
    fontSize: 12
  },
  itemPeriod: {
    flex: 1,
    fontSize: 14,
    color: Colors.mediumGrayText
  },
  itemPrice: {
    color: Colors.greenBackground,
    fontSize: 20
  },
  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})
