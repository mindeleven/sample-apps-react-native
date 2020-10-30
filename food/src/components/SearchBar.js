import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background} >
      <Feather name="search" size={30} />
      <Text>Search Bar component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#EBE1E1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15
  }
});

export default SearchBar;
