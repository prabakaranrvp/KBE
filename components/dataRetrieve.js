/*  Module Name : DataRetrieve
 *  Description : Screen to view user data
 *  Purpose     : Fetch data from remote URL
 */

// React Components
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight
} from 'react-native';

var REQUEST_URL = 'https://jsonplaceholder.typicode.com/users';

var DataRetrieve = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderColor}
        style={dataStyles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={dataStyles.container}>
        <Text>
          Loading users...
        </Text>
      </View>
    );
  },

  renderColor: function(user) {
    return (
      <View style={dataStyles.container}>
          <Text style={dataStyles.title}>{user.id}</Text>
          <Text style={dataStyles.subtitle}>{user.email}</Text>
      </View>
    );
  },
});

var dataStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

module.exports = DataRetrieve;