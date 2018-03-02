import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { Grid } from 'antd-mobile'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DestinationScreenStyle'
import { Colors, Images, Metrics } from '../Themes'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: Images.mgBg,
  text: `Name${i}`
}))

class DestinationScreen extends Component {
  static navigationOptions = {
    title: '目的地'
  }
  constructor() {
    super()
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    const { selectedTab } = this.state
    let contentView
    switch (selectedTab) {
      case 0:
        contentView = (
          <View
            style={{
              height: 600,
              flexGrow: 1,
              paddingLeft: 15,
              paddingRight: 15
            }}
          >
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    marginLeft: 5,
                    width: 5,
                    backgroundColor: Colors.blueBackground
                  }}
                />
                <Text style={styles.contentTitle}>热门去处</Text>
              </View>
              <View>
                <Grid
                  columnNum={2}
                  data={data}
                  hasLine={false}
                  renderItem={dataItem => (
                    <View style={{ padding: 5 }}>
                      <ImageBackground
                        source={dataItem.icon}
                        style={styles.gridBackground}
                        resizeMode="stretch"
                      >
                        <Text style={styles.gridTitle}>曼谷</Text>
                        <Text style={styles.gridTitle}>Bangkok</Text>
                      </ImageBackground>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>
        )
        break
      case 1:
        contentView = (
          <View style={{ flexGrow: 1, paddingLeft: 20, paddingRight: 20 }}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 5, backgroundColor: Colors.blueBackground }}
                />
                <Text style={styles.contentTitle}>亚洲去处</Text>
              </View>
            </ScrollView>
          </View>
        )
        break
      case 2:
        contentView = (
          <View style={{ flexGrow: 1, paddingLeft: 20, paddingRight: 20 }}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 5, backgroundColor: Colors.blueBackground }}
                />
                <Text style={styles.contentTitle}>欧洲去处</Text>
              </View>
            </ScrollView>
          </View>
        )
        break
      case 3:
        contentView = (
          <View style={{ flexGrow: 1, paddingLeft: 20, paddingRight: 20 }}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 5, backgroundColor: Colors.blueBackground }}
                />
                <Text style={styles.contentTitle}>非洲去处</Text>
              </View>
            </ScrollView>
          </View>
        )
        break
      default:
        contentView = (
          <View style={{ flexGrow: 1, paddingLeft: 20, paddingRight: 20 }}>
            <ScrollView
              style={{
                flex: 1,
                backgroundColor: 'white'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{ width: 5, backgroundColor: Colors.blueBackground }}
                />
                <Text style={styles.contentTitle}>热门去处</Text>
              </View>
            </ScrollView>
          </View>
        )
        break
    }
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
        <ScrollView
          style={{
            flex: 1
          }}
        >
          <Image
            style={styles.banner}
            source={Images.mddBanner}
            resizeMode="stretch"
          />

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <View style={{ width: 100 }}>
              <TouchableWithoutFeedback
                onPress={() => this.setState({ selectedTab: 0 })}
              >
                <View
                  style={[
                    styles.menu,
                    {
                      backgroundColor:
                        selectedTab === 0 ? 'white' : Colors.grayBackground
                    }
                  ]}
                >
                  <Image
                    source={Images.hot}
                    style={[styles.menuIcon]}
                    resizeMode="contain"
                  />
                  <Text style={styles.menuText}>热门</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.border} />
              <TouchableWithoutFeedback
                onPress={() => this.setState({ selectedTab: 1 })}
              >
                <View
                  style={[
                    styles.menu,
                    {
                      backgroundColor:
                        selectedTab === 1 ? 'white' : Colors.grayBackground
                    }
                  ]}
                >
                  <Image
                    source={Images.yz}
                    style={[styles.menuIcon]}
                    resizeMode="contain"
                  />
                  <Text style={styles.menuText}>亚洲</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.border} />
              <TouchableWithoutFeedback
                onPress={() => this.setState({ selectedTab: 2 })}
              >
                <View
                  style={[
                    styles.menu,
                    {
                      backgroundColor:
                        selectedTab === 2 ? 'white' : Colors.grayBackground
                    }
                  ]}
                >
                  <Image
                    source={Images.oz}
                    style={[styles.menuIcon]}
                    resizeMode="contain"
                  />
                  <Text style={styles.menuText}>欧洲</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.border} />
              <TouchableWithoutFeedback
                onPress={() => this.setState({ selectedTab: 3 })}
              >
                <View
                  style={[
                    styles.menu,
                    {
                      backgroundColor:
                        selectedTab === 3 ? 'white' : Colors.grayBackground
                    }
                  ]}
                >
                  <Image
                    source={Images.fz}
                    style={[styles.menuIcon]}
                    resizeMode="contain"
                  />
                  <Text style={styles.menuText}>非洲</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            {contentView}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DestinationScreen)
