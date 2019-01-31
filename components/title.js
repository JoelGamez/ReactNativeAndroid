import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import BlinkingClass from './blinkingclass';



type Props = {};
export default class Title extends Component<Props> {
    render() {
      return (
        <View style={styles.container}> 
          <BlinkingClass style={styles.gameTitle} text='PACHANGA THE GAME!!!!' />
          {/* <Text style={styles.gameTitle}>PACHANGA THE GAME!!!!</Text> */}
        </View>
      );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    gameTitle: {
      color: 'yellow',
      fontWeight: 'bold',
      fontSize: 30,
      top: -180,
  
    },
    
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: -170,
    },
  });
  