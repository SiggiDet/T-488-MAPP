import React, { useState} from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";


const TaskCheckBox = (props) => {
  const [isSelected, setSelection] = useState(props.finished);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Text>Task finished: </Text>
        <CheckBox value={isSelected} onValueChange={setSelection}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignSelf: 'flex-start',
    marginBottom: 20,
  }
});

export default TaskCheckBox;