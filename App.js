/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {Root} from 'native-base';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {StackNavigator, DrawerNavigator, createAppContainer,DrawerItems} from 'react-navigation';
import Logo from './src/Assets/Images/Logo.png'
import Home from './src/components/Home';
import Register from './src/components/Register'
import Login from './src/components/Login';
import ForgotPassword from './src/components/ForgotPassword';
import Passwordtoken from './src/components/PasswordToken';
import NewPassword from './src/components/NewPassword';
import DisplayItems from './src/components/DisplayItems';
import WishList from './src/components/WishList';
import Cart from './src/components/Cart';
import OrderDetail from './src/components/OrderDetail';
import CreditCard from './src/components/CreditCard'

const navigationOptions = (props) => (
    <SafeAreaView style={{flex:1,}}>
    <View style={{alignItems:"center"}}>
   <View style={styles.DrawerView}>
    <Image source={Logo} style={{width:90, height:90, borderRadius:50}} />
    <Text style={{color:'white'}}>Ecommerce</Text>
    <Text style={{color:'white'}}>info@ecommerce.com</Text>
   </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>      
    </SafeAreaView>
);

const AppDrawer =  DrawerNavigator({
  Home:{
    screen:Home,
  },
  Login:{
    screen:Login,
  },
  Cart:{
    screen:Cart
  },
  Men:{
    screen:DisplayItems
  },
  
  WishList:{
    screen:WishList
  },
  Register:{
    screen:Register,
  },
  Forgot:{
    screen:ForgotPassword
  },
  PassToken:{
    screen:Passwordtoken
  },
  NewPassword:{
    screen:NewPassword
  },
  Order:{
    screen:OrderDetail
  },
  Credit:{
    screen:CreditCard
  }
},
  // },
  // Cart:{
  //   screen:<Text>Mycart</Text>
  // },
  // Men:{
  //   screen:<Text>Men</Text>
  // },
  // Women:{
  //   screen:<Text>Women</Text>
  // },
  // Order:{
  //   screen:<Text>My order</Text>
  // },
  // WishList:{
  //   screen:<Text>My wish list</Text>
  // }
{
  contentComponent:navigationOptions,
  useNativeAnimation:true,
  drawerBackgroundColor:"rgba(0,0,0,0.7)",
 contentOptions:{
   activeTintColor:"white",
   inactiveTintColor:"white",
   labelStyle:{color:'white'},
 },
 initialRouteName:"Credit",
 mode:"modal"
}
) 


export default class App extends Component{
  render() {
    return (
      <Root>
      <AppDrawer>
        </AppDrawer>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  DrawerView:{
    height:150,
    width:"90%", 
    alignItems:'center', 
    justifyContent: 'center', 
    borderBottomWidth: 2, 
    borderColor: 'white',
    marginBottom: 20,
  },
  DrawerIcon:{
    width:24,
    height:24,
    color:"white"
  }
})