import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars,
        {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    borderRadius: 4,
    height: 120,
    width: 250,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
