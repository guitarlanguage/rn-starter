import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BoxScreen = () => {

  return (
    <View style={styles.viewStyle} >
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
   
   
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#9FA8DA',
    ...StyleSheet.absoluteFillObject, 
    height: 40,
    width: 40
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 40,
    width: 40,
    position: 'relative'
    
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 40,
    width: 40,
    position: 'relative'
  }

});

export default BoxScreen;