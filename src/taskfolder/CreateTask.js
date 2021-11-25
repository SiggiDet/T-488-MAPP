import React from "react";
import {Text, Button, StyleSheet, TextInput, View } from "react-native";


const CreateTask = (props) => {
    const [Name, onChangeName] = React.useState("Type name of task");
    const [Description, onChangeDescription] = React.useState("Type The description of the task");
    const IsFinished = false;

    return (
      <View>
          <div style={{padding : '5px', backgroundColor: 'LightBlue', border: '1px solid black', width: '495px', height: '125px'}}>
            <View style={styles.TitleBox}>
                <Text style={styles.Title}>Create Task</Text>
            </View>
            <View style = {styles.buttonBox}>
                <Button style={styles.CreateButton}  title="Create" color="#4ee44e"></Button>
                <Button style={styles.CancelButton}  title="Cancel" color="#e25444"></Button>
            </View>

            <View style = {styles.inputBox}>
                <Text><TextInput style={styles.Nameinput} onChangeText={onChangeName} value={Name}/></Text>
                <Text><TextInput style={styles.Descriptioninput} onChangeText={onChangeDescription} value={Description}/></Text>
            </View>
          </div>
      </View>
    )
};

const styles = StyleSheet.create({
    TitleBox:{
        float: 'left',
        flexDirection: 'row'
    },
    Title:{ 
        fontSize: 15,
        textAlign: 'Left',
        fontWeight: 'bold'
    },

    buttonBox:{
        float: 'right',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CreateButton:{
        height: 5,
        width: 50,
        margin: 6,
    },
    CancelButton:{
        height: 3,
        width: 50,
        margin: 4,
    },

    inputBox:{
        float: 'left',
        height: 5,
        margin: 10
    },
    Nameinput: {
      height: 25,
      margin: 4,
      borderWidth: 1,
      padding: 5,
    },
    Descriptioninput:{
        height: 40,
        margin: 4,
        borderWidth: 1,
        width: 400,
    }
  });

export default CreateTask;