import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {Header,Button,Left,Body,Right,Icon,Title, Drawer,Container,Content, ScrollableTab} from 'native-base'
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

export default class WishList extends Component {
    static navigationOptions = {
        drawerIcon:<Icon name="heart"  style={{color:"white"}}/>,
        drawerLabelColor:"white",
        drawerLabel:"My Wish List"
    };
  render() {
    return (
       <SafeAreaView style={{flex:1, backgroundColor: "silver",}}>
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
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name='favorite' type="MaterialIcons" style={{color:'white'}} />
                        </TouchableOpacity>
                        {/* for space */}
                        <TouchableOpacity>
                            <Icon name='cart' style={{color:'#808080'}} />
                        </TouchableOpacity>
                        {/* Space ends */}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                            <Icon name='cart' style={{color:'white'}} />
                        </TouchableOpacity>
                        </Right>
                </Header>

      <ScrollView>
         <Grid>
            <Col style={style.ColumnStyle}>
               <Image source={Shorts} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Bermuda shorts by</Text>
                    <Text style={style.TextStyle}>Armani</Text>
                  </View>
            </Col>
            <Col style={style.ColumnStyle}>
               <Image source={Shirt} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>New Mens Shirt</Text>
                    <Text style={style.TextStyle}>Chemise Homme 2016</Text>
                  </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
               <Image source={Tshirt} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Lastree Limited Edition</Text>
                    <Text style={style.TextStyle}>t-shirt</Text>
                  </View>
            </Col>
            <Col style={style.ColumnStyle}>
               <Image source={Green} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Saint Seiya Limited</Text>
                    <Text style={style.TextStyle}>Edition Gold Cloth</Text>
                  </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
               <Image source={Ladies} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Ladies Long Shirt</Text>
                    <Text style={style.TextStyle}></Text>
                  </View>
            </Col>
            <Col style={style.ColumnStyle}>
               <Image source={White} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Cloth Design For Men</Text>
                    <Text style={style.TextStyle}>Casual Shirt</Text>
                  </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
               <Image source={WhiteSecond} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Men Shirt Chemise</Text>
                    <Text style={style.TextStyle}>Homme 2016</Text>
                  </View>
            </Col>
            <Col style={style.ColumnStyle}>
               <Image source={Shoes} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Men's Shoes</Text>
                    <Text style={style.TextStyle}>Chimese Homme 2016</Text>
                  </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
               <Image source={Lawn} style={{width:150, height:200}} />
                  <View style={style.ViewDisplay}>
                    <Text style={style.TextStyle}>Fashion Women's</Text>
                    <Text style={style.TextStyle}>Clothing</Text>
                  </View>
            </Col>
            <Col style={style.ColumnStyle}>
            </Col>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  ViewDisplay:{
    backgroundColor: "white",
     width:150,
     alignItems:"center"
    },
    ColumnStyle:{
      height: 250,
      alignItems:"center",
      justifyContent: 'center',
    },
    TextStyle:{
      fontWeight:"bold",
      color:"black", 
      alignContent: 'center',
    }
})
