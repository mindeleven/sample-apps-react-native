import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const yourname = 'Jürgen';

  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with React Native!</Text>
      <Text style={styles.textStyle2}>My name is {yourname}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default ComponentsScreen;
