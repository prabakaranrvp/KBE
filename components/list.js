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
export default class List extends React.Component {

    goBack() {
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
            
                <CommonComponents.Header style={{flex: 1}} navigator={navigator}/>
                <ScrollView style={{flex: 1}}>
                    
                    
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ff4001'}}>Red</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#ff7f00'}}>Orange</Text>
                 
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#53c0f0'}}>Light Blue</Text>
                    <Text style={{flex:14,fontSize:20,fontWeight:'bold',color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#008000',elevation:5}}>Green</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#02b502'}}>Light Green</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#2875c7'}}>Blue</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#545454'}}>Dark Grey</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#a8a8a8'}}>Grey</Text>
                    <Text style={{flex:14,fontSize:20,color:'#fff',paddingVertical:25,paddingHorizontal:10,fontSize:18,backgroundColor:'#dddddd'}}>Light Grey</Text>
                </ScrollView>  
                
            </View>
        )
    }
};


