import React from "react";
import {Button, StyleSheet, View } from "react-native";

const customData = require('../data.json');

const DeleteTask = (props) => {
    return(
        <View>
            <Button color = '#ff4949' title = 'Delete Task' onPress={() => customData.tasks.pop()}/>
        </View>
    )
}

export default DeleteTask;