import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet
} from 'react-native'
import { List, Button } from 'antd-mobile'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AccountScreenStyle'
import { Images, Colors, Metrics } from '../Themes'

const { Item, Brief } = List

class AccountScreen extends Component {
  static navigationOptions = {
    title: '我的',
    header: null
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={Images.meBg}
          style={{
            width: Metrics.screenWidth,
            height: 300,
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View
              style={{
                width: 90,
                height: 90,
                borderRadius: 45,
                backgroundColor: Colors.blueBackground
              }}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginBottom: 5,
              marginTop: 5
            }}
          >
            Samantha Ayrton
          </Text>
          <Text style={{ color: 'white', fontSize: 14, marginBottom: 20 }}>
            意大利，罗马
          </Text>
          <View
            style={{
              height: 70,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.dimmedBackground
            }}
          >
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                钱包账户
              </Text>
              <Text style={{ color: 'white', fontSize: 14 }}>180****9928</Text>
            </View>
            <View
              style={{
                height: 40,
                width: StyleSheet.hairlineWidth,
                backgroundColor: 'white'
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
                已绑定账户
              </Text>
              <Text style={{ color: 'white', fontSize: 14 }}>180****9928</Text>
            </View>
          </View>
        </ImageBackground>
        <List style={{ marginTop: 10 }}>
          <Item
            thumb={
              <Image
                source={Images.smrz}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            extra="已实名"
            arrow="horizontal"
          >
            实名认证
          </Item>
          <Item
            thumb={
              <Image
                source={Images.zhdj}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            extra="2"
            arrow="horizontal"
          >
            账户等级
          </Item>
          <Item
            thumb={
              <Image
                source={Images.ddjl}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            extra="2"
            arrow="horizontal"
          >
            订单记录
          </Item>
        </List>
        <List style={{ marginTop: 10 }}>
          <Item
            thumb={
              <Image
                source={Images.phone}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            extra="180****9928"
            arrow="horizontal"
          >
            修改绑定手机
          </Item>
          <Item
            thumb={
              <Image
                source={Images.mm}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            arrow="horizontal"
          >
            支付密码
          </Item>
          <Item
            thumb={
              <Image
                source={Images.xinxi}
                style={{ width: 20, height: 20, marginRight: 10 }}
                resizeMode="stretch"
              />
            }
            arrow="horizontal"
          >
            完善个人信息
          </Item>
        </List>
        <Button style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: Colors.redText, fontSize: 18 }}>
            退出当前账户
          </Text>
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
