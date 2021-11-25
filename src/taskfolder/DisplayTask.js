import React from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

import TaskCheckBox from './taskcheckbox';

const Task = (props) => {
    // displaytask = props.gettask;
    return(
        <View>
            <div style={{padding : '5px', backgroundColor: 'LightBlue', border: '1px solid black', margin: '0 0 5px 0'}} key={props.gettask.Id}>
                <p style = {{ fontSize: 15, textAlign: 'Left', fontWeight: 'bold'}}> {props.gettask.name}</p>

                <p>{props.gettask.description}</p>

                <p><TaskCheckBox finished = {props.gettask.isFinished} /></p>
            </div>
        </View>
    );
};

export default Task;