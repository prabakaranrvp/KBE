/*  Module Name : DigiSign
 *  Description : Component deals with generation of digital signatures
 */

import React, { Component } from 'react';
import {
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
import RNFS from 'react-native-fs';

var SignatureCapture = require('react-native-signature-capture'),
    RNSignatureExample;

RNSignatureExample = React.createClass({

    saveSign: function() {
        this.refs["sign"].saveImage();
    },

    resetSign: function() {
        this.refs["sign"].resetImage();
    },

    _onSaveEvent(result) {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name

        var path = result.pathName; //assigning the path of signature generated 

        var options = { //Stores the content for PDF
          html: "<h2>Test Image</h2><img src='" + path + "' /><p>EndOf Image</p>" // HTML String
        };

        RNHTMLtoPDF.convert(options).then((filePath) => { //Generates pdf
          return RNFS.unlink(path)
            .then(() => { //On successful deletion of image
              //Rename the generated pdf filename
              RNFS.moveFile( filePath, filePath.replace('MyPdf.pdf','AMC001.pdf'));
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
              console.log(err.message);
            });
        });
    },
    _onDragEvent() {
        // This callback will be called when the user enters signature
        console.log("dragged");
    },
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{alignItems:"center",justifyContent:"center"}}>Signature Capture Extended </Text>
                <SignatureCapture
                    style={[{flex:1},digiStyles.signature]}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={true}
                    showNativeButtons={false}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight style={digiStyles.buttonStyle}
                        onPress={() => { this.saveSign() } } >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={digiStyles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableHighlight>

                </View>

            </View>
        );
    }

});

const digiStyles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});

module.exports = RNSignatureExample;