import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";

import Header from './src/Header' ;
import Boards from './src/DisplayLists';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/** <Header /> **/}
      <Boards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial'
  },
});
