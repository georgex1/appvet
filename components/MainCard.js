import React from 'react';
import { View, Text, Image } from 'react-native';

import {mainCard} from '../constants/styles';

export default MainCard = ({ data }) => {

    return (
        <View style={mainCard.card}>
            <View >
                <Image style={mainCard.image} source={{ uri: data?.image }}  />
            </View>
            <View >
                <Text style={mainCard.title}>{data.name}</Text>
                <Text >{data.age}</Text>
                <Text >{data.treatments} tratamiento/s</Text>
            </View>
        </View>
  );
}

