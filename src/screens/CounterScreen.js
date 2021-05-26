import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const COUNTER_INCREMENT = 1;
const COUNTER_DECREMENT = -1
const reducer = (state, action) => {
  // state === {count: number }
  // action === { type: 'increment' || type: 'decrement', payload: 1 }
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload };
    case 'decrement':
      return {...state, count: state.count + action.payload };
    default:
      return state; 
  }
}

const CounterScreen = () => {
  // const [counter, setCounter] = useReducer(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 }); 


  return (
    <View>
      <Button title="increase" 
        onPress={() => {
        dispatch({type: 'increment', payload: COUNTER_INCREMENT })
      }} />
      <Button title="decrease" onPress={() => {
        dispatch({type: 'decrement', payload: COUNTER_DECREMENT })
      }} />
      <Text>CurrentCount: {state.count} </Text>
    </View>
  );
};
  
    


const styles = StyleSheet.create({});

export default CounterScreen;