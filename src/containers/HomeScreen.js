import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,

} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/index";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/homeStyle'

import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../helpers/Responsive';
var moment = require('moment');
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <TouchableOpacity
        style={{
          width: responsiveWidth(4),
          height: responsiveWidth(4)
        }}
        onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={20} color='#000' />
      </TouchableOpacity>
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      newsArticle: []
    };
  }
  componentDidMount() {
    this.props.actions.getNewsList().then(() => {
      console.log(this.props)
      this.setState({ newsArticle: this.props.news.newsResult.articles })
    })
  }
  onItemPress(item){
    this.props.navigation.navigate('DetailScreen',item);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolBar}>
          <Text>News Feeds</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.heading}>
            <Text style={styles.mainHeading}>News for you</Text>
            <Text style={styles.smallHeading}>You follow 5 topics</Text>
          </View>
          {(this.state.newsArticle.length) > 0
            ? <FlatList
              data={this.state.newsArticle}
              renderItem={({ item }) => {
                return (
                  <View style={styles.itemContainer}>
                    <TouchableOpacity
                      onPress={this.onItemPress.bind(this, item)}>
                      <View style={styles.itemContentContainer}>
                        <Image
                          style={styles.itemImage}
                          source={(item.urlToImage == null) ? require('../../assets/placeholder_image.png') : { uri: item.urlToImage }} />
                        <View style={styles.itemData}>
                          <Text style={styles.newsHeading}>{item.title}</Text>
                          <View style={styles.innerTimeContainer}>
                            <Text>{item.source.name}</Text>
                            <Text style={styles.timeText}>
                              {moment(item.publishedAt, 'YYYY-MM-DD\'T\'HH:mm:ss.SSS\'Z\'').fromNow()}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.socialIconContainer}>
                      <Image
                        style={styles.socialSaveIcon}
                        source={require('../../assets/bookmark.png')} />
                      <Image
                        style={styles.socialShareIcon}
                        source={require('../../assets/share.png')} />
                      <View style={styles.likeDislikeContainer}>
                        <Image
                          style={styles.likeIcon}
                          source={require('../../assets/like.png')} />
                        <Image
                          style={styles.disLikeIcon}
                          source={require('../../assets/dislike.png')} />
                      </View>
                    </View>
                  </View>
                )
              }

              }
            />
            : null
          }

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
