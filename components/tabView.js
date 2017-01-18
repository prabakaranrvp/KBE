/*  Module Name : TabView
 *  Description : Screen for the user logged in, to view his projects on calendar-tabviews
 */

// React Components
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

// App Modules
import CommonComponents from './commonComponents.js';
import Calendar from './calendar.js';

//Third Party Plugins
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

export default class TabView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Day' },
      { key: '2', title: 'Week' },
      { key: '3', title: 'Month' }
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBarTop {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={tabStyles.page}><Text>List of Tasks by Day</Text></View>;
    case '2':
      return <View style={tabStyles.page}><Text>List of Tasks by Week</Text></View>;
    case '3':
      return <ScrollView><Calendar /></ScrollView>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={tabStyles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const tabStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});