import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";

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

const styles = StyleSheet.create({
    container_boards: {
        padding : 15, 
        borderWidth: 1, 
        margin: 5,
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      marginTop: 75
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


    createButton: {
        borderRadius: 20,
        padding: 12,
        elevation: 2,
        backgroundColor: "#00960f",
        marginBottom: 15
    },

    deleteButton: {
        borderRadius: 20,
        padding: 7.5,
        elevation: 2,
        backgroundColor: "#ff2929",
        marginBottom: 15
    },

    editButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#47cbff",
        marginBottom: 15
    },

    addButton: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        backgroundColor: "#00960f",
        marginBottom: 15
    },

    boardsInfo: {
        alignItems: "center",
        marginBottom: 30
    },

    boardName: {
        fontSize: 25,
        fontWeight: "bold",
    },

    oneList: {
        padding : 15,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 15 
    },

    listName: {
        marginTop: 50,
        marginBottom: 15,
        fontSize: 20,
        textAlign: "center"
    },

    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#a1e3ff",
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
      }
  });

export default Edit_board_func;