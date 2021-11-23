import React from 'react';
import {View, Text} from  'react-native';

const customData = require('./data.json');

const Tasks = () => {
    return (
        <view>
            <div>{customData.tasks.map(
                tasks => 
                {return (
                    <div key={tasks.id}>
                        <p>{tasks.name}</p>
                        <p>{tasks.description}</p>
                        <p>{tasks.isFinished}</p>
                        <p>{tasks.listId}</p>
                    </div>
                    )}
            )}</div>
        </view>
    )
}

export default Tasks;