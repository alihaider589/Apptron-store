import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View,Image,Dimensions,ImageBackground, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {Header,Button,Form,Picker,Left,Body,Right,Icon,Title, Drawer,Container,Content, ScrollableTab, Footer, Toast} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Shorts from '../Assets/Images/shorts.jpg';
import Shirt from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';
import WhiteSecond from '../Assets/Images/white_shirt_second.jpg';
import Shoes from '../Assets/Images/shoes_second.jpg';
import Lawn from '../Assets/Images/women_lawn.jpg';
import Modal from "react-native-modal";

export default class CartDetail3 extends Component {
    state = {
        isModalVisible: false,
      };

    static navigationOptions = {
        drawerLabel:() => null
    }

    _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
    }

  render() {
    return (
      <View>
           <View style={{width:"100%",height:50,alignItems:"center",justifyContent: 'center',backgroundColor: "#808080",}}>
                <View style={{width:"100%",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",color:"white"}}>ALPHA STORE</Text>
                </View>
           </View>
           <ImageBackground source={Tshirt} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}>
                <View style={{width:"100%",alignItems:"flex-end",height:(Dimensions.get('window').height-120),}}>
                    <View style={{width:"40%",height:40,alignItems:"center",justifyContent: 'center',marginTop: 10, backgroundColor:"rgba(192,192,192,0.7)"}}>
                        <Text style={{color:"black",fontWeight:"bold"}}>RS. 99.0</Text>
                    </View>
                    <TouchableOpacity onPress={this._toggleModal} style={{width:"40%",height:40,alignItems:"center",justifyContent: 'center',marginTop: 10, backgroundColor:"rgba(192,192,192,0.7)"}}>
                        <Text style={{color:"black",fontWeight:"bold"}}>PRODUCT DETAIL</Text>
                    </TouchableOpacity>
                    <View style={{width:"40%",height:40,alignItems:"center",justifyContent: 'center',marginTop: 10, backgroundColor:"rgba(192,192,192,0.7)"}}>
                        <Text style={{color:"black",fontWeight:"bold"}}>MAP</Text>
                    </View>
                </View>
                <View style={{height:"10%",alignItems:"center",backgroundColor: "rgba(192,192,192,0.7)",justifyContent:"flex-start"}}>
                   <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
                        <Picker
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        Icon={<Icon name="arrow-down" />}
                        style={{ width: undefined,flexGrow:2 }}
                        placeholder="Color"
                        >
                            <Picker.Item label="Color" value={null} />
                            <Picker.Item label="Blue" value="Blue" />
                            <Picker.Item label="Red" value="Red" />
                        </Picker>
                        <Picker
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        Icon={<Icon name="arrow-down" />}
                        style={{ width: undefined,flexGrow:2 }}
                        placeholder="Color"
                        >
                            <Picker.Item label="Size" value={null} />
                            <Picker.Item label="10" value="Blue" />
                            <Picker.Item label="12" value="Red" />
                        </Picker>
                        <TouchableOpacity style={{flexGrow:1}} onPress={() =>{Toast.show({text:"Item added successfully",duration:2000})}}>
                            <View style={{width:"80%",justifyContent: 'center',marginLeft:10,marginRight:0,marginTop:5,alignItems: 'center',height:35,backgroundColor: 'black',}}>
                            <Text style={{color:"white"}}>ADD TO CART</Text>
                            </View>
                        </TouchableOpacity>
                   </View>
                </View>
           </ImageBackground>
           <Modal animationInTiming={700} animationOutTiming={700} backdropOpacity={0} isVisible={this.state.isModalVisible} style={style.BottomModal}>
                <View style={{backgroundColor: "white",}}>
                     <View style={{alignItems:"flex-end",marginTop:10}}>
                          <TouchableOpacity onPress={this._toggleModal}>
                              <Icon name="times" type="FontAwesome" style={{marginRight: 20,}}/>
                          </TouchableOpacity>
                     </View>
                     <Text style={{ marginLeft: 10,}}>
                        <Text style={{fontWeight:"bold",color:"black",}}>Bermuda Shorts</Text>{"\n"}{"\n"}
                        <Text style={{fontWeight:"bold",color:"black"}}>Code:</Text> 26ASHADF782 {"\n"}{"\n"}
                        <Text style={{fontWeight:"bold",color:"black"}}>Price:</Text> 149.00 {"\n"}{"\n"}
                        <Text style={{fontWeight:"bold",color:"black"}}>Brand:</Text> Brand Name {"\n"}{"\n"}
                     </Text>
                </View>
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
    OrderView:{
        paddingRight: 20,
        height:30,
        alignItems:"center",
        justifyContent: 'flex-end',
        backgroundColor: "silver",
    },
    ViewDisplay:{
        backgroundColor: "white",
         width:150,
         alignItems:"center"
        },
        ColumnStyle:{
          height: 180,
          width:"40%",
          alignItems:"center",
          justifyContent: 'center',
        },
        TextStyle:{
          fontWeight:"bold",
          color:"black", 
          alignContent: 'center',
        },
        ColumnStyleSecond:{
            height: 180,
            alignItems:"flex-start",
            justifyContent: 'center',
            backgroundColor: "white",
          },
          BottomModal: {
            justifyContent: "flex-end",
            margin: 0,
          }
})
