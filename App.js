import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header' ;
import Boards from './src/DisplayBoards';
import Lists from './src/DisplayLists';
import CreateTask from './src/taskfolder/CreateTask'


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Lists />
      <CreateTask></CreateTask>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial'
  }
});
