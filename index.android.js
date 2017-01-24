/* KBE App
 * Resgistry Module
 */

// React Components
import React, { Component } from 'react';
import {AppRegistry,Navigator,TouchableHighlight,Text,AsyncStorage} from 'react-native';

// App Modules
import Login from './components/login.js';
import Home from './components/home.js';


// Initial Load function
export default class  KBE extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {loggedIn:false,initialRoute:'Login'};
        AsyncStorage.removeItem('isLoggedIn');
        AsyncStorage.getItem('isLoggedIn',(err,result) => {
            if(result!=null) {
                this.setState({loggedIn:true});
            }
        });
    }

    logout() {
        alert('Called LogOut here :D ');
    }
    
    render() {
        if(this.refs.navigator)
            (this.state.loggedIn) ? this.refs.navigator.replace({id:'Home'}) : this.refs.navigator.replace({id:'Login'});

        return( <Navigator
            ref='navigator'
            initialRoute={{id: 'Login'}}
            renderScene={this.renderScene}
            configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
        }} />)
    }


    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'Login') {
            return (<Login navigator={navigator} />);
        }
        else {
            return (
                <Home navigator={navigator} />
            );
        }
        // return this.noRoute(navigator);
    }

    // noRoute(navigator) {
    //     return (
    //         <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
    //             <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    //                 onPress={() => navigator.pop()}>
    //                 <Text style={{color: 'red', fontWeight: 'bold'}}>404 Page Not Found</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
}



AppRegistry.registerComponent('KBE', () => KBE);

