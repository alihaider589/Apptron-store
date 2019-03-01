import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {Header,Button,Left,Body,Right,Icon,Title,Input, Drawer,Container,Content, ScrollableTab, Footer} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Shorts from '../Assets/Images/shorts.jpg';
import Shirt from '../Assets/Images/shirt.jpg';
import Tshirt from '../Assets/Images/black_shirt.jpg';
import Green from '../Assets/Images/green_shirt.jpg';
import Ladies from '../Assets/Images/ladies_shirt.jpg';
import White from '../Assets/Images/white_shirt.jpg';

export default class Cart extends Component {

    static navigationOptions={
        drawerLabel:() => null
    }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
                    <Header style={{backgroundColor: '#808080',}}>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-back' style={{color:'white'}} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{alignItems:"center",marginLeft:50,}}>
                            <Title>Alpha Store</Title>
                        </Body>
                        <Right />
                </Header>

                {/* add adress */}

                <Header style={{backgroundColor: 'black',}}>
                        <Left style={{width:"20%",}}>
                            <TouchableOpacity>
                                <Icon name='arrow-back' style={{color:'black'}} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{alignItems:"flex-end"}}>
                            <Title><Icon name="add" style={{color:"white",fontSize:10}} />Alpha Store</Title>
                        </Body>
                        <Right />
                </Header>

                <Content>
                    <ScrollView>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Col style={style.ColumnStyle}>
                                <Image source={Shorts} style={{width:100, height:150}} />
                                    <View style={style.ViewDisplay}>
                                    </View>
                            </Col>
                            <Col style={style.ColumnStyleSecond}>
                               <Text style={{color:"black",fontWeight:"bold"}}>
                                   Bermuda shorts in Armani {"\n"}{"\n"}
                                   Price(Rs): 11.92 {"\n"}{"\n"}
                                   AET {"\n"}{"\n"}
                                   Total Price(Rs): 11.92
                               </Text>
                            </Col>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Col style={style.ColumnStyle}>
                                <Image source={Shirt} style={{width:100, height:150}} />
                                    <View style={style.ViewDisplay}>
                                    </View>
                            </Col>
                            <Col style={style.ColumnStyleSecond}>
                               <Text style={{color:"black",fontWeight:"bold"}}>
                                   New Men ShirtChemse Homme 2016 {"\n"}{"\n"}
                                   Price(Rs): 7.92 {"\n"}{"\n"}
                                   AET {"\n"}{"\n"}
                                   Total Price(Rs): 7.92
                               </Text>
                            </Col>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Col style={style.ColumnStyle}>
                                <Image source={Tshirt} style={{width:100, height:150}} />
                                    <View style={style.ViewDisplay}>
                                    </View>
                            </Col>
                            <Col style={style.ColumnStyleSecond}>
                               <Text style={{color:"black",fontWeight:"bold"}}>
                                   Lastree limited edition t-shirt {"\n"}{"\n"}
                                   Price(Rs): 134.5 {"\n"}{"\n"}
                                   AET {"\n"}{"\n"}
                                   Total Price(Rs): 134.5
                               </Text>
                            </Col>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Col style={style.ColumnStyle}>
                                <Image source={Green} style={{width:100, height:150}} />
                                    <View style={style.ViewDisplay}>
                                    </View>
                            </Col>
                            <Col style={style.ColumnStyleSecond}>
                               <Text style={{color:"black",fontWeight:"bold"}}>
                                   Club Design for Men Casual Shirts {"\n"}{"\n"}
                                   Price(Rs): 149.0 {"\n"}{"\n"}
                                   AET {"\n"}{"\n"}
                                   Total Price(Rs): 149.0
                               </Text>
                            </Col>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Col style={style.ColumnStyle}>
                                <Image source={Ladies} style={{width:100, height:150}} />
                                    <View style={style.ViewDisplay}>
                                    </View>
                            </Col>
                            <Col style={style.ColumnStyleSecond}>
                               <Text style={{color:"black",fontWeight:"bold"}}>
                                   Ladies Long Shirt {"\n"}{"\n"}
                                   Price(Rs): 39.75 {"\n"}{"\n"}
                                   AET {"\n"}{"\n"}
                                   Total Price(Rs): 39.75
                               </Text>
                            </Col>
                        </Grid>
                    </ScrollView>
                </Content>

                <Footer style={style.OrderView}>
                    <Text style={{color:"black",fontWeight:"bold"}}>Total Price(Rs): 1306.00</Text>
                </Footer>
                <Footer style={style.OrderView}>
                    <Text style={{color:"black",fontWeight:"bold"}}>Discount: 0.00</Text>
                </Footer>
                <Footer style={style.OrderView}>
                    <Text style={{color:"black",fontWeight:"bold"}}>Grand Total(Rs): 1424.00</Text>
                </Footer>
                
                <Footer style={{alignItems:"center",justifyContent: 'center',backgroundColor: "black",}}>
                    <Text style={{color:"white",fontWeight:"bold"}}>PLACE ORDER</Text>
                </Footer>
        </SafeAreaView>
    )
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
          },
})