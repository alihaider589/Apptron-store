import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {Header,Button,Left,Body,Right,Icon,Title, Drawer,Container,Content, ScrollableTab} from 'native-base'
import Beauty from '../Assets/Images/beauty.jpg';
import WishList from './WishList';
import Men from '../Assets/Images/men.jpg';
import Women from '../Assets/Images/women.jpg';
import Shoes from '../Assets/Images/shoes.jpg';
import Electronics from '../Assets/Images/electronics.jpg'
import { createStackNavigator } from 'react-navigation';

export default class Home extends Component{
    static navigationOptions = {
      drawerIcon:<Icon name="home" style={{fontSize: 30,color:"white"}}/>,
      drawerLabelColor:"white",
  };
    render() {
      return (
          <SafeAreaView style={{flex:1}}>
                    <Header style={{backgroundColor: '#808080',}}>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon name='menu' style={{color:'white'}} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{alignItems:"flex-end",marginLeft:50}}>
                            <Title>Alpha Store</Title>
                        </Body>
                        <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                            <Icon name='cart' style={{color:'white'}} />
                        </TouchableOpacity>
                        </Right>
                </Header>

                <ScrollView>
                    <View style={style.View}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')}>
                                <Image source={Beauty} style={{width:"100%", height:150}} />
                                <View style={style.ViewComponent}><Text style={{fontWeight:"bold",color:"white"}}>SUMMER SALE</Text></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')}>
                            <Image source={Men} style={{width:"100%", height:150}} />
                            <View style={style.ViewComponent}><Text style={{fontWeight:"bold",color:"white"}}>2018 DISCOUNT %50</Text></View>
                        </TouchableOpacity>
                     </View>      
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')}>
                            <Image source={Women} style={{width:"100%", height:150}} />
                            <View style={style.ViewComponent}><Text style={{fontWeight:"bold",color:"white"}}>SHIRT</Text></View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')}>
                            <Image source={Shoes} style={{width:"100%", height:150}} />
                            <View style={style.ViewComponent}><Text style={{fontWeight:"bold",color:"white"}}>SHOES</Text></View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Men')}>    
                            <Image source={Electronics} style={{width:"100%", height:150}} />
                            <View style={style.ViewComponent}><Text style={{fontWeight:"bold",color:"white"}}>ELECTRONICS</Text></View>
                         </TouchableOpacity>
                    </View>
                </ScrollView>
          
          </SafeAreaView>
      );
    }
  }

  const style = StyleSheet.create({
    View:{
        width:"100%",
        flex:1
    },
    ViewComponent:{
        width:"100%",
        height:50,
        alignItems:"center", 
        justifyContent: 'center',
        backgroundColor: "#808080",
    }
})

  
  