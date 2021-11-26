import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput, Button } from "react-native";

import List from './DisplayLists';
import CreateList from './taskfolder/CreateList'


const customData = require('./data.json');

const Boards = () => {


        return (
            <View>
                {customData.boards.map(
                    boards => {
                        {return (
                        <div style={{padding : '15px', border: '1px solid black', margin: '25px'}} key={boards.id}>
                            <p>{boards.name}</p>
                            <p><img style={{width : '150px', height : '150px'}} src={boards.thumbnailPhoto}></img></p>
                            
                            <CreateList />
                      
                            <div>{customData.lists.map(
                                lists => { 
                                    if(lists.boardId == boards.id)
                                    return (
                                        <List getlist = {lists}/>
                                        )
                                }
                            )}</div>
                        </div>
                        )}
                    }
                )}
            </View>
        )
    }

// const Create_lists_func = () => {
    
//     const [modalVisible, setModalVisible] = useState(false);
//     return (    
//         <View style={styles.centeredView}>
//             <Modal
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                 Alert.alert("Modal has been closed.");
//                 setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Create new List</Text>
        
//                     <TextInput
//                         style={styles.input}
//                         placeholder="New lists name"
//                         />
        
//                     <Pressable
//                     style={[styles.button, styles.buttonClose]}
//                     >
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Choose Color"
//                         />
//                     <ColorPickerComponent/>
//                     <Text style={styles.textStyle}>Create List</Text>
//                     </Pressable>
//                 </View>
//                 </View>
//             </Modal>
//             <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
//                 <Text style={styles.textStyle}>Add list</Text>
//             </Pressable>
//         </View>
//         );
// }


    const styles = StyleSheet.create({
        
        TitleBox:{
            float: 'left',
            flexDirection: 'row'
        },
        Title:{ 
            fontSize: 15,
            textAlign: 'Left',
            fontWeight: 'bold'
        },
    
        buttonBox:{
            float: 'right',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        CreateButton:{
            height: 5,
            width: 50,
            margin: 6,
        },
        CancelButton:{
            height: 3,
            width: 50,
            margin: 4,
        },
    
        inputBox:{
            float: 'left',
            height: 5,
            margin: 10
        },
        Nameinput: {
          height: 25,
          margin: 4,
          borderWidth: 1,
          padding: 5,
        },
        Descriptioninput:{
            height: 40,
            margin: 4,
            borderWidth: 1,
            width: 400,
        },
        container_boards: {
            padding : 15, 
            borderWidth: 1, 
            margin: 5
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





export default Boards;