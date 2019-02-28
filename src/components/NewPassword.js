import React, { Component } from 'react';
import {Platform, StyleSheet,Dimensions, View,Image, TouchableOpacity,SafeAreaView,ScrollView, ImageBackground} from 'react-native';
import {Header,Button,Left,Body,Text,Right,Icon,Title, Drawer,Container,Content, ScrollableTab, Item, Label,Input} from 'native-base'
import Forgot from '../Assets/Images/forgotpass.jpg';

export default class NewPassword extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    state = {
        Password:"",
        ConfirmPassword:"",
        Color1:"black",
        Color2:"black",
        BorderWidth1:1 ,
        BorderWidth2:1 ,
    }

    Password = (val) => {
        this.setState({
            Password:val,
            Color1:"black",
            BorderWidth1:2
        })
    }

    ConfirmPassword = (val) => {
        this.setState({
            ConfirmPassword:val,
            Color2:"black",
            BorderWidth2:2
        })
    }

    ButtonSubmit = () => {
        if(this.state.Password.trim() == "" || this.state.ConfirmPassword.trim() == "")
        {
            if(this.state.Password.trim() == "")
            {
                this.setState({
                    Color1:"red",
                    BorderWidth1:2
                })
            }

            if(this.state.ConfirmPassword.trim() == "")
            {
                this.setState({
                    Color2:"red",
                    BorderWidth2:2
                })
            }
        }
        else{
            this.props.navigation.navigate('Login')
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
                            <Item floatingLabel style={{borderBottomColor:this.state.Color1,width:"80%",marginTop:10,borderBottomWidth:this.state.BorderWidth1}} >
                                <Label style={{color:"black"}}>New Password:</Label>
                                <Input onChangeText={this.Password} value={this.state.Password} />
                            </Item>
                            <Item floatingLabel style={{borderBottomColor:this.state.Color2,width:"80%",marginTop:10,borderBottomWidth:this.state.BorderWidth2}} >
                                <Label style={{color:"black"}}>Confirm Password:</Label>
                                <Input onChangeText={this.ConfirmPassword} value={this.state.ConfirmPassword} />
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
     