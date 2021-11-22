import React from 'react';
import {View, Text} from  'react-native';

const customData = require('./data.json');

const Boards = () => {
    return (
        <view>
            <Text>{customData.boards}</Text>
        </view>
    )
}

export default Boards;