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
//import { Avatar, Icon } from 'react-native-material-design';

// App Modules
import CommonComponents from './commonComponents.js';
import Home from './home.js';
import Calendar from './dummyCalendar.js';
import DigiSign from './digiSign.js';
import PdfGen from './pdfGen.js';
import SignPad from './SignPad.js';

// Class : Login
// Holds the Login Elements and Functionalities
export default class Login extends React.Component {

    login() {
        this.props.navigator.replace({
            id: 'DigiSign',
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
                            <TextInput style={{height: 40, marginVertical:10,minWidth:200}} placeholder='UserName' onChangeText={(text) => this.setState({text})} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <TextInput style={{height: 40, marginVertical:10,minWidth:200}} secureTextEntry={true} placeholder='Password' onChangeText={(text) => this.setState({text})} />
                        </View>                        
                            <Button
                                containerStyle={{padding:40,width:100}}
                                onPress={this.login.bind(this)}
                                title="Login"
                                color="#73baf5"
                                accessibilityLabel="Learn more about this purple button"
                            />
                    </View>
                </View>   
            </View>
        )
    }
};


