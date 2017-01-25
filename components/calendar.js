/*  Module Name : Calendar
 *  Description : Screen for the user logged in, to view his projects on calendar
 */

// React Components
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

// App Modules
import CommonComponents from './commonComponents.js';

var CalendarPicker = require('react-native-calendar-picker'),
    domesticCalendar;

domesticCalendar = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
    };
  },

  onDateChange: function(date) {
    this.setState({ date: date });
  },

  render: function() {
    return (
      <View style={{flex: 1,backgroundColor:'#efefef'}}>
        <View style={calendarStyles.container}>
          <CalendarPicker 
            selectedDate={this.state.date}
            onDateChange={this.onDateChange}
            screenWidth={Dimensions.get('window').width}
            selectedBackgroundColor={'#5ce600'} />
        </View>
      </View>
    );
  }
});

const calendarStyles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
  }
});

module.exports = domesticCalendar;