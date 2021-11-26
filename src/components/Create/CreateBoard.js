import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"


const Create_board_func = ({addBoard}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputName, setInputName] = useState('')
    const [inputPhotoURI, setPhotoURI] = useState('')
    
    console.log(inputName)

    function onCreateBoard(){
        // TODO: Add error exception when name is not provided 
        if (!inputName) return
        setModalVisible(!modalVisible)
        if (inputPhotoURI == '')
            addBoard({
                name: inputName,
                thumbnailPhoto: "https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg"               
            })
        else   
            addBoard({
                name: inputName,
                thumbnailPhoto: inputPhotoURI               
            })
        setInputName('')
        setPhotoURI('')
    }
      
    return (    
    <View style={styles.centeredView}>
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
                <Text style={styles.modalText}>Add Board</Text>

                <TextInput
                    style={styles.input}
                    placeholder="New board name"
                    value={inputName}
                    onChangeText={setInputName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="URL for thumbnail"
                    value={inputPhotoURI}
                    onChangeText={setPhotoURI}
                />

                <Pressable
                    style={[styles.createButton]}
                        onPress={onCreateBoard}
                    >
                    <Text style={styles.textStyle}>Create</Text>
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
        <Pressable style={[styles.createButton]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Add Board</Text>
        </Pressable>
    </View>
    );
}

export default Create_board_func;