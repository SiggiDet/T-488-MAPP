import React from 'react';
import { View, Text} from  'react-native';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Header = () => {
    return (
        <View style = {{margin: 'top', backgroundcolor: '#fadadd', alignItems : 'center',flexDirection: 'row'}}>
            <View>
                <Text style = {{color: "#51414F"}}>Toodler</Text>
            </View>
        </View>
    )
}

export default Header;