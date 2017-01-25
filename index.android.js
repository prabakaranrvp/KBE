/* KBE App
 * Registry Module
 */

// React Components
import React, { Component } from 'react';
import {AppRegistry,Navigator,TouchableHighlight,Text,View,TouchableOpacity} from 'react-native';

// App Modules
import Login from './components/login.js';
import Home from './components/home.js';
import Calendar from './components/calendar.js';
import DigiSign from './components/digiSign.js';
import TabView from './components/tabView.js';
import DataRetrieve from './components/dataRetrieve.js';

// Initial Load function
var KBESample = React.createClass({

    render: function() {
        return (
            <Navigator
                initialRoute={{id: 'Login'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                if (route.sceneConfig) {
                  return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }} />
        );
    },

    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'Login') {
            return (
                <Login navigator={navigator} />
            );
        }
        else if (routeId === 'Home') {
            return (
                <Home navigator={navigator} />
            );
        }
        else if (routeId === 'Calendar') {
            return (
                <Calendar navigator={navigator} />
            );
        }
        else if (routeId === 'DigiSign') {
            return (
                <DigiSign navigator={navigator} />
            );
        }
        else if (routeId === 'TabView') {
            return (
                <TabView navigator={navigator} />
            );
        }
        else if (routeId === 'DataRetrieve') {
            return (
                <DataRetrieve navigator={navigator} />
            );
        }
        return this.noRoute(navigator);
    },

    noRoute(navigator) {
        return (
            <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => navigator.pop()}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>404 Page Not Found</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

AppRegistry.registerComponent('KBE', () => KBESample);
