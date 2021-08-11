import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, Keyboard } from 'react-native';
import {FormStyles} from '../constants/styles';

import {useDispatch, useSelector} from 'react-redux';
import { addPet } from '../store/actions/petsAction';
import ImageSelector from '../components/ImageSelector';

export default AddPet = ({ navigation }) => {

    const dispatch = useDispatch();

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const user = useSelector(state => state.auth.user);

    const validateField = () => {
        if(inputName != '' && inputAge != '' && selectedImage != ''){
            handleItem();
        }else{
            setErrorVisible(true);
            setTimeout(() => {
                setErrorVisible(false);
            }, 2000);
        }
    }

    const onHandlerImage = path => setSelectedImage(path);

    const handleItem = () => {

        let petInfo = {name: inputName, age: inputAge, image: selectedImage}
        dispatch(addPet(petInfo, user.id));

        setInputName('');
        setInputAge('');

        Keyboard.dismiss();
    
        Alert.alert(
            "Mascota agregada",
            "Su mascota ha sido agregada correctamente, como quiere continuar?",
            [
                {
                  text: "Agregar otra",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Volver", onPress: () => handleCancel() }
            ]
        );

    }

    const handleCancel = () => {
        navigation.navigate('ListPets')
    }

    return (
        <View style={FormStyles.container}>
            <View >
                
                <TextInput placeholder="Nombre" style={FormStyles.input} onChangeText={text => setInputName(text) } value={inputName} />
                <TextInput placeholder="Edad" style={FormStyles.input} onChangeText={text => setInputAge(text)} value={inputAge} keyboardType="numeric"/>
                {errorVisible && <Text style={FormStyles.error}>Verifica el nombre, imagen y la edad de tu mascota. </Text> }
                <ImageSelector onImage={onHandlerImage} />

                <View style={FormStyles.bottonsContainer}>
                    <Button title="Cancelar" color={FormStyles.button.color} onPress={() => handleCancel(false)} />
                    <Button title="Agregar" color={FormStyles.button.color} onPress={validateField} />
                </View>
            </View>
        </View>
    )
}