import React, { Component } from 'react';
import { 
    AppRegistry, 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    ScrollView,
    Dimensions,
    TextInput,
    Image
} from 'react-native';
import CreditFront from '../Assets/Images/card-front.png';
import CreditBack from '../Assets/Images/card-back.png';

const SWIPER_HEIGHT = 130;
import CreditCard, {CardImages} from 'react-native-credit-card';
import Swiper from 'react-native-swiper';
import { Input } from 'native-base';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height
    },
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingTop: 30
    },
    wrapper: {
        height: SWIPER_HEIGHT,
        marginTop: 200,
    },
    slide: {
        height: SWIPER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        
    },
    card: {
        marginHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 3,
        elevation: 3,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#1ba549',
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        color: '#fff'
    }

});

export default class RNCreditCard extends Component {

    static navigationOptions = {
        drawerLabel:() => null
    }

    constructor(props) {
        super(props);
        this.state = {
            focused: 'name',
            number: '',
            name: '',
            cvc: '',
            expiry: '',
            index: 0,
            type: 'visa'
        }
    }

    onNext() {
        this.swiper.scrollBy(1);
    }

   
    onMomentumScrollEnd(e, state, context) {
        var indexMap = [
            'number',
            'name',
            'expiry',
            'cvc',
            'type',
        ];
        this.setState({
            index: state.index,
            focused: indexMap[state.index]
        }, () => {
            try {
                this.refs[indexMap[state.index]].focus();
            } catch(e) {

            }
        });
    }

    render() {
        var cardTypes = []; 
        for (var key in CardImages) {
            cardTypes.push({type: key, image: CardImages[key]});
        }
        if (this.state.restoring) {
            return null;
        }
        return (
            <View style={styles.container}>
                <CreditCard
                    style={{marginVertical: 10, marginHorizontal: 10, marginBottom: 0, elevation: 3, alignSelf: 'center'}}
                    imageFront={require('../Assets/Images/card-front.png')}
                    imageBack={require('../Assets/Images/card-back.png')}
                    shiny={false}
                    bar={false}
                    focused={this.state.focused}
                    number={this.state.number}
                    name={this.state.name}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    />
                
                <Swiper 
                    style={styles.wrapper} 
                    height={SWIPER_HEIGHT} 
                    showsButtons={false}
                    onMomentumScrollEnd = {this.onMomentumScrollEnd.bind(this)} 
                    ref={(swiper) => {this.swiper = swiper}}
                    index={this.state.index}>
                    <View style={styles.slide}>
                        <View style={styles.card}>
                            <Text style={styles.textNumber}>CARD NUMBER</Text>
                            <TextInput ref="number" autoFocus={true} value={this.state.number} onChangeText={(number) => this.setState({number})} style={{width:(Dimensions.get('window').width-70)}}/>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.card}>
                            <Text style={styles.textName}>CARD HOLDER'S NAME</Text>
                            <TextInput ref="name" value={this.state.name} onChangeText={(name) => this.setState({name})} style={{width:(Dimensions.get('window').width-70)}}/>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.card}>
                            <Text style={styles.textName}>EXPIRY</Text>
                            <TextInput ref="expiry" value={this.state.expiry} onChangeText={(expiry) => this.setState({expiry})} style={{width:(Dimensions.get('window').width-70)}}/>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.card}>
                            <Text style={styles.textCvc}>CVV/CVC NUMBER</Text>
                            <TextInput ref="cvc" value={this.state.cvc} onChangeText={(cvc) => this.setState({cvc})} style={{width:(Dimensions.get('window').width-70)}}/>
                        </View>
                    </View>             
                </Swiper>
                <TouchableOpacity onPress={this.onNext.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.textButton}>NEXT</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
