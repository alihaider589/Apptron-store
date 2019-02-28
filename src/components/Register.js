import React, { Component } from 'react';
import {Platform, StyleSheet,Dimensions, View,Image, TouchableOpacity,SafeAreaView,ScrollView, ImageBackground} from 'react-native';
import {Header,Button,Left,Body,Text,Right,Icon,Title, Drawer,Container,Content, ScrollableTab, Item, Label,Input, CheckBox, ListItem, Toast} from 'native-base'
import Background from '../Assets/Images/background.jpg';
import Logo from '../Assets/Images/Logo.png'
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
    {label: 'Male', value: "male" },
    {label: 'Female', value: "female" }
  ];

export default class Register extends Component{
    state = {
        Icon1:"eye",
        Icon2:"eye",
        secureEntry1:true,
        secureEntry2:true,
        date:"",
        selection:false,
        checkColor:'black',
        //Entries in form validation
        Firstname:"",
        Lastname:"",
        Mobile:"",
        Gender:"",
        Password:"",
        ConfirmPassword:"",
        Signup:"",
        FirstnameBorder:"black",
        FirstBorderWidth:1,
        LastnameBorder:"black",
        LastBorderWidth:1,
        MobileBorder:"black",
        MobileBorderWidth:1,
        PasswordBorder:"black",
        PasswordBorderWidth:1,
        ConfirmPasswordBorder:"black",
        COnfirmPasswordWidth:1
    }

    IconPress1 = () => {
        if(this.state.Icon1 == "eye")
        {
            this.setState({
                Icon1:"eye-off",
                secureEntry1:false
            })
        }

        else{
            this.setState({
                Icon1:"eye",
                secureEntry1:true
            })
        }
    }

    
    IconPress2 = () => {
        if(this.state.Icon2 == "eye")
        {
            this.setState({
                Icon2:"eye-off",
                secureEntry2:false
            })
        }

        else{
            this.setState({
                Icon2:"eye",
                secureEntry2:true
            })
        }
    }

    Selection = () => {
        if(this.state.selection == false)
        {
            this.setState({
                selection:true,
                checkColor:"#e1275f"
            })
        }
        else{
            this.setState({
                selection:false,
                checkColor:"black"
            })
        }
    }

    
    FirstName = (val) => {
        this.setState({
            Firstname:val,
            FirstnameBorder:"black",
            FirstBorderWidth:2
        })
    }

    LastName = (val) => {
        this.setState({
            Lastname:val,
            LastnameBorder:"black",
            LastBorderWidth:2
        })
    }

    Mobile = (val) => {
        this.setState({
            Mobile:val,
            MobileBorder:"black",
            MobileBorderWidth:2
        })
    }


    Password = (val) => {
        this.setState({
            Password:val,
            PasswordBorder:"black",
            PasswordBorderWidth:2
        })
    }

    ConfirmPassword = (val) => {
        this.setState({
            ConfirmPassword:val,
            ConfirmPasswordBorder:"black",
            COnfirmPasswordWidth:2
        })
    }

    ButtonSubmit = () => {
        if(this.state.Password.trim() == "" || this.state.ConfirmPassword.trim() == "" || this.state.Firstname.trim() == "" || this.state.Lastname.trim() == "" || this.state.Mobile.trim() == "" || this.state.selection == false || this.state.Gender == "" || this.state.date.trim() == "")
        {
            if(this.state.Password.trim() == "")
            {
                this.setState({
                    PasswordBorder:"red",
                    PasswordBorderWidth:2
                })
            }

            if(this.state.ConfirmPassword.trim() == "")
            {
                this.setState({
                    ConfirmPasswordBorder:"red",
                    COnfirmPasswordWidth:2
                })
            }

            if(this.state.Firstname.trim() == "")
            {
                this.setState({
                    FirstnameBorder:"red",
                    FirstBorderWidth:2
                })
            }

            if(this.state.Lastname.trim() == "")
            {
                this.setState({
                    LastnameBorder:"red",
                    LastBorderWidth:2
                })
            }

            if(this.state.Mobile.trim() == "")
            {
                this.setState({
                    MobileBorder:"red",
                    MobileBorderWidth:2
                })
            }
            if(this.state.selection == false)
            {
                Toast.show({
                    text:"Please fill all required fields",
                    duration:2000
                })
            }

            if(this.state.Gender == "")
            {
                Toast.show({
                    text:"Please fill all required fields",
                    duration:2000
                })
            }

            if(this.state.date == "")
            {
                Toast.show({
                    text:"Please fill all required fields",
                    duration:2000
                })
            }
        }
        else{
            this.props.navigation.navigate('Login')
            }
    }


