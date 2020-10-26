import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  return(
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value="Smoo Foo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin:      15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
