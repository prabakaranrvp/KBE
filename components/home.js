/*  Module Name : Home
 *  Description : Home Screen for user logging in
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
    ScrollView
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
                <ScrollView style={{flex: 1}}>
                    
                    
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ff4001'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ff7f00',shadowColor:'#999'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ffc000'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ffff01'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#c0ff00'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#40ff01'}}>Color Palletes</Text>

                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#01ffff'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#53c0f0'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#2875c7'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#545454'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#a8a8a8'}}>Color Palletes</Text>
                    <Text style={{flex:14,paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#dddddd'}}>Color Palletes</Text>
                </ScrollView>  
                
            </View>
        )
    }
};


