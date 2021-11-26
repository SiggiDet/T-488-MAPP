import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"


const Edit_task_func = ({id_of_task, editTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')
    const [inputDescEdit, setInputDescEdit] = useState('')

    function onEditTask(){
        setModalVisible(!modalVisible)
        editTask(id_of_task, inputEdit, inputDescEdit)
        setInputEdit('')
        setInputDescEdit('')
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
                    <Text style={styles.modalText}>Edit Task</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new task name"
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new description"
                        value={inputDescEdit}
                        onChangeText={setInputDescEdit}
                      />
    
                    <Pressable
                    style={[styles.editButton]}
                    onPress={onEditTask}
                    >
                    <Text style={styles.textStyle}>Edit</Text>
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
            <Pressable style={[styles.editButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>EDIT TASK</Text>
            </Pressable>
        </View>
        );
}

export default Edit_task_func;