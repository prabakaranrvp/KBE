/*  Module Name : CommonComponents
 *  Description : Holds common components and functions of Header, Footer and Other Components
 */

// React Components
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

// React Plugins
//import { Avatar, Icon } from 'react-native-material-design';


var Header = React.createClass({
    render: function() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>KBE</Text>
            </View>
        );
    }
});

/*var Footer = React.createClass({
    render: function() {
        return (
            <View style={styles.footer}>
                <View onPress={this.dispIconName}>
                    <Icon name="edit" style={styles.footerIcon} />
                </View>
                <Icon name="person" style={styles.footerIcon} />
                <Icon name="folder" style={styles.footerIcon} />
                <Icon name="folder" style={styles.footerIcon} />
            </View>
        );
    }
})*/


const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        backgroundColor: '#ccc'
    },
    headerTitle: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    footer: {
        flex: 0,
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#D3F0F6',
        justifyContent: 'space-between'
    }
});


module.exports ={ Header : Header/*,
    Footer: Footer*/};
