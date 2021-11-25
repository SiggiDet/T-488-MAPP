import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, button } from 'react-native';
import ColorPickerComponent from './colorpicker'
 


const customData = require('./data.json');


const UserTextInput = () => {
    const [input, setInput] = useState({
        new_name: '',
        new_color: '',
        new_board: ''
    });

const saveData = (UserTextInput) => {
    customData = JSON.stringify(UserTextInput)
    
}

customData.boards.map

// customData.tasks.push({
//     'id': customData.tasks.length + 1,
//     'name': customData.new_name,
//     'board': customData.new_board,
// });


    return (
        
        <form>
    <SafeAreaView>
      <TextInput
        placeholder="Enter name on new list"
        style={styles.inputfield}
        onChangeText={text => setInput('name', text)}
        value={input.new_name}
        />
      <ColorPickerComponent />
      <TextInput
        placeholder="Add Color Hexnumber"
        style={styles.inputfield}
        onChangeText={text => setInput('color', text)}
        value={input.new_color}
        />
        <TextInput
        placeholder="Enter boardnumber"
        style={styles.inputfield}
        onChangeText={text => setInput('board', text)}
        value={input.new_board}
        />
        <select>
            {customData.boards.name}
        </select>

        <button onClick={saveData}>Save List</button>
    </SafeAreaView>

    </form>

);


};
const styles = StyleSheet.create({
    inputfield: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default UserTextInput;