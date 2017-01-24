/*  Module Name : CommonComponents
 *  Description : Holds common components and functions of Header, Footer and Other Components
 */

// React Components
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

// React Plugins
import Icon from 'react-native-vector-icons/FontAwesome';

import indexModule from '../index.android.js'


class Header extends React.Component {
    constructor(props) {
      super(props);
    
        // console.warn(JSON.stringify(this.props.navigator.getCurrentRoutes()));
      this.state = {};
    }
    logout() {
        console.warn(JSON.stringify(this.props.navigator.getCurrentRoutes()));
        // AsyncStorage.removeItem('isLoggedIn');
        // this.props.navigator.resetTo({id:'Login'});
    }
    render() {
        this.state = {translucent : false};
        return (
            <View style={styles.header}>
                <StatusBar
                    backgroundColor="#003d73"
                    barStyle="light-content"
                    translucent={this.state.translucent}
                />
                <Text style={styles.headerTitle}>KBE</Text>
                <Icon name="power-off" style={{flex:1,marginRight:20,color:'#fff'}} size={25} onPress={this.logout} />
            </View>
        );
    }
}

// var Footer = React.createClass({
//     render: function() {
//         return (
//             <View style={styles.footer}>
//                 <View onPress={this.dispIconName}>
//                     <Icon name="edit" style={styles.footerIcon} />
//                 </View>
//                 <Icon name="person" style={styles.footerIcon} />
//                 <Icon name="folder" style={styles.footerIcon} />
//                 <Icon name="folder" style={styles.footerIcon} />
//             </View>
//         );
//     }
// })


const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        backgroundColor: '#003d73',
        // flex: 1,
        flexDirection: 'row',
        justifyContent : 'center'
    },
    headerTitle: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'exo',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 12,
        marginLeft: 50
    },
    footer: {
        flex: 0,
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#D3F0F6',
        justifyContent: 'space-between'
    }
});


module.exports ={ Header : Header};
