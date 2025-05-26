import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ReadingList from './components/readingList/ReadingList';

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <ReadingList />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 50,
  },

});
