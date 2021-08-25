import React, { useState } from 'react';
import { Text, View, TextInput, Button, Modal, TouchableOpacity, Alert } from 'react-native';
import {modalStyles, FormStyles} from '../constants/styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

export default function({
    modalVisible,
    setModalAddVisible,
    handleItem
}) {

    const [medicationName, setmedicationName] = useState('');
    const [medicationRecurr, setmedicationRecurr] = useState('1 por día');
    const [medicationAmount, setmedicationAmount] = useState('1');
    const [medicationTotal, setmedicationTotal] = useState('1');
    const [date, setDate] = useState(new Date());

    const [showDatePiker, setshowDatePiker] = useState(false);
    

    const showDatepicker = () => {
        setshowDatePiker(true)
    }

    const onChangeDate = (event, selectedDate) => {
        console.log(selectedDate)
        const newHours = selectedDate.getHours();
        const newMinutes = selectedDate.getMinutes();
        const currentDate = selectedDate || date;
        console.log(currentDate)
        setDate(currentDate);
        setshowDatePiker(false)
    };

    const validateField = () => {
        if(medicationName != ''){
            const medicationData = {name: medicationName, hour: `${date.getHours()}:${date.getMinutes()}`, recurrence: medicationRecurr, amount: medicationAmount, total: medicationTotal }
            handleItem(medicationData);
            setmedicationName('')
        }else{
            Alert.alert(
                "Error",
                "Debes ingresar el nombre del medicamento",
                [
                    { text: "Aceptar"}
                ]
            );
        }
    }

    return (
        <Modal animationType="fade" visible={modalVisible} transparent >
            <View style={modalStyles.modalOverviewStyle}>
                <View style={modalStyles.modalStyle}>
                    
                    <Text style={modalStyles.modalTitle}>Agregar Medicamento </Text>

                    <TextInput placeholder="Nombre" style={FormStyles.input} onChangeText={text => setmedicationName(text)} value={medicationName} />


                    <Text >Fraccion de dosis</Text>
                    <Picker
                    style={FormStyles.input} 
                        testID="fraction-picker"
                        selectedValue={medicationAmount}
                        onValueChange={(itemValue, itemIndex) =>
                            setmedicationAmount(itemValue)
                        }
                    >
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="1/2" value="1/2" />
                        <Picker.Item label="1/4" value="1/4" />
                        <Picker.Item label="1/8" value="1/8" />
                    </Picker>


                    <Text >Total de dosis</Text>
                    <TextInput style={FormStyles.input} onChangeText={text => setmedicationTotal(text)} value={medicationTotal} keyboardType="numeric" />

                           
                    <Text >Hora de toma</Text>
                    <TouchableOpacity style={FormStyles.input} onPress={showDatepicker}>
                        <Text style={FormStyles.inputText}>{`${date.getHours()}:${date.getMinutes()}`}</Text>
                    </TouchableOpacity>
                    
                    {showDatePiker && (
                        <DateTimePicker
                        locale="es-ES" 
                        testID="dateTimePicker"
                        value={date}
                        mode="time"
                        is24Hour={true}
                        display="spinner"
                        onChange={onChangeDate}
                        />
                    )}

                    <Text >Recurrencia </Text>
                    
                    <Picker
                    style={FormStyles.input} 
                        testID="recurr-picker"
                        selectedValue={medicationRecurr}
                        onValueChange={(itemValue, itemIndex) =>
                            setmedicationRecurr(itemValue)
                        }
                    >
                        <Picker.Item label="1 por día" value="1 por día" />
                        <Picker.Item label="1 cada 12 horas" value="1 cada 12 horas" />
                        <Picker.Item label="1 cada 8 horas" value="1 cada 8 horas" />
                        <Picker.Item label="1 cada 6 horas" value="1 cada 6 horas" />
                        <Picker.Item label="1 cada 4 horas" value="1 cada 4 horas" />
                    </Picker>

                    <View style={modalStyles.bottonsContainer}>
                        <Button title="Cancelar" color={FormStyles.button.color} onPress={() => setModalAddVisible(false)} />
                        <Button title="Agregar" color={FormStyles.button.color} onPress={validateField} />
                    </View>

                </View>
            </View>
        </Modal>
    )
}
