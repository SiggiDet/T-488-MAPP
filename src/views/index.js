import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";
import styles from "./styles"

import Create_board_func from "../components/Create/CreateBoard";
import Create_list_func from "../components/Create/CreateList";
import Create_task_func from "../components/Create/CreateTask";

import Edit_board_func from "../components/Edit/EditBoard";
import Edit_list_func from "../components/Edit/EditList";
import Edit_task_func from "../components/Edit/EditTask";

import Move_task_func from "../components/MoveTask";

const customData = require('../resources/data.json');
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



export default Boards;