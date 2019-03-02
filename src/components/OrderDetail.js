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

                <View style={{width:"100%",height:50,alignItems:"center",justifyContent: 'center',backgroundColor: "black",}}>
                    <View style={{width:"100%",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",color:"white"}}><Icon name="add" style={{color:"white",fontSize:10}} /> ADD ADDRESS</Text>
                    </View>
                </View>

                <Content>
                    <ScrollView>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Content padder style={{marginLeft:10}}>
                                <Col style={style.ColumnStyleSecond}>
                                    <Text style={{color:"black",fontWeight:"bold"}}>
                                        Lorem Ipsum {"\n"}{"\n"}
                                        Lorem ipsum Company {"\n"}{"\n"}
                                        Lorem Ipsum Street {"\n"}{"\n"}
                                        Lorem Ipsum
                                    </Text>
                                </Col>
                            </Content>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Content padder style={{marginLeft:10}}>
                                <Col style={style.ColumnStyleSecond}>
                                    <Text style={{color:"black",fontWeight:"bold"}}>
                                        Lorem Ipsum {"\n"}{"\n"}
                                        Lorem ipsum Company {"\n"}{"\n"}
                                        Lorem Ipsum Street {"\n"}{"\n"}
                                        Lorem Ipsum
                                    </Text>
                                </Col>
                            </Content>
                        </Grid>
                        <View style={{justifyContent:"flex-end", flexDirection:'row',backgroundColor:"silver",}}>
                                <Icon name="plus-circle" type="FontAwesome" style={{marginRight: 30, fontSize:25,}} />
                                <Icon name="times" type="FontAwesome" style={{marginRight: 20,fontSize:25}} />
                        </View>
                        <Grid>
                            <Content padder style={{marginLeft:10}}>
                                <Col style={style.ColumnStyleSecond}>
                                    <Text style={{color:"black",fontWeight:"bold"}}>
                                        Lorem Ipsum {"\n"}{"\n"}
                                        Lorem ipsum Company {"\n"}{"\n"}
                                        Lorem Ipsum Street {"\n"}{"\n"}
                                        Lorem Ipsum
                                    </Text>
                                </Col>
                            </Content>
                        </Grid>
                       
                    </ScrollView>
                </Content>
                
                <Footer style={{alignItems:"center",justifyContent: 'center',backgroundColor: "black",}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Credit')}>
                        <Text style={{color:"white",fontWeight:"bold"}}>PAYMENT</Text>
                    </TouchableOpacity>
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