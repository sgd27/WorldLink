import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'
import FJSON from 'format-json'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HomePageActions from '../Redux/HomePageRedux'

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
          <Text>{FJSON.plain(payload.data.homePagePicList)}</Text>
          <Carousel>
            <Image style={styles.banner} source={Images.xqBanner} />
            <Image style={styles.banner} source={Images.xqBanner} />
            <Image style={styles.banner} source={Images.xqBanner} />
          </Carousel>
          <View
            style={{
              flexDirection: 'row',
              height: 100,
              backgroundColor: 'white'
            }}
          >
            <View style={styles.iconWrapper}>
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
            </View>
          </View>
          <View
            style={{
              height: 205,
              backgroundColor: 'white',
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginTop: 15,
                marginBottom: 15
              }}
            >
              <View
                style={{
                  width: 5,
                  backgroundColor: Colors.greenBackground
                }}
              />
              <Text style={styles.contentTitle}>热门去处</Text>
            </View>
            <ScrollView
              style={[styles.container, { flexDirection: 'row' }]}
              horizontal
            >
              <ImageBackground
                style={styles.recommendBackground}
                source={Images.rmPic1}
              >
                <Text style={styles.hotNo}>1.&nbsp;</Text>
                <Text style={styles.hotText}>日本皇宫</Text>
              </ImageBackground>
              <ImageBackground
                style={styles.recommendBackground}
                source={Images.rmPic2}
              >
                <Text style={styles.hotNo}>2.&nbsp;</Text>
                <Text style={styles.hotText}>迪士尼</Text>
              </ImageBackground>
              <ImageBackground
                style={styles.recommendBackground}
                source={Images.rmPic1}
              >
                <Text style={styles.hotNo}>3.&nbsp;</Text>
                <Text style={styles.hotText}>日本皇宫</Text>
              </ImageBackground>
              <ImageBackground
                style={styles.recommendBackground}
                source={Images.rmPic2}
              >
                <Text style={styles.hotNo}>4.&nbsp;</Text>
                <Text style={styles.hotText}>迪士尼</Text>
              </ImageBackground>
            </ScrollView>
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
                marginLeft: 20,
                marginTop: 15
              }}
            >
              <View
                style={{
                  width: 5,
                  backgroundColor: Colors.greenBackground
                }}
              />
              <Text style={styles.contentTitle}>户外</Text>
            </View>
            <View style={styles.item}>
              <Image style={styles.itemImage} source={Images.hwPic} />
              <View
                style={{
                  flex: 1,
                  marginLeft: 15
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.itemTag}>信誉保证</Text>
                  <Text style={[styles.itemTag, { marginLeft: 10 }]}>
                    第三方保障
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
                  marginLeft: 15
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.itemTag}>信誉保证</Text>
                  <Text style={[styles.itemTag, { marginLeft: 10 }]}>
                    第三方保障
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
                  marginLeft: 15
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.itemTag}>信誉保证</Text>
                  <Text style={[styles.itemTag, { marginLeft: 10 }]}>
                    第三方保障
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
                  marginLeft: 15
                }}
              >
                <Text style={styles.itemTitle} numberOfLines={2}>
                  【东京出发】富士山+芦之湖经典一日自由行
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.itemTag}>信誉保证</Text>
                  <Text style={[styles.itemTag, { marginLeft: 10 }]}>
                    第三方保障
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
