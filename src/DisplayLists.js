import React from 'react';
import {View, Text} from  'react-native';


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
                                <div style={{padding : '5px', background: lists.color, border: '1px solid black', margin: '0 0 5px 0'}} key={lists.id}>
                                    <p style={{fontWeight : 'bold', textAlign: 'center'}}>{lists.name}</p>

                                    <div>{customData.tasks.map(
                                        tasks => {
                                            if(tasks.listId == lists.id)
                                            return(
                                                <div style={{margin: '0 0 15px 0', border: '1px solid #cfcfcf'}} key={tasks.id}>
                                                    <p>{tasks.name}</p>
                                                    <p>{tasks.description}</p>
                                                    <p>{tasks.isFinished}</p>
                                                </div>
                                            )
                                        }
                                    )}

                                    </div>


                                </div>
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