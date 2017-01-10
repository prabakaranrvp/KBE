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
      html: "<h2>Test Image</h2><img src=\"/storage/emulated/0/saved_signature/signature.png\"/><p>EndOf Image</p>" // HTML String
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
