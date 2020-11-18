import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CreateScreeen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput title={text} onChangeText={(text) => setTitle(text)} />
      <Text>Enter Content:</Text>
      <TextInput title={content} onChangeText={(text) => setContent(text)} />
    </View>
  );
}

export default CreateScreeen;
