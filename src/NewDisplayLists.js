import React from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

import Task from "./taskfolder/DisplayTask";
const customData = require('./data.json');

const List = (props) => {
    // displaytask = props.gettask;
    return(
        <View>
            <div style={{padding : '5px', background: props.getlist.color, border: '1px solid black', margin: '0 0 5px 0'}} key={props.getlist.id}>
                <p style={{fontWeight : 'bold', textAlign: 'center'}}>{props.getlist.name}</p>

                <div>{customData.tasks.map(
                    tasks => {
                        if(tasks.listId == props.getlist.id)
                        return(
                            <Task gettask = {tasks}/>
                        )}
                )}

                </div>
            </div>
        </View>
    );
};

export default List;