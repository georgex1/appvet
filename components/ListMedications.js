import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';


import {TreatmentsStyles} from '../constants/styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function({medicationList, handleDeleteMedication}) {
    return (
        <FlatList 
            style={TreatmentsStyles.listStyle}
            data={medicationList}
            renderItem={data => {
                return (
                <View style={[TreatmentsStyles.itemList,TreatmentsStyles.itemListInner]}>
                    <View >
                        <Text>Medicamento: {data.item.value.name}</Text>
                        <Text>Fracción Dosis: {data.item.value.amount}</Text>
                        <Text>Cantidad Total Dosis: {data.item.value.total}</Text>
                        <Text>Hora Inicio: {data.item.value.hour}</Text>
                        <Text>Recurrencia: {data.item.value.recurrence}</Text>
                    </View>
                    {handleDeleteMedication && 
                        <TouchableOpacity  onPress={handleDeleteMedication.bind(this, data.item.id)}>
                            <FontAwesome5 name="times-circle" size={24} color={TreatmentsStyles.green.color} />
                        </TouchableOpacity>
                    }
                    
                </View>
                )
            }}
            keyExtractor={item => item.id.toString()}
        />
    )
}

