import React, { useRef, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";

const Dialog_func = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputData, setInputDate] = useState({
      name: '',
      thumbnailPhoto: ''
    });

    function onAddBoard(){
        
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
                    placeholder="New boasdfdsfdrd name"
                    value={inputData.name}
                  />

                  <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
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

export default Dialog_func;