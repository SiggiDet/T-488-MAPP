import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";

const customData = require('./data.json');
const { height } = Dimensions.get('window')

const Boards = () => {
    const [boards, setBoards] = useState(customData.boards)
    const [lists, setLists] = useState(customData.lists)
    
    function editBoard(id, name){
        if (!boards) return
        const newBoards = boards.map(board => {
            if (board.id == id){
                board.name = name
            } 
            return board
        })
        setBoards(newBoards)
    }
    function deleteBoard(id){
        const newBoards = boards.filter(board => board.id != id)
        setBoards(newBoards)
    }
    function addBoard(newBoard){
        const newBoards = [...boards, newBoard]
        newBoard.id = boards.length + 1
        setBoards(newBoards)
    }

    function addList(newList){
        const newLists = [...lists, newList]
        newList.id = lists.length + 1
        setLists(newLists)
    }

    function deleteList(id){
        const newLists = lists.filter(list => list.id != id)
        setLists(newLists)
    }

    return (
        <ScrollView>
            <Create_board_func addBoard={addBoard} />
            
            {boards.map(
                boards => {
                    {return (
                    <View style={styles.container_boards} key={boards.id}>
                        
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => deleteBoard(boards.id)}>
                            <Text style={styles.textStyle}>X</Text>
                        </Pressable>

                        <Edit_func_func id_of_board={boards.id} editBoard={editBoard} />

                        <Text style={{fontSize: 25}}>{boards.name}</Text>
                        <Image style={{width: 350, height: 350}} 
                                source={{uri: boards.thumbnailPhoto}}></Image>
                        
                        <Create_list_func id_of_board={boards.id} addList={addList} />
                        
                        {lists.map(
                            lists => {
                                if(lists.boardId == boards.id)
                                return(
                                    <View key={lists.id} style={{padding : '5px', background: lists.color, border: '1px solid black', margin: '0 0 5px 0'}}>
                                        <Text style={{fontWeight : 'bold', textAlign: 'center'}}>{lists.name}</Text>
                                        <Pressable
                                            style={[styles.buttonClose]}
                                            onPress={() => deleteList(lists.id)}>
                                            <Text>X</Text>
                                        </Pressable>
                                    </View>
                                )
                            }
                        )}
                        
                        
                        {/*
                        
                        <View>{customData.lists.map(
                            lists => { 
                                if(lists.boardId == boards.id)
                                return (
                                <View style={{padding : '5px', background: lists.color, border: '1px solid black', margin: '0 0 5px 0'}} key={lists.id}>
                                    <Text style={{fontWeight : 'bold', textAlign: 'center'}}>{lists.name}</Text>

                                    <View>{customData.tasks.map(
                                        tasks => {
                                            if(tasks.listId == lists.id)
                                            return(
                                                <View style={{margin: '0 0 15px 0', border: '1px solid #cfcfcf'}} key={tasks.id}>
                                                    <Text>{tasks.name}</Text>
                                                    <Text>{tasks.description}</Text>
                                                    <Text>{tasks.isFinished}</Text>
                                                </View>
                                            )
                                        }
                                    )}
                                    </View>
                                </View>
                                )
                                }
                            )}
                        </View>
                        */}
                    </View>
                    )}
                }
            )}
        </ScrollView>
    )
}

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

const Edit_func_func = ({id_of_board, editBoard}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')

    function onEditBoard(){
        if (!inputEdit) return
        setModalVisible(!modalVisible)
        editBoard(id_of_board, inputEdit)
        setInputEdit('')
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
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
    
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onEditBoard}
                    >
                    <Text style={styles.textStyle}>Edit</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Edit Board</Text>
            </Pressable>
        </View>
        );
}

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