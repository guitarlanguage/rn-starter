import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: "Scott", age:'32'},
    {name: "Matt", age:'35'},
    {name: "Dan", age:'48'},
    {name: "Dave", age:'34'},
    {name: "Fleish", age:'36'},
    {name: "Mark", age:'33'}
  ];
  return (
    
    <FlatList 
      // horizontal
      // showsHorizontalScrollIndicator = {false}
      keyExtractor = {friend => friend.name }
      data={friends} 
      renderItem={({ item })  => {
        return (
          <View>
            <Text style={styles.textStyle}>{ item.name } | {item.age}</Text>
          </View>
          
        );
      }} 

    />
  );
};

const styles = new StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
