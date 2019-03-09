import React, { Component } from 'react'
import {Platform,TextInput, StyleSheet, Text, View,Image, TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import {Header,Button,Input,Left,Body,Right,Icon,Title, Drawer,Container,Content, ScrollableTab} from 'native-base'
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

export default class DisplayItems extends Component {
  state={
    searchModal:false
  }
    static navigationOptions = {
        drawerIcon:<Icon name="male" type="FontAwesome" style={{fontSize: 30,color:"white"}}/>,
        drawerLabelColor:"white",
    };
  render() {
    return (
       <SafeAreaView style={{flex:1, backgroundColor: "silver",}}>
         <Modal isVisible={this.state.searchModal} animationInTiming={700} animationOutTiming={700} backdropOpacity={0.5} style={{width:"100%",height:60,alignItems:"flex-start",justifyContent: 'flex-start',}}>
            <TouchableOpacity onPress={() => {this.setState({searchModal:false})}}>
              <View style={{flexDirection:"row",backgroundColor: "white",justifyContent: 'center',}}>
                <Icon name="times" type="FontAwesome" style={{marginTop:5,}} />
                <TextInput style={{height:40,width:"85%",backgroundColor: "white",}} placeholder="Search">
                </TextInput>
              </View>
            </TouchableOpacity>
        </Modal>
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
                          <TouchableOpacity onPress={() => {this.setState({searchModal:true})}}>
                            <Icon name='filter-list' type="MaterialIcons" style={{color:'white'}} />
                          </TouchableOpacity>
                          {/* for space */}
                          <TouchableOpacity>
                              <Icon name='cart' style={{color:'#808080'}} />
                          </TouchableOpacity>
                          {/* Space ends */}
                          <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                              <Icon name='cart' style={{color:'white'}} />
                          </TouchableOpacity>
                        </Right>
                </Header>

      <ScrollView>
         <Grid>
            <Col style={style.ColumnStyle}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail1')}>
                  <Image source={Shorts} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Bermuda shorts by</Text>
                        <Text style={style.TextStyle}>Armani</Text>
                      </View>
              </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail2')}>
                  <Image source={Shirt} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>New Mens Shirt</Text>
                        <Text style={style.TextStyle}>Chemise Homme 2016</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail3')}>
                  <Image source={Tshirt} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Lastree Limited Edition</Text>
                        <Text style={style.TextStyle}>t-shirt</Text>
                      </View>
                </TouchableOpacity>  
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail4')}>
                  <Image source={Green} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Saint Seiya Limited</Text>
                        <Text style={style.TextStyle}>Edition Gold Cloth</Text>
                      </View>
                </TouchableOpacity>
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail5')}>
                  <Image source={Ladies} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Ladies Long Shirt</Text>
                        <Text style={style.TextStyle}></Text>
                      </View>
                </TouchableOpacity>
            </Col>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail6')}>
                  <Image source={White} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Cloth Design For Men</Text>
                        <Text style={style.TextStyle}>Casual Shirt</Text>
                      </View>
                </TouchableOpacity>      
            </Col>
          </Grid>
          <Grid>
            <Col style={style.ColumnStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CartDetail6')}>
                  <Image source={WhiteSecond} style={{width:150, height:200}} />
                      <View style={style.ViewDisplay}>
                        <Text style={style.TextStyle}>Men Shirt Chemise</Text>
                        <Text style={style.TextStyle}>Homme 2016</Text>
                      </View>
                </TouchableOpacity>
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
