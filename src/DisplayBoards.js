import React from 'react';
import {StyleSheet, View, Text} from  'react-native';

import List from './DisplayLists';
const customData = require('./data.json');

const Boards = () => {
        return (
            <View>
                {customData.boards.map(
                    boards => {
                        {return (
                        <div style={{padding : '15px', border: '1px solid black', margin: '25px'}} key={boards.id}>
                            <p>{boards.name}</p>
                            <p><img style={{width : '150px', height : '150px'}} src={boards.thumbnailPhoto}></img></p>
    
                            <div>{customData.lists.map(
                                lists => { 
                                    if(lists.boardId == boards.id)
                                    return (
                                        <List getlist = {lists}/>
                                        )
                                }
                            )}</div>
                        </div>
                        )}
                    }
                )}
            </View>
        )
    }

const styles = StyleSheet.create({
  });

export default Boards;