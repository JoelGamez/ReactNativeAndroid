import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



class CustomBlinkingTxt extends Component {
    constructor(props) {
      super(props);
      this.state = { showText: true };
  
      // Change the state every second or the time given by User.
      setInterval(() => {
          this.setState(previousState => {
            return { showText: !previousState.showText };
          });
        },
        // Define blinking time in milliseconds
        1000
      );
  
    }
  
    render() {
      let display = this.state.showText ? this.props.text : ' ';
      return (
        <Text style={{ textAlign: 'center', marginTop: 10 }}>{display}</Text>
      );
    }
  }