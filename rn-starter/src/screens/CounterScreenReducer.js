import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) =>  {
  // state === {counter: number}
  // action === {type: 'change_count', payload: 1 || -1  }
  switch (action.type) {
    case 'change_count':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state;
  }
}

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const { counter } = state;

  return(
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'change_count', payload: 1})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'change_count', payload: -1})}
      />
      <Text>Counter Reducer</Text>
      <Text>Current Count: { counter }</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;
