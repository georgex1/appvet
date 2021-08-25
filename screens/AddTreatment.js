import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, Keyboard, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {FormStyles, TreatmentsStyles} from '../constants/styles';


import {useDispatch, useSelector} from 'react-redux';
import { addTreatment } from '../store/actions/treatmentsAction';

import ModalAddMedication from '../components/ModalAddMedication';

import ListMedications from '../components/ListMedications';

export default AddTreatment = ({ navigation }) => {

    const [showDatePiker, setshowDatePiker] = useState(false);
    const [date, setDate] = useState(new Date());

    const [actualMedicationId, setactualMedicationId] = useState(1);
    const [medicationList, setmedicationList] = useState([]);

    const dispatch = useDispatch();

    const actualPet = useSelector(state => state.pets.selected);
    const user = useSelector(state => state.auth.user);

    const [treatmentNameInput, settreatmentNameInput] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const showDatepicker = () => {
        setshowDatePiker(true)
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setshowDatePiker(false)
    };

    const validateField = () => {
        if(treatmentNameInput != '' && medicationList.length > 0){
            handleItem();
        }else{
            Alert.alert(
                "Error",
                "Verifica el nombre del tratamiento y que contenga al menos un medicamento",
                [
                    { text: "Aceptar"}
                ]
            );
        }
    }

    const handleItem = () => {

        let treatmentInfo = {pet_id: actualPet.id, treatmentName: treatmentNameInput, startDate: date.toLocaleDateString('am-ET')}
        dispatch(addTreatment(treatmentInfo, medicationList, user.id));

        settreatmentNameInput('');
        setmedicationList([]);

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


    const handleMedicationItem = (item) => {

        setactualMedicationId(actualMedicationId+1)
        setmedicationList([...medicationList, {id: actualMedicationId, value: item} ])

        setModalVisible(false);
    
    }

    const handleDeleteMedication = (id) => {
        setmedicationList(medicationList.filter(x => x.id !== id));
    }

    return (
        <View style={FormStyles.container}>
            <View >
                
                <TextInput placeholder="Nombre Tratamiento" style={FormStyles.input} onChangeText={text => settreatmentNameInput(text) } value={treatmentNameInput} />
                
                <TouchableOpacity style={FormStyles.input} onPress={showDatepicker}>
                    <Text style={FormStyles.inputText}>{date.toLocaleDateString('am-ET')}</Text>
                </TouchableOpacity>
                

                <View style={TreatmentsStyles.listContainer}>
                <Text style={TreatmentsStyles.title}>Medicamentos</Text>

                <Button title="Agregar Medicamento" color={FormStyles.button.color} onPress={() => {setModalVisible(true)}} />

                

                
                {medicationList.length > 0 && 
                    <ListMedications medicationList={medicationList} handleDeleteMedication={handleDeleteMedication} />
                    
                }
                
                </View>

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

            <ModalAddMedication modalVisible={modalVisible} setModalAddVisible={setModalVisible} handleItem={handleMedicationItem} />
        </View>
    )
}