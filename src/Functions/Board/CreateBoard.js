import React, { useState} from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";


const Create_board_func = ({addBoard}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputName, setInputName] = useState('')
    
    console.log(inputName)

    function onCreateBoard(){
        // TODO: Add error exception when name is not provided 
        if (!inputName) return
        setModalVisible(!modalVisible)
        addBoard({
            name: inputName,
            thumbnailPhoto: "https://hbr.org/resources/images/article_assets/2021/11/Nov21_23_80602562-383x215.jpg"           // Fixed                   
        })
        setInputName('')
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
                <Text style={styles.modalText}>Create new Board</Text>

                <TextInput
                    style={styles.input}
                    placeholder="New board name"
                    value={inputName}
                    onChangeText={setInputName}
                  />

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onCreateBoard}
                >
                <Text style={styles.textStyle}>Create</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Add Board</Text>
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

export default Create_board_func;