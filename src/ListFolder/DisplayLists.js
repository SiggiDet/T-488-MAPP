import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView, Dimensions, TextInput } from "react-native";

const { height } = Dimensions.get('window')

const Lists = (props) => {

    return (
        <View key={props.list.id} style={{padding : '5px', background: props.list.color, border: '1px solid black', margin: '0 0 5px 0'}}>
            <View>{props.taskCollection.map(
                    tasks => {
                        if(tasks.listId == props.list.id)
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

export default Lists;