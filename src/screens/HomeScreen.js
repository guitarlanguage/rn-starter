import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text> 
      </TouchableOpacity>
      <Button 
        onPress={() => navigation.navigate("Image")}
        title="Go to ImageScreen" 
      />
      <Button 
        onPress={() => navigation.navigate("Counter")}
        title="Go to CounterScreen" 
      />
      <Button 
        onPress={() => navigation.navigate("Color")}
        title="Go to ColorScreen" 
      />
      <Button 
        onPress={() => navigation.navigate("Square")}
        title="Go to SquareScreen" 
      />
      <Button 
        onPress={() => navigation.navigate("Text")}
        title="Go to TextScreen" 
      />
      <Button 
        onPress={() => navigation.navigate("Box")}
        title="Go to BoxScreen" 
      />
     
    </View>
  );    
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
