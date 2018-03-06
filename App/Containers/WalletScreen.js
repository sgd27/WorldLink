import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'antd-mobile'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WalletScreenStyle'
import { Images, Metrics, Colors } from '../Themes'

class WalletScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '钱包账户',
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.backButton}>
          <Icon type="left" size="md" color="white" />
        </View>
      </TouchableOpacity>
    )
  })
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={Images.walletBanner}
          style={{
            width: Metrics.screenWidth,
            height: Metrics.screenWidth / 2.2
          }}
          resizeMode="stretch"
        />
        <View
          style={{
            height: 140,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingTop: 10
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <Text
              style={{ color: Colors.grayText, fontSize: 18, marginBottom: 5 }}
            >
              资产价值（元）
            </Text>
            <Text style={{ color: Colors.blackText, fontSize: 80 }}>0.00</Text>
          </View>

          <View
            style={{
              alignSelf: 'flex-end',
              marginBottom: 35,
              height: 50,
              width: StyleSheet.hairlineWidth,
              backgroundColor: Colors.mediumGrayText
            }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <Text
              style={{ color: Colors.grayText, fontSize: 18, marginBottom: 5 }}
            >
              钱包余额（元）
            </Text>
            <Text style={{ color: Colors.blackText, fontSize: 80 }}>0.00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 80,
            backgroundColor: 'white',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.border
          }}
        >
          <View style={styles.iconWrapper}>
            <Image
              style={styles.icon}
              source={Images.cz}
              resizeMode="contain"
            />
            <Text style={styles.iconText}>充值</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image
              style={styles.icon}
              source={Images.tx}
              resizeMode="contain"
            />
            <Text style={styles.iconText}>提现</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Image
              style={styles.icon}
              source={Images.zz}
              resizeMode="contain"
            />
            <Text style={styles.iconText}>转账</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            height: 45,
            backgroundColor: 'white'
          }}
        >
          <Text style={{ marginLeft: 20, color: Colors.redText, fontSize: 14 }}>
            重要头条
          </Text>
          <Image
            style={{ height: 15, width: 15 }}
            source={Images.tt}
            resizeMode="contain"
          />
          <Text
            style={{ marginLeft: 10, color: Colors.blackText, fontSize: 14 }}
          >
            普及金融标准 提升服务质量
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 10
          }}
        >
          <Image
            source={Images.zoushitu}
            style={{
              width: Metrics.screenWidth - 40,
              height: Metrics.screenWidth / 2.2
            }}
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WalletScreen)
