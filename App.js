/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, DrawerNavigator} from 'react-navigation';
import {Header,Button} from 'native-base'

class App extends Component{
  render() {
    return (
      <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
    );
  }
}

export default DrawerNavigator({
  Home:{
    screen:App
  }
}) 


// export default createStackNavigator({
//   Home:{
//     screen:App
//   }
// })