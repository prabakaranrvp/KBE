/*  Module Name : Home
 *  Description : Home Screen for user logged in
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

// App Modules
import CommonComponents from './commonComponents.js';


// Class : Home
// Holds the Home Elements and Functionalities
export default class Home extends React.Component {

    goBack() {
        console.log(this.props.navigator);
        this.props.navigator.pop();
    }
    render() {
        return (
          <Navigator renderScene={this.renderScene.bind(this)} />
        );
    }
    renderScene(route, navigator) {
        return (
            <View style={{flex: 1,backgroundColor:'#efefef'}}>
                <CommonComponents.Header style={{flex: 1}}/>
                <View style={{flex: 2,justifyContent:'center',alignItems:'center',marginTop:-100}}>
                    <Text>Welcome to Home Page</Text>
                    
                </View>  
                <Button onPress={this.goBack.bind(this)} title="back"/>
            </View>
        )
    }
};


