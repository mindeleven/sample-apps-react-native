import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return(
    <View>
      <ColorCounter />
      <ColorCounter />
      <ColorCounter />
    </View>
  )
};

const styles = StyleSheet.create({});

export default SquareScreen;
