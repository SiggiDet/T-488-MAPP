import React, { useState} from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";


const Create_list_func = ({id_of_board, addList}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewList, setNewList] = useState('')

    function onCreateList(){
        if (!inputNewList) return
        setModalVisible(!modalVisible)
        addList({
            name: inputNewList,
            color: "#00ff00",
            boardId: id_of_board
        })
        setNewList('')
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
    
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onCreateList}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add List</Text>
            </Pressable>
        </View>
        );
}

const styles = StyleSheet.create({
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
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
      }
  });

export default Create_list_func;