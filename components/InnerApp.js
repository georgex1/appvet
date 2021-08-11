import React from 'react';
import {View} from 'react-native';

import {innerStyles} from '../constants/styles';

export default InnerApp = (props) => {

    return (
        <View >
            <View style={innerStyles.content}>{props.children}</View>
        </View>
    )
}