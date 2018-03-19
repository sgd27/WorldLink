import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'
import FJSON from 'format-json'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomePageActions from '../Redux/HomePageRedux'
import ImageResource from '../Transforms/ImageResource'

// Styles
import styles from './Styles/InterestScreenStyle'
import { Images, Metrics, Colors } from '../Themes'

class InterestScreen extends Component {
  static navigationOptions = {
    title: '兴趣',
    header: null
  }

  componentWillMount() {
    this.props.getHomePage()
  }

  gotoDetail = () => {
    this.props.navigation.navigate('WebScreen', {
      title: '产品详情',
      url: 'http://101.132.135.141:8080/product?id=58'
    })
  }
  render() {
    const { payload } = this.props
    return (
      <View
        style={[styles.container, { backgroundColor: Colors.blueBackground }]}
      >
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={[styles.container, { backgroundColor: Colors.grayBackground }]}
        >
          <Carousel>
            {payload ? (
              payload.homePagePicList.map(pic => (
                <Image
                  key={pic.id}
                  style={styles.banner}
                  source={{ uri: ImageResource(pic.pic) }}
                />
              ))
            ) : (
              <Image style={styles.banner} source={Images.xqBanner} />
            )}
          </Carousel>
          <View
            style={{
              flexDirection: 'row',
              height: 80,
              backgroundColor: 'white'
            }}
          >
            {payload ? (
              payload.interestList.map(interest => (
                <View key={interest.id} style={styles.iconWrapper}>
                  <Image style={styles.icon} source={Images.rm} />
                  <Text style={styles.iconText}>{interest.name}</Text>
                </View>
              ))
            ) : (
              <View style={styles.iconWrapper}>
                <Image style={styles.icon} source={Images.rm} />
                <Text style={styles.iconText}>热门</Text>
              </View>
            )}
            {/* <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={Images.rm} />
              <Text style={styles.iconText}>热门</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={Images.hw} />
              <Text style={styles.iconText}>户外</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={Images.nv} />
              <Text style={styles.iconText}>女性</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={Images.sw} />
              <Text style={styles.iconText}>商务</Text>
            </View> */}
          </View>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 14,
                marginTop: 10
              }}
            >
              <View
                style={{
                  width: 3,
                  backgroundColor: Colors.greenBackground
                }}
              />
              <Text style={styles.contentTitle}>户外</Text>
            </View>
            <TouchableHighlight
              underlayColor={Colors.grayBackground}
              onPress={this.gotoDetail}
            >
              <View style={styles.item}>
                <Image style={styles.itemImage} source={Images.hwPic} />
                <View
                  style={{
                    flex: 1,
                    marginLeft: 10
                  }}
                >
                  <Text style={styles.itemTitle} numberOfLines={2}>
                    【东京出发】富士山+芦之湖经典一日自由行
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.itemTag}>&nbsp;信誉保证&nbsp;</Text>
                    <Text style={[styles.itemTag, { marginLeft: 7 }]}>
                      &nbsp;第三方保障&nbsp;
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end'
                    }}
                  >
                    <Text style={styles.itemPeriod}>一天一晚</Text>
                    <Text style={styles.itemPrice}>￥1990</Text>
                    <Text
                      style={[
                        styles.itemPrice,
                        { color: Colors.mediumGrayText }
                      ]}
                    >
                      起
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.separator} />
            <View style={styles.item}>
              <Image style={styles.itemImage} source={Images.hwPic} />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.itemTag}>&nbsp;信誉保证&nbsp;</Text>
                  <Text style={[styles.itemTag, { marginLeft: 7 }]}>
                    &nbsp;第三方保障&nbsp;
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}
                >
                  <Text style={styles.itemPeriod}>一天一晚</Text>
                  <Text style={styles.itemPrice}>￥1990</Text>
                  <Text
                    style={[styles.itemPrice, { color: Colors.mediumGrayText }]}
                  >
                    起
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.item}>
              <Image style={styles.itemImage} source={Images.hwPic} />
              <View
                style={{
                  flex: 1,
                  marginLeft: 10
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.itemTag}>&nbsp;信誉保证&nbsp;</Text>
                  <Text style={[styles.itemTag, { marginLeft: 7 }]}>
                    &nbsp;第三方保障&nbsp;
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}
                >
                  <Text style={styles.itemPeriod}>一天一晚</Text>
                  <Text style={styles.itemPrice}>￥1990</Text>
                  <Text
                    style={[styles.itemPrice, { color: Colors.mediumGrayText }]}
                  >
                    起
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  payload: state.homePage.payload,
  fetching: state.homePage.fetching,
  error: state.homePage.error
})

const mapDispatchToProps = dispatch => ({
  getHomePage: () => dispatch(HomePageActions.homePageRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(InterestScreen)
