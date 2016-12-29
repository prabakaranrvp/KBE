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
    Navigator
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

    login() {
        this.props.navigator.replace({
            id: 'Home',
            sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
        });
        
    }

    render() {
        return (
          <Navigator renderScene={this.renderScene.bind(this)} />
        );
    }

    renderScene(route, navigator) {
        return (
            <View style={{flex:1}}>
                <CommonComponents.Header style={{flex: 1}}/>
                <View style={{flex: 2,justifyContent:'center',alignItems:'center',marginTop:-100}}>
                    <View style={{ padding:40, alignItems:'center'}}>
                        <Text style={{marginBottom:15}}>
                            KBE Login
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="user" style={{marginTop:15,marginRight:5}} size={25} />
                            <TextInput style={{height: 40, marginVertical:10,minWidth:200}} placeholder='UserName' onChangeText={(text) => this.setState({text})} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="key" style={{marginTop:15,marginRight:5}}  size={25} />
                            <TextInput style={{height: 40, marginVertical:10,minWidth:200}} secureTextEntry={true} placeholder='Password' onChangeText={(text) => this.setState({text})} />
                        </View>                        
                            <Icon.Button
                                name="sign-in"
                                onPress={this.login.bind(this)}
                                backgroundColor="#73baf5"
                                color="#fff"
                            >
                             <Text style={{fontFamily: 'Arial', fontSize: 18, color:"#fff", fontWeight:"bold"}}>Login</Text>
                            </Icon.Button>
                    </View>
                </View>   
            </View>
        )
    }
};


