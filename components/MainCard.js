import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import {mainCard} from '../constants/styles';

export default MainCard = ({ data, handleDelete }) => {

    const handleDeletePet = (item) => {
        handleDelete(item)
    }

    return (
        <View style={mainCard.card}>
            <View style={mainCard.cardInner}>
                <View >
                    <Image style={mainCard.image} source={{ uri: data?.image }}  />
                </View>
                <View >
                    <Text style={mainCard.title}>{data.name}</Text>
                    <Text >Edad: {data.age} años</Text>
                    {handleDelete && 
                    <Text style={mainCard.clickTreatments}>Haz click para ver los tratamientos</Text>
                    }
                    {/* <Text >{data.treatments} tratamiento/s</Text> */}
                </View>
            </View>
            {handleDelete && 
                <View style={mainCard.cardInner}>
                    <TouchableOpacity  onPress={handleDeletePet.bind(this, data)}>
                        <FontAwesome5 name="times-circle" size={24} color={mainCard.green.color} />
                    </TouchableOpacity>
                </View>
            }
        </View>
  );
}

