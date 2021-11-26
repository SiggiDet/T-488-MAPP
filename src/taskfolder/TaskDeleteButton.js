import React from "react";
import {Text, Button, StyleSheet, View } from "react-native";

import DeleteTask from './DeleteTask';

const customData = require('../data.json');

const DeleteButton = (props) => {
    return(
        <View>
            <Button title="Delete Button" color="#841584" accessibilityLabel="Learn more about this purple button" onPress ={DeleteTask}/>
        </View>
    )
}

export default DeleteButton;