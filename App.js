import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, SafeAreaView } from "react-native";

import Boards from './src/DisplayAllBoards';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
