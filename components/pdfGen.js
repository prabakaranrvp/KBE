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
  View,
  TouchableHighlight
} from 'react-native';

// App Modules
import CommonComponents from './commonComponents.js';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class PdfGenerator extends React.Component {

  createPDF() {
    var options = {
      html: '<h1>PDF TEST</h1>' // HTML String
    };

    RNHTMLtoPDF.convert(options).then((filePath) => {
      console.log(filePath);
    });
  }

  render() {
    return(
      <View>
        <TouchableHighlight onPress={() => { this.createPDF() }}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    );
  }
};
