import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"

const Create_list_func = ({id_of_board, addList}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewList, setNewList] = useState('')
    const [inputNewColorList, setNewColorList] = useState('')

    function onCreateList(){
        if (!inputNewList) return
        setModalVisible(!modalVisible)
        addList({
            name: inputNewList,
            color: inputNewColorList,
            boardId: id_of_board
        })
        setNewList('')
        setNewColorList('')
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
                    <Text style={styles.modalText}>Add List</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new list name"
                        value={inputNewList}
                        onChangeText={setNewList}
                      />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new color for list"
                        value={inputNewColorList}
                        onChangeText={setNewColorList}
                      />
                    
    
                    <Pressable
                    style={[styles.createButton]}
                    onPress={onCreateList}
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
                <Text style={styles.textStyle}>ADD LIST</Text>
            </Pressable>
        </View>
        );
}

export default Create_list_func;