import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../containers/HomeScreen';
import DetailScreen from '../containers/DetailScreen';
import {Image} from 'react-native';
export default createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => {
         <Icon name="bars" size={17} color={'#dd0000'} />
      },
    }
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      drawerLabel: 'Detail',
      drawerIcon: ({ tintColor }) => {
         <Icon name="bars" size={17} color={'#dd0000'} />
      },
    }
  }
});