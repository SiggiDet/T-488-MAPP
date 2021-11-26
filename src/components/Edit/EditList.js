import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "../../views/styles"

const Edit_list_func = ({id_of_list, editList}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')
    const [inputColorEdit, setInputColorEdit] = useState('')

    function onEditList(){
        setModalVisible(!modalVisible)
        editList(id_of_list, inputEdit, inputColorEdit)
        setInputEdit('')
        setInputColorEdit('')
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
                    <Text style={styles.modalText}>Edit List</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new list name"
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new color"
                        value={inputColorEdit}
                        onChangeText={setInputColorEdit}
                      />
    
                    <Pressable
                    style={[styles.editButton]}
                    onPress={onEditList}
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
                <Text style={styles.textStyle}>EDIT LIST</Text>
            </Pressable>
        </View>
        );
}

export default Edit_list_func;