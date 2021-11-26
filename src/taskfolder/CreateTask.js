import React, {useState} from "react";
import {Text, Button, StyleSheet, TextInput, View, Modal, Pressable } from "react-native";

const customData = require('../data.json');

const CreateTask = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [TaskName, setTaskName] = useState('');
    const [TaskDescription, setDescription] = useState('');
    const [Tasks, setTasks] = useState(customData.tasks);
  
    function addTask(newTask){

      const newTasks = [...Tasks, newTask];
      newTask.id = Tasks.length + 1;
      setTasks(newTasks);
    };

    function onCreateTask(){
      // TODO: Add error exception when name is not provided 
      if (!TaskName) return
      setModalVisible(!modalVisible)
      addTask({
          name: TaskName,
          Description: TaskDescription,           // Fixed
          isFinished: false,
          ListId: 1
      });
      setTaskName('');
  };

    return (    
        <View style={styles.centeredView}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Create new Task</Text>
    
                        <TextInput style={styles.input} placeholder="New Task name" onChangeText={ setTaskName }/>
                        <TextInput style={styles.inputDescription} placeholder="Description"  onChangeText={setDescription}/>
    
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={onCreateTask}>
                            <Text style={styles.textStyle}>Create</Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Create Task</Text>
            </Pressable>
        </View>
        );
}

const styles = StyleSheet.create({
    container_boards: {
        padding : 15, 
        borderWidth: 1, 
        margin: 5
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 4,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#54c9ff",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
      },
    inputDescription:{
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10
    }
  });

export default CreateTask