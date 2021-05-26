import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ImageDetail = (props) => {
  console.log(props)
  return (
    <View>
      <TouchableOpacity>
        <Image source={props.imageSource} />
        <Text >{props.title}</Text>
        <Text >{props.score}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles=StyleSheet.create({});

export default ImageDetail;