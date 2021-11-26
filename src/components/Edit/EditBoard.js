import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"

const Edit_board_func = ({id_of_board, editBoard}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNameEdit, setInputEdit] = useState('')
    const [inputPhotoEdit, setPhotoInputEdit] = useState('')

    function onEditBoard(){
        setModalVisible(!modalVisible)
        editBoard(id_of_board, inputNameEdit, inputPhotoEdit)
        setInputEdit('')
        setPhotoInputEdit('')
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

                    <Text style={styles.modalText}>Edit Board</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new board name"
                        value={inputNameEdit}
                        onChangeText={setInputEdit}
                      />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new URL for photo"
                        value={inputPhotoEdit}
                        onChangeText={setPhotoInputEdit}
                      />


                    <Pressable
                        style={[styles.editButton]}
                        onPress={onEditBoard}
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
                <Text style={styles.textStyle}>EDIT BOARD</Text>
            </Pressable>
        </View>
        );
}

export default Edit_board_func;