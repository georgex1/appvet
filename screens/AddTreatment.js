import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, Keyboard, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {FormStyles} from '../constants/styles';

import {useDispatch, useSelector} from 'react-redux';
import { addTreatment } from '../store/actions/treatmentsAction';

export default AddTreatment = ({ navigation }) => {

    const [showDatePiker, setshowDatePiker] = useState(false);
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch();

    const actualPet = useSelector(state => state.pets.selected);

    const [treatmentNameInput, settreatmentNameInput] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);

    const showDatepicker = () => {
        setshowDatePiker(true)
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setshowDatePiker(false)
    };

    const validateField = () => {
        if(treatmentNameInput != '' ){
            handleItem();
        }else{
            setErrorVisible(true);
            setTimeout(() => {
                setErrorVisible(false);
            }, 2000);
        }
    }

    const handleItem = () => {

        let treatmentInfo = {pet_id: actualPet.id, treatmentName: treatmentNameInput, startDate: date.toLocaleDateString('am-ET')}
        dispatch(addTreatment(treatmentInfo));

        settreatmentNameInput('');

        Keyboard.dismiss();
    
        Alert.alert(
            "Tratamiento Agregado",
            "El tratamiento para tu mascota ha sido agregado correctamente, como quiere continuar?",
            [
                {
                  text: "Agregar otro",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Volver", onPress: () => handleCancel() }
            ]
        );
    }

    const handleCancel = () => {
        navigation.navigate('Treatments')
    }

    return (
        <View style={FormStyles.container}>
            <View >
                
                <TextInput placeholder="Nombre Tratamiento" style={FormStyles.input} onChangeText={text => settreatmentNameInput(text) } value={treatmentNameInput} />

                
                
                <TouchableOpacity style={FormStyles.input} onPress={showDatepicker}>
                    <Text style={FormStyles.inputText}>{date.toLocaleDateString('am-ET')}</Text>
                </TouchableOpacity>
                
                
                {errorVisible && <Text style={FormStyles.error}>Verifica el nombre y la fecha de inicio del tratamiento. </Text> }
                

                <View style={FormStyles.bottonsContainer}>
                    <Button title="Cancelar" color={FormStyles.button.color} onPress={() => handleCancel(false)} />
                    <Button title="Agregar" color={FormStyles.button.color} onPress={validateField} />
                </View>
            </View>
            {showDatePiker && (
                <DateTimePicker
                locale="es-ES" 
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
                />
            )}
        </View>
    )
}