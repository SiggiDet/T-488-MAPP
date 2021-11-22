import React from 'react';
import {View, Text} from  'react-native';

const customData = require('./data.json');

const Boards = () => {
    return (
        <view>
            <div>{customData.boards.map(
                boards => 
                {return (
                    <div key={ boards.id}>
                        <p>{boards.name}</p>
                        <p><img src={boards.thumbnailPhoto}></img></p>
                    </div>
                    )}
            )}</div>
        </view>
    )
}

export default Boards;