    static navigationOptions = {
        drawerLabel:() => null,
        TransitionEvent:"slide"
    };
    render() {
      return (
          <View style={{flex:1,}}> 

            <Header style={{backgroundColor: '#808080',}}>

                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Icon name='arrow-back' style={{color:"white"}}/>
                    </TouchableOpacity>
                </Left>
                
                <Body style={{alignItems:"flex-end",marginLeft:50}}>
                    <Title>Alpha Store</Title>
                </Body>
            
                <Right />
            
            </Header>
            <ScrollView style={{height:"100%"}}>
                <ImageBackground source={Background} style={style.ImageBack}>
                    <View style={style.LoginView}>
                        <View>
                            <Image source={Logo} style={style.LoginLogo} />
                        </View>
                        <Content padder style={{width:"90%",}}>
                            <View style={{flexDirection:"row",marginTop:10}}>
                                <Item floatingLabel style={{borderBottomColor:this.state.FirstnameBorder,width:"45%",borderBottomWidth:this.state.FirstBorderWidth}} >
                                    <Label style={{color:"black"}}>First Name:</Label>
                                    <Input onChangeText={this.FirstName} value={this.state.Firstname} />
                                </Item>
                                <Item floatingLabel style={{borderBottomColor:this.state.LastnameBorder,marginLeft:"10%",width:"45%",borderBottomWidth:this.state.LastBorderWidth}}>
                                    <Label style={{color:"black"}}>Last Name:</Label>
                                    <Input onChangeText={this.LastName} value={this.state.Lastname} />  
                                </Item>
                            </View>    
                            <Item floatingLabel style={{borderBottomColor:this.state.MobileBorder,marginTop:10,borderBottomWidth:this.state.MobileBorderWidth}} >
                                <Label style={{color:"black"}}>Mobile</Label>
                                <Input onChangeText={this.Mobile} value={this.state.Mobile} />
                            </Item>
                            <Item style={style.DatePicker}>
                            <DatePicker
                                style={{width: 200}}
                                date={this.state.date}
                                mode="date"
                                placeholder=" "
                                format="YYYY-MM-DD"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                                />
                                </Item>
                            <View style={{marginTop:20}}>
                                <Text style={{color:"black",fontSize:15}}>Select Gender:</Text>
                                <View style={{width:80}}>
                                    <RadioForm
                                    radio_props={radio_props}
                                    initial={-1}
                                    onPress={(value) => {this.setState({Gender:value})}}
                                    buttonColor={'black'}
                                    selectedButtonColor={"#d11d53"}
                                    animation={true}
                                    />
                                </View>
                            </View>
                            <Item floatingLabel style={{borderBottomColor:this.state.PasswordBorder,borderBottomWidth:this.state.PasswordBorderWidth, marginTop:10}}>
                                <Label style={{color:"black"}}>Password</Label>
                                <Input secureTextEntry={this.state.secureEntry1} onChangeText={this.Password} value={this.state.Password} />
                                <Icon name={this.state.Icon1} onPress={this.IconPress1} />  
                            </Item>
                            <Item floatingLabel style={{borderBottomColor:this.state.ConfirmPasswordBorder, marginTop:10,borderBottomWidth:this.state.COnfirmPasswordWidth}}>
                                <Label style={{color:"black"}}>Confirm Password</Label>
                                <Input secureTextEntry={this.state.secureEntry2} onChangeText={this.ConfirmPassword} value={this.state.ConfirmPassword} />
                                <Icon name={this.state.Icon2} onPress={this.IconPress2} />  
                            </Item>    
                            <Item style={{alignItems:"flex-start",borderBottomWidth:0,flexDirection:"row",marginTop:20}}>
                                <CheckBox onPress={this.Selection} color={this.state.checkColor} checked={this.state.selection}/>
                                <TouchableOpacity onPress={this.Selection} left>
                                    <Text style={{marginLeft:20}}>Sign up</Text>
                                </TouchableOpacity>
                            </Item>
                            <View style={{alignItems:'center',marginTop:10}}>
                                <TouchableOpacity style={style.Button} activeOpacity = {0.8} onPress={this.ButtonSubmit}>
                                    <Text style={{color:"white"}}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </Content>
                    </View>
                </ImageBackground>
           </ScrollView>
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
          height:"95%", 
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
    },
    DatePicker:{
        borderBottomWidth:0,
        marginTop:20, 
        alignItems:"center",
        width:"100%",
        justifyContent:"center",
    }
  })