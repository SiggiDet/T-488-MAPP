import React from 'react';
import { View, Text} from  'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Header = () => {
    return (
        <view style = {{width: '100%', height: '100%', margin: 'top', backgroundcolor: '#fadadd', alignItems : 'center',flexDirection: 'row'}}>
            <view>
                <Text style = {{color: "#51414F"}}>Toodler</Text>
            </view>
        </view>
    )
}

export default Header;