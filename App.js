import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header' ;
import Boards from './src/DisplayBoards';
import Lists from './src/DisplayLists';
import Tasks from './src/DisplayTasks'


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Boards />
      <Lists />
      <Tasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
