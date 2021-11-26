import React from "react";
import { CheckBox, Text, StyleSheet, View,} from "react-native";

import TaskCheckBox from './taskcheckbox';
import DeleteTask from "./DeleteTask";
const customData = require('../data.json');

const Task = (props) => {
    // displaytask = props.gettask;
    return(
        <View>
            <div style={{padding : '5px', backgroundColor: 'LightBlue', border: '1px solid black', margin: '0 0 5px 0'}} key={props.gettask.Id}>

                <View style={styles.DeleteButtonBox}>
                    <DeleteTask deltask = {props.gettask}/>
                </View>

                <p style = {{ fontSize: 15, textAlign: 'Left', fontWeight: 'bold'}}> {props.gettask.name}</p>

                <p>{props.gettask.description}</p>

                <TaskCheckBox finished = {props.gettask.isFinished} />

            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    DeleteButtonBox:{
        float: 'right',
        justifyContent: 'right',
    }
});
export default Task;