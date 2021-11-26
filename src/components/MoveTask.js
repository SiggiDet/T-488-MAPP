import React, { useState, useEffect } from "react";
import { Alert, Modal, Text, Pressable, View, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../views/styles"

const Move_task_func = ({id_of_task, moveTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputMoveId, setInputMoveId] = useState('')

    function onMoveTask(){
        setModalVisible(!modalVisible)
        moveTask(id_of_task, inputMoveId)
        setInputMoveId('')
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
                    <Text style={styles.modalText}>Move Task</Text>
                    <Text style={[styles.modalText, {color: '#b3b3b3'}]}>Lists IDs can be found in front of list names</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter list ID"
                        value={inputMoveId}
                        onChangeText={setInputMoveId}
                      />
                    
    
                    <Pressable
                    style={[styles.editButton]}
                    onPress={onMoveTask}
                    >
                    <Text style={styles.textStyle}>Move</Text>
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
                <Text style={styles.textStyle}>MOVE TASK</Text>
            </Pressable>
        </View>
        );
}


export default Move_task_func;