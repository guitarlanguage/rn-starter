import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {name}
        onChangeText = {(newValue) => setName(newValue) }
      />
      <Text>hi my name is: { name } </Text>
      <Text>Enter password</Text>
      <TextInput 
        style={styles.input} 
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {password}
        onChangeText = {(newPassword) => setPassword(newPassword) }
      />

      {password.length < 5 
        ? <Text>password must be longer than 5 characters</Text>
        : <Text>{ password }</Text>}
      
    </View>
  );
};
  
    


const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;