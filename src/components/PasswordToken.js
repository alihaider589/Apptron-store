import React, { Component } from 'react';
import {Platform, StyleSheet,Dimensions, View,Image, TouchableOpacity,SafeAreaView,ScrollView, ImageBackground} from 'react-native';
import {Header,Button,Left,Body,Text,Right,Icon,Title, Drawer,Container,Content, ScrollableTab, Item, Label,Input} from 'native-base'
import Forgot from '../Assets/Images/forgotpass.jpg';

export default class Passwordtoken extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    state = {
        Email:"",
        Color:"black",
        BorderWidth:1 ,
    }

    TextChange = (val) => {
        this.setState({
            Email:val,
            Color:"black"
        })
    }

    ButtonSubmit = () => {
        if(this.state.Email.trim() == "")
        {
            this.setState({
                Color:"red",
                BorderWidth:2
            })
        }
        else{
            this.props.navigation.navigate('NewPassword')
        }
    }

    static navigationOptions = {
        drawerLabel:() => null
    }
  

  render() {
    return (
      <View style={{flex:1}}>
         
            <Header style={{backgroundColor: '#808080',}}>    
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{color:"white"}}/>
                    </TouchableOpacity>
                </Left>

                <Body style={{alignItems:"flex-end",marginLeft:50}}>
                    <Title>Alpha Store</Title>
                </Body>

                <Right />
         </Header>

         <ImageBackground source={Forgot} style={style.ImageBack}>
                <View style={style.LoginView}>
                    <Content padder style={{width:"100%",}}>
                        <View style={{alignItems:"center"}}>
                            <View style={{width:"80%"}}>
                                <Text style={{fontSize:12}}>
                                    Email has been sent containing a token code. Please enter the code below:
                                </Text>   
                            </View>
                            <Item floatingLabel style={{borderBottomColor:this.state.Color,width:"80%",marginTop:10,borderBottomWidth:this.state.BorderWidth}} >
                                <Label style={{color:"black"}}>Token:</Label>
                                <Input onChangeText={this.TextChange} value={this.state.Email} />
                            </Item>
                            <TouchableOpacity style={style.Button} activeOpacity = {0.8} onPress={this.ButtonSubmit}>
                                <Text style={{color:"white"}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </View>
         </ImageBackground>

</View>
);
}
}

const style = StyleSheet.create({
ImageBack:{
width:Dimensions.get('window').width,
height:Dimensions.get('window').height,
alignItems: 'center',
},
LoginView:{
width:"90%", 
height:"40%", 
backgroundColor: "rgba(255,255,255,0.6)",
marginTop: "10%",
alignItems:"center"
},
LoginLogo:{
width:90, 
height:90, 
borderRadius:50,
marginTop:"10%"
},
Button:{
borderRadius:20,
backgroundColor: 'silver',
alignItems:"center",
justifyContent: 'center',
height:40,
width:"40%",
marginTop:40
}
})
     