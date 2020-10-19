import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  return(
    <View>
      <Button title="Increase" />
      <Button title="Decrease" />
      <Text>Counter Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default CounterScreen;
