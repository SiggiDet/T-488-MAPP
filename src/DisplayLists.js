import React from 'react';
import {View, Text, ProgressViewIOSComponent, Button, StyleSheet } from  'react-native';
import Task from './taskfolder/DisplayTask';
import CreateTask from './taskfolder/CreateTask'
const customData = require('./data.json');

const List = (props) => {
    // displaytask = props.gettask;
    return(
        <View>
            <div style={{padding : '5px', background: props.getlist.color, border: '1px solid black', margin: '0 0 5px 0'}} key={props.getlist.id}>
                <p style={{fontWeight : 'bold', textAlign: 'center'}}>{props.getlist.name}</p>

                <View style={styles.CreateTaskDisplay}>
                    <CreateTask LId = {props.getlist.id}/>
                </View>

                    <div>{customData.tasks.map(
                        tasks => {
                            if(tasks.listId == props.getlist.id)
                            return(
                                <View>
                                    <Task gettask = {tasks}/>
                                </View>
                            )}
                    )}
                    </div>

            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    CreateTaskDisplay:{
        float: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CreateTaskButton:{
        height: 5,
        width: 50,
        margin: 6
    }
  });
export default List;