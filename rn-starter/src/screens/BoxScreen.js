import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return(
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwoStyle} />
      </View>
      <View style={styles.viewThreeStyle} />
    </View>
  )
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end'
  },
  viewTwoStyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50
  },
  viewThreeStyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50
  },
  viewStyle:{
    borderWidth: 3,
    borderColor: 'black',
    height: 200
  },
  textOneStyle:{
    borderWidth: 3,
    fontSize: 60,
    borderColor: 'red'
  },
  textTwoStyle:{
    backgroundColor: 'red',
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    position: 'absolute',
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle:{
    borderWidth: 3,
    borderColor: 'red'
  }
});

export default BoxScreen;
