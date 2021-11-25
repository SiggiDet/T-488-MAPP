import React from 'react';
import {View, Text, ProgressViewIOSComponent} from  'react-native';
import Task from './taskfolder/DisplayTask';
import List from './NewDisplayLists'

const customData = require('./data.json');

const Lists = () => {
    return (
        <view>

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
        </view>
    )
}

export default Lists;