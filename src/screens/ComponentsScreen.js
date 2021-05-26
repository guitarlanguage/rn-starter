import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = "Hello Tom";
  const yourList = <Text>Your List: Apples, tomatoes, green beans</Text>;
  const goingToGrocer = <Text style= {{ fontSize: 25 }}>Tomorrow!</Text>

  return (
    
    <View>
      <Text style={styles.textStyle}>this is components screen</Text>
      <Text style= {{ fontSize: 25 }}>15 px text</Text>
      <Text>greeting: { greeting }</Text>
      {yourList}
      <Text style={styles.subHeaderStyle}>When are you going to the grocery store?</Text>
      {goingToGrocer}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyle: {
    fontSize: 18
  }
}); 

export default ComponentsScreen;