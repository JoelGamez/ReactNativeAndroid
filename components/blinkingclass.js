import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class BlinkingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Change the state every second or the time given by User.
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 
    // Define any blinking time.
   1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style = {{color: 'yellow',
                      fontWeight: 'bold',
                      fontSize: 30,
                      top: -180 }}>{display}</Text>
    );
  }
}

