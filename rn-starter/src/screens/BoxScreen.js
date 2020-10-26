import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle:{
    borderWidth: 1,
    borderColor: 'black'
  },
  textStyle:{
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
    marginHorizontal: 20
  }
});

export default BoxScreen;
