import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput, Button } from "react-native";

import ColorPickerComponent from '../ColorPicker';

const customData = require('../data.json');


const CreateLists = () => {

    const [inputListName, setListName] = useState("");
    const [inputListColor, setListColor] = useState("");
    const [lists, setLists] = useState(customData.lists)

    function addList(newList){
        newList.id = lists.length + 1
        const newLists = [...lists, newList]
        setLists(newLists)
    }
    function onCreateList(){
        // TODO: Add error exception when name is not provided 
        if (!inputListName) return
        setModalVisible(!modalVisible)
        addList({
            id: 9,
            name: inputListName,
            color: inputListColor,
            boardId: 1                   
        })
        setListName('')
    }

    
    const [modalVisible, setModalVisible] = useState(false);
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
                    <Text style={styles.modalText}>Create new List</Text>
        
                    <TextInput
                        placeholder="New lists name"
                        style={styles.input} onChangeText={setListName} value={inputListName}
                        />
        
                    {/* <TextInput
                        placeholder="Choose Color"
                        style={styles.input} onChangeText={setListColor} value={inputListColor}
                        /> */}

                    <ColorPickerComponent/>

                    <Pressable>
                        <Text style={styles.textStyle, styles.button, styles.buttonClose} onPress={onCreateList}>Create List </Text>
                    </Pressable>

                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add list</Text>
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
          borderRadius: 1,
          padding: 10,
          elevation: 2,
          borderWidth: 1
        },
        buttonOpen: {
          backgroundColor: "#80ff00",
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

      export default CreateLists;