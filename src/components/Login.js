import React, { Component } from 'react';
import {Platform, StyleSheet,Alert,Dimensions, View,Image, TouchableOpacity,SafeAreaView,ScrollView, ImageBackground} from 'react-native';
import {Header,Button,Left,Body,Text,Right,Icon,Title, Drawer,Container,Content, ScrollableTab, Item, Label,Input} from 'native-base'
import {createStackNavigator} from 'react-navigation';
import Background from '../Assets/Images/background.jpg';
import Logo from '../Assets/Images/Logo.png';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Passwordtoken from './PasswordToken';

const AppStack = createStackNavigator({
    Register:{
        screen:Register
    },
    Forgot:{
        screen:ForgotPassword
    },
    PassToken:{
        screen:Passwordtoken
    }
},
{
headerMode: 'none',
}
);

export default class Login extends Component{
    state = {
        Icon:"eye",
        secureEntry:true,
        Email:"",
        Password:"",
        Color1:"black",
        Color2:"black",
        BorderWidth1:1 ,
        BorderWidth2:1 ,
    }

    Email = (val) => {
        this.setState({
            Email:val,
            Color1:"black",
            BorderWidth1:2
        })
    }

    Password = (val) => {
        this.setState({
            Password:val,
            Color2:"black",
            BorderWidth2:2
        })
    }
    
  
    ButtonSubmit = () => {
        if(this.state.Email.trim() == "" || this.state.Password.trim() == "")
        {
            if(this.state.Email.trim() == "")
            {
                this.setState({
                    Color1:"red",
                    BorderWidth1:2
                })
            }

            if(this.state.Password.trim() == "")
            {
                this.setState({
                    Color2:"red",
                    BorderWidth2:2
                })
            }
        }
        else{
            Alert.alert("success")
            }
    }
    IconPress = () => {
        if(this.state.Icon == "eye")
        {
            this.setState({
                Icon:"eye-off",
                secureEntry:false
            })
        }

        else{
            this.setState({
                Icon:"eye",
                secureEntry:true
            })
        }
    }

    static navigationOptions = {
        drawerIcon:<Icon name="person" style={{fontSize: 30,color:"white"}}/>,
        drawerLabelColor:"white",
    };
    render() {
      return (
          <View style={{flex:1}}> 

            <AppStack />

            <Header style={{backgroundColor: '#808080',}}>

                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' style={{color:"white"}}/>
                    </TouchableOpacity>
                </Left>
                
                <Body style={{alignItems:"flex-end",marginLeft:50}}>
                    <Title>Alpha Store</Title>
                </Body>
            
                <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
                        <Icon name='cart' style={{color:"white"}}/>
                    </TouchableOpacity>
                </Right>
            
            </Header>
          
            <ImageBackground source={Background} style={style.ImageBack}>

                <View style={style.LoginView}>
                    <View>
                        <Image source={Logo} style={style.LoginLogo} />
                    </View>
                    <Content padder style={{width:"100%"}}>
                        <Item floatingLabel style={{borderBottomColor:this.state.Color1, borderBottomWidth:this.state.BorderWidth1}} >
                            <Label style={{color:"black"}}>Username</Label>
                            <Input onChangeText={this.Email} value={this.state.Email} />
                        </Item>
                        <Item floatingLabel style={{borderBottomColor:this.state.Color2, marginTop:20, borderBottomWidth:this.state.BorderWidth2}}>
                            <Label style={{color:"black"}}>Password</Label>
                            <Input secureTextEntry={this.state.secureEntry} onChangeText={this.Password} value={this.state.Password} />
                            <Icon name={this.state.Icon} onPress={this.IconPress} />  
                        </Item>
                        <View style={{alignItems:"flex-end",marginTop:30}}>
                            <TouchableOpacity activeOpacity = {0.8} onPress={() => this.props.navigation.navigate('Forgot')}>
                                <Text style={{color:"#0000A0"}}>Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center',marginTop:10}}>
                            <TouchableOpacity style={style.Button} activeOpacity = {0.8} onPress={this.ButtonSubmit}>
                                <Text style={{color:"white"}}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.Button} activeOpacity = {0.8} onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={{color:"white"}}>Register</Text>
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
          width:"80%", 
          height:"70%", 
          backgroundColor: "rgba(0,0,0,0.6)",
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
        marginTop:10
    }
  })