/*  Module Name : Login
 *  Description : Login Screen for user logging in
 */

// React Components
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Button,
    Navigator,
    StatusBar,
    AsyncStorage,
    ToastAndroid,
    Image
} from 'react-native';

// React Plugins
import Icon from 'react-native-vector-icons/FontAwesome';

// App Modules
import CommonComponents from './commonComponents.js';
import Home from './home.js';

// StyleSheet
import style from '../styles/js/styles.js';


// Class : Login
// Holds the Login Elements and Functionalities
export default class Login extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {usernm:"",passwd:"",translucent : true};
    }

    login() {
        if(this.state.usernm=="user" && this.state.passwd=="abcd1234") {
            AsyncStorage.setItem('isLoggedIn','true');
            this.props.navigator.replace({
                id: 'Home',
                sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
            });
        }
        else {
            ToastAndroid.show('Invalid Username or Password', ToastAndroid.SHORT);
        }
        
    }

    render() {
        return (
          <Navigator ref="navigator" renderScene={this.renderScene.bind(this)} />
        );
    }

    renderScene(route, navigator) {
        let loginButton = null;
        if(this.state.usernm!="" && this.state.passwd!=""){

            loginButton =  (<View style={{marginTop:30}} >                 
                                
                            </View>)
        }
        return (
            <View style={{flex:1,backgroundColor:'#E4E4E4'}}>
                <StatusBar
                    backgroundColor="#E4E4E4"
                    barStyle="dark-content"
                />
                <View style={{marginHorizontal:20,marginVertical:100,justifyContent:'center',alignItems:'center',backgroundColor:'#fff',elevation:15}}>
                    <View style={{ padding:30, alignItems:'center'}}>
                        <Image source={require('../images/logo.jpg')} />
                        <View style={{flexDirection:'row',paddingVertical:20}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',alignItems: 'stretch'}}>
                                <TextInput style={{flexGrow:15,fontSize:18,fontFamily:'Open Sans',backgroundColor:'#ddd',paddingHorizontal:20,paddingVertical:8}} 
                                    returnKeyType = {"next"}
                                    placeholderTextColor='#fff' 
                                    underlineColorAndroid='#ddd' 
                                    placeholder='email' 
                                    onChangeText={(text) => this.setState({usernm:text})} 
                                    onSubmitEditing={() => {this.refs.navigator.refs['passwdInput'].focus();}}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',paddingVertical:20}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',alignItems: 'stretch'}}>
                                <TextInput style={{flexGrow:15,fontSize:18,fontFamily:'Open Sans',backgroundColor:'#ddd',paddingHorizontal:20,paddingVertical:8}} 
                                    ref="passwdInput"
                                    underlineColorAndroid='#ddd' 
                                    secureTextEntry={true} 
                                    placeholderTextColor='#fff' 
                                    placeholder='password' 
                                    onChangeText={(text) => this.setState({passwd:text})}
                                    onSubmitEditing={() => this.login()} />
                            </View> 
                        </View> 
                        <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:15}}>
                            <Button
                                name="sign-in"
                                onPress={this.login.bind(this)}
                                title="Login"
                                color="#EE4AA3"
                                accessibilityLabel="Log in"
                                style={{flex:3,width:300}}>
                            </Button>
                        </View>
                       
                    </View>
                </View>   
            </View>
        )
    }
};


