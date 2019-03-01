import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Left,Body,Right,Icon,Title,Input, Drawer,Container,Content, ScrollableTab, Footer} from 'native-base';
import Credit from '../Assets/Images/credit.png'

export default class CreditCard extends Component {

    static navigationOptions={
        drawerLabel:() => null
    }

  render() {
    return (
            <ImageBackground source={Credit} style={{width:"100%",height:150,justifyContent:"flex-end",borderRadius:10,}}>
            <Text style={{color:"white"}}>
                Ali
            </Text>
            <Text style={{color:"white"}}>
                Ali
            </Text>
            <Text style={{color:"white"}}>
                Ali
            </Text>
            </ImageBackground>
    );
  }
}
