import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {placeStyles} from '../constants/styles';

export default LocationsItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={placeStyles.placeItem}
    >
      
      <View style={placeStyles.info}>
        <Text style={placeStyles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
