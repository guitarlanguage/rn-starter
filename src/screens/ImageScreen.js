import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>Places to go to</Text>
      <ImageDetail title="Forest" score={4} imageSource={require('../../assets/forest.jpg') } />
      <ImageDetail title="Beach" score={8} imageSource={require("../../assets/beach.jpg") } />
     
      <Text> <ImageDetail title="Mountain" score={3} imageSource={require("../../assets/mountain.jpg") } /></Text>
    </View>
  );
};
  
    


const styles = StyleSheet.create({});

export default ImageScreen;