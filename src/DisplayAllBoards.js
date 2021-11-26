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
    
    function editBoard(id, name, photo){
        if (!boards) return
        const newBoards = boards.map(board => {
            if (board.id == id){
                if (name != '')
                    board.name = name
                if (photo != '')
                    board.thumbnailPhoto = photo    
            } 
            return board
        })
        setBoards(newBoards)
    }

    function editList(id, name, color){
        if (!lists) return
        const newLists = lists.map(list => {
            if (list.id == id){
                if (name != '')
                    list.name = name
                if (color != '')
                    list.color = color 
            }
            return list
        })
        setLists(newLists)
    }

    function editTask(id, name, description){
        if (!tasks) return
        const newTasks = tasks.map(task => {
            if (task.id == id){
                if (name != '')
                    task.name = name
                if (description != '')
                    task.description = description 
            } 
            return task
        })
        setTasks(newTasks)
    }

    function moveTask(id, newListid){

        let allListIDs = [] 

        for (var i = 0; i < lists.length; i++){
            allListIDs.push(lists[i].id)
        }

        if (!tasks) return

        const newTasks = tasks.map(task => {
            if (task.id == id){
                if (newListid != null)
                    if (allListIDs.includes(parseInt(newListid)))
                        task.listId = newListid 
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
                            style={[styles.deleteButton]}
                            onPress={() => deleteBoard(boards.id)}>
                            <Text style={styles.textStyle}>DELETE BOARD</Text>
                        </Pressable>

                        <Edit_board_func id_of_board={boards.id} editBoard={editBoard} />
                        
                        <View style={styles.boardsInfo}>
                            <Text style={styles.boardName}>{boards.name}</Text>
                            <Image style={{width: 350, height: 350}} 
                                    source={{uri: boards.thumbnailPhoto}}></Image>
                        </View>
                        
                        <Create_list_func id_of_board={boards.id} addList={addList} />
                        
                        {lists.map(
                            lists => {
                                if(lists.boardId == boards.id)
                                return(
                                    <View key={lists.id} style={[styles.oneList, {backgroundColor: lists.color}]}>
                                        <Pressable
                                            style={[styles.deleteButton]}
                                            onPress={() => deleteList(lists.id)}>
                                            <Text style={styles.textStyle}>DELETE LIST</Text>
                                        </Pressable>

                                        <Edit_list_func id_of_list={lists.id} editList={editList} />

                                        <Text style={[styles.listName]}>[{lists.id}] {lists.name}</Text>

                                        <Create_task_func id_of_list={lists.id} addTask={addTask} />

                                        {tasks.map(
                                        tasks => {
                                            if(tasks.listId == lists.id)
                                            return(
                                                <View key={tasks.id} style={[styles.oneList, {backgroundColor: '#cf82ff'}]}>

                                                    <Pressable
                                                        style={[styles.deleteButton]}
                                                        onPress={() => deleteTask(tasks.id)}>
                                                        <Text style={styles.textStyle}>DELETE TASK</Text>
                                                    </Pressable>

                                                    <Edit_task_func id_of_task={tasks.id} editTask={editTask}/>
                                                    <Move_task_func id_of_task={tasks.id} moveTask={moveTask}/>
                                                
                                                    <Text style={styles.textStyle}>{tasks.name}</Text>
                                                    <Text style={{textAlign: 'center'}}>{tasks.description}</Text>
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

const Create_list_func = ({id_of_board, addList}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewList, setNewList] = useState('')
    const [inputNewColorList, setNewColorList] = useState('')

    function onCreateList(){
        if (!inputNewList) return
        setModalVisible(!modalVisible)
        addList({
            name: inputNewList,
            color: inputNewColorList,
            boardId: id_of_board
        })
        setNewList('')
        setNewColorList('')
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
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new color for list"
                        value={inputNewColorList}
                        onChangeText={setNewColorList}
                      />
                    
    
                    <Pressable
                    style={[styles.createButton]}
                    onPress={onCreateList}
                    >
                    <Text style={styles.textStyle}>Add</Text>
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
            <Pressable style={[styles.addButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>ADD LIST</Text>
            </Pressable>
        </View>
        );
}

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

const Create_task_func = ({id_of_list, addTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputNewTask, setNewTask] = useState('')
    const [inputNewDescTask, setNewDescTask] = useState('')

    function onCreateTask(){
        if (!inputNewTask) return
        setModalVisible(!modalVisible)
        addTask({
            name: inputNewTask,
            description: inputNewDescTask,
            isFinished: false,
            listId: id_of_list
        })
        setNewTask('')
        setNewDescTask('')
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
                        placeholder="Enter new task name"
                        value={inputNewTask}
                        onChangeText={setNewTask}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter new description"
                        value={inputNewDescTask}
                        onChangeText={setNewDescTask}
                    />
    
                    <Pressable
                    style={[styles.createButton]}
                    onPress={onCreateTask}
                    >
                    <Text style={styles.textStyle}>Add</Text>
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
            <Pressable style={[styles.addButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Add Task</Text>
            </Pressable>
        </View>
        );
}

const Edit_task_func = ({id_of_task, editTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputEdit, setInputEdit] = useState('')
    const [inputDescEdit, setInputDescEdit] = useState('')

    function onEditTask(){
        setModalVisible(!modalVisible)
        editTask(id_of_task, inputEdit, inputDescEdit)
        setInputEdit('')
        setInputDescEdit('')
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
                    <Text style={styles.modalText}>Edit Task</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new task name"
                        value={inputEdit}
                        onChangeText={setInputEdit}
                      />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter new description"
                        value={inputDescEdit}
                        onChangeText={setInputDescEdit}
                      />
    
                    <Pressable
                    style={[styles.editButton]}
                    onPress={onEditTask}
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
                <Text style={styles.textStyle}>EDIT TASK</Text>
            </Pressable>
        </View>
        );
}

const Move_task_func = ({id_of_task, moveTask}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputMoveId, setInputMoveId] = useState('')

    function onMoveTask(){
        setModalVisible(!modalVisible)
        moveTask(id_of_task, inputMoveId)
        setInputMoveId('')
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
                    <Text style={styles.modalText}>Move Task</Text>
                    <Text style={[styles.modalText, {color: '#b3b3b3'}]}>Lists IDs can be found in front of list names</Text>
    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter list ID"
                        value={inputMoveId}
                        onChangeText={setInputMoveId}
                      />
                    
    
                    <Pressable
                    style={[styles.editButton]}
                    onPress={onMoveTask}
                    >
                    <Text style={styles.textStyle}>Move</Text>
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
                <Text style={styles.textStyle}>MOVE TASK</Text>
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

export default Boards;