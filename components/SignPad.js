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

import SignaturePad from 'react-native-signature-pad';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default class SignPad extends Component {
  constructor(props) {
    super(props);
    this.state={base64data:''}
  }
  render = () => {
    return (
      <View style={{flex: 1}}>
          <SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
                        style={{flex: 1, backgroundColor: 'white'}}/>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableHighlight style={signStyles.buttonStyle}
              onPress={() => { this.saveSign() } } >
              <Text>Save</Text>
            </TouchableHighlight>

            <TouchableHighlight style={signStyles.buttonStyle}
              onPress={() => { this.resetSign() } } >
              <Text>Reset</Text>
            </TouchableHighlight>
          </View>
      </View>
    )
  };
  saveSign() {
      //this.refs["sign"].saveImage();
    console.log(this.state.base64data);
    var options = {
      html: "<h2>Test Image</h2><img src='" + this.state.base64data + "'/><p>EndOf Image</p>" // HTML String
    };
console.log(options);
    RNHTMLtoPDF.convert(options).then((filePath) => {
      console.log(filePath);
    });
  };

  resetSign() {
      //this.refs["sign"].resetImage();
  };
  _signaturePadError = (error) => {
    console.error(error);
  };

  _signaturePadChange = ({base64DataUrl}) => {
    console.log("Got new signature: " + base64DataUrl);
    this.setState({base64data:base64DataUrl});
  };
}

const signStyles = StyleSheet.create({

    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});