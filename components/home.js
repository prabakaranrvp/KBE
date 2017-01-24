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
    ScrollView,
    ToastAndroid,
    DrawerLayoutAndroid
} from 'react-native';

// App Modules
import CommonComponents from './commonComponents.js';
import FCM from 'react-native-fcm';

// Class : Home
// Holds the Home Elements and Functionalities
export default class Home extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {initialPosition:"",currentPosition:""};
      // navigator.geolocation.watchPosition(
      //     (position) => {
      //       // alert(JSON.stringify(position));
      //       var initialPosition = JSON.stringify(position);
      //       // this.setState({initialPosition});
      //       // console.warn(initialPosition);
      //       ToastAndroid.show(JSON.stringify(position),ToastAndroid.LONG);
      //     },
      //     (error) => alert(JSON.stringify(error)),
      //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      //   );

     
    }
    componentDidMount() {
    FCM.requestPermissions();
    // FCM.presentLocalNotification({
    //   title: '',
    //   body: 'notif.body',
    //   priority: "high",
    //   click_action: 'notif.click_action',
    //   show_in_foreground: true,
    //   local: true
    // });

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      // this.props.onChangeToken(token);
    });

    FCM.getInitialNotification().then(notif => {
      console.log("INITIAL NOTIFICATION", notif)
    });

    this.notificationUnsubscribe = FCM.on("notification", notif => {
        // alert("notified");
      console.log("Notification", notif);
      if (notif && notif.local) {
        return;
      }
      this.sendRemote(notif.fcm);
    });

    this.refreshUnsubscribe = FCM.on("refreshToken", token => {
      console.log("TOKEN (refreshUnsubscribe)", token);
      // this.props.onChangeToken(token);
    });
  }
sendRemote(notif) {
    FCM.presentLocalNotification({
      title: notif.title || 'KBE',
      body: notif.body,
      priority: "high",
      click_action: notif.click_action,
      show_in_foreground: true,
      local: true
    });
  }

  componentWillUnmount() {
    this.refreshUnsubscribe();
    this.notificationUnsubscribe();
  }


    goBack() {
        this.props.navigator.pop();
    }
    render() {
        return (
          <Navigator renderScene={this.renderScene.bind(this)} />
        );
    }
    renderScene(route, navigator) {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
          );
        return (
            <DrawerLayoutAndroid
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
                    <View style={{flex: 1,backgroundColor:'#efefef'}}>
                        <CommonComponents.Header style={{flex: 1}} navigator={navigator}/>
                    </View>
            </DrawerLayoutAndroid>
        )
    }
};


