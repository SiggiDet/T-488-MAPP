import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";

const customData = require('./data.json');
const { height } = Dimensions.get('window')

var fixedBoardsLength = customData.boards.length
var fixedListLength = customData.lists.length
var fixedTaskLength = customData.tasks.length

const Boards = () => {
    const [boards, setBoards] = useState(customData.boards)
    const [lists, setLists] = useState(customData.lists)
    const [tasks, setTasks] = useState(customData.tasks)


    function addBoard(newBoard){
        const newBoards = [...boards, newBoard]
        fixedBoardsLength += 1
        newBoard.id = fixedBoardsLength
        setBoards(newBoards)
    }

    function addList(newList){
        const newLists = [...lists, newList]
        fixedListLength += 1
        newList.id = fixedListLength
        setLists(newLists)
    }

    function addTask(newTask){
        const newTasks = [...tasks, newTask]
        fixedTaskLength += 1
        newTask.id = fixedTaskLength
        setTasks(newTasks)
    }
    
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

    function editList(id, name){
        if (!lists) return
        const newLists = lists.map(list => {
            if (list.id == id){
                list.name = name
            } 
            return list
        })
        setLists(newLists)
    }

    function editTask(id, name){
        if (!tasks) return
        const newTasks = tasks.map(task => {
            if (task.id == id){
                task.name = name
            } 
            return task
        })
        setTasks(newTasks)
    }

    function deleteBoard(id){
        const newBoards = boards.filter(board => board.id != id)
        setBoards(newBoards)
    }

    function deleteList(id){
        const newLists = lists.filter(list => list.id != id)
        setLists(newLists)
    }

    function deleteTask(id){
        const newTasks = tasks.filter(task => task.id != id)
        setTasks(newTasks)
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
                            <Text style={styles.textStyle}>DELETE BOARD X</Text>
                        </Pressable>

                        <Edit_board_func id_of_board={boards.id} editBoard={editBoard} />
                        
                        <Text style={{fontSize: 25}}>{boards.name}</Text>
                        <Image style={{width: 350, height: 350}} 
                                source={{uri: boards.thumbnailPhoto}}></Image>
                        
                        <Create_list_func id_of_board={boards.id} addList={addList} />
                        
                        {lists.map(
                            lists => {
                                if(lists.boardId == boards.id)
                                return(
                                    <View key={lists.id} style={{padding : '5px', background: lists.color, border: '1px solid black', margin: '0 0 5px 0'}}>
                                        <Pressable
                                            style={[styles.buttonClose , styles.button]}
                                            onPress={() => deleteList(lists.id)}>
                                            <Text style={styles.textStyle}>DELETE LIST X</Text>
                                        </Pressable>

                                        <Edit_list_func id_of_list={lists.id} editList={editList} />
                                        <Create_task_func id_of_list={lists.id} addTask={addTask} />

                                        <Text style={{fontWeight : 'bold', textAlign: 'center'}}>{lists.name}</Text>

                                        {tasks.map(
                                        tasks => {
                                            if(tasks.listId == lists.id)
                                            return(
                                                <View key={tasks.id} style={{margin: '0 0 15px 0', border: '1px solid #cfcfcf'}}>

                                                    <Edit_task_func id_of_task={tasks.id} editTask={editTask}/>

                                                    <Pressable
                                                        style={[styles.buttonClose , styles.button]}
                                                        onPress={() => deleteTask(tasks.id)}>
                                                        <Text style={styles.textStyle}>DELETE TASK X</Text>
                                                    </Pressable>

                                                    <Text>{tasks.name}</Text>
                                                    <Text>{tasks.description}</Text>
                                                    <Text>{tasks.isFinished}</Text>
                                                </View>
                                            )
                                        }
                                    )}
                                    </View>
                                )
                            }
                        )}
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

const Edit_board_func = ({id_of_board, editBoard}) => {
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

const Edit_list_func = ({id_of_list, editList}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')

    function onEditList(){
        if (!inputEdit) return
        setModalVisible(!modalVisible)
        editList(id_of_list, inputEdit)
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
                    <Text style={styles.modalText}>Edit List</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new list name"
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
    
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onEditList}
                    >
                    <Text style={styles.textStyle}>Edit</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Edit List</Text>
            </Pressable>
        </View>
        );
}

const Create_task_func = ({id_of_list, addTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewTask, setNewTask] = useState('')

    function onCreateTask(){
        if (!inputNewTask) return
        setModalVisible(!modalVisible)
        addTask({
            name: inputNewTask,
            description: "Take a walk in the musem of Van Gogh!",
            isFinished: false,
            listId: id_of_list
        })
        setNewTask('')
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
                    <Text style={styles.modalText}>Add Task</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new list name"
                        value={inputNewTask}
                        onChangeText={setNewTask}
                      />
    
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onCreateTask}
                    >
                    <Text style={styles.textStyle}>Add</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add Task</Text>
            </Pressable>
        </View>
        );
}

const Edit_task_func = ({id_of_task, editTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')

    function onEditTask(){
        if (!inputEdit) return
        setModalVisible(!modalVisible)
        editTask(id_of_task, inputEdit)
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
                    <Text style={styles.modalText}>Edit List</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new task name"
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
    
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={onEditTask}
                    >
                    <Text style={styles.textStyle}>Edit</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Edit Task</Text>
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