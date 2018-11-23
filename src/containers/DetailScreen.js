import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Linking

} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles/detailStyle'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../helpers/Responsive';
class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Detail",
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
    console.log(this.props.navigation.state.params)
    this.setState({ newsArticle: this.props.navigation.state.params })
  }
  render() {

    return (
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image
            style={styles.imageBackground}
            source={(this.state.newsArticle.urlToImage == null) ? require('../../assets/placeholder_image.png') : { uri: this.state.newsArticle.urlToImage }} />
          <Image
            style={styles.backGroundImage}
            source={require('../../assets/background.png')} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={style = styles.newsHeading}>{this.state.newsArticle.title}</Text>
          <View style={styles.newsDescriptionContainer}>
            <Text style={styles.contentText}>{(this.state.newsArticle.content) ? this.state.newsArticle.content.split('[')[0] : null}
              <Text onPress={() => {
                Linking.openURL(this.state.newsArticle.url);
              }}
                style={styles.readMoreText}>
                ReadMore
              </Text>
            </Text>

            {/* <Text>{this.state.newsArticle.description}</Text> */}
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
