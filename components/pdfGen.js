/*  Module Name : pdfGen
 *  Description : Component which deals with PDF generation
 */

// React Components
import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

var Example = React.createClass({

  createPDF() {
    var options = {
      html: '<h1>PDF TEST</h1>', // HTML String

    };

    RNHTMLtoPDF.convert(options).then((filePath) => {
      console.log(filePath);
    });
  },

  render() {
    <View>
      <TouchableHighlight onPress={this.createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  }
});