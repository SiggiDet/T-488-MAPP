import React from 'react';
import {View, Text} from  'react-native';

const customData = require('./data.json');

const Lists = () => {
    return (
        <view>
            <div>{customData.lists.map(
                lists => 
                {return (
                    <div key={ lists.id}>
                        <p>{lists.name}</p>
                        <p>{lists.color}</p>
                        <p>{lists.boardId}</p>
                    </div>
                    )}
            )}</div>
        </view>
    )
}

export default Lists;