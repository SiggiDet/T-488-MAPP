import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"


const Create_task_func = ({id_of_list, addTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewTask, setNewTask] = useState('')
    const [inputNewDescTask, setNewDescTask] = useState('')

    function onCreateTask(){
        if (!inputNewTask) return
        setModalVisible(!modalVisible)
        addTask({
            name: inputNewTask,
            description: inputNewDescTask,
            isFinished: false,
            listId: id_of_list
        })
        setNewTask('')
        setNewDescTask('')
    }

    return (    
        <View style={styles.textStyle}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Add Task</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new task name"
                        value={inputNewTask}
                        onChangeText={setNewTask}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter new description"
                        value={inputNewDescTask}
                        onChangeText={setNewDescTask}
                    />
    
                    <Pressable
                    style={[styles.createButton]}
                    onPress={onCreateTask}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.deleteButton]}
                            onPress={() => setModalVisible(false)}
                        >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.addButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add Task</Text>
            </Pressable>
        </View>
        );
}


export default Create_task_func;