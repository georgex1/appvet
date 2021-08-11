import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, Keyboard, Alert } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

import {addPlace} from '../store/actions/placesAction';
import LocationPicker from '../components/LocationPicker';

import { placeStyles, FormStyles } from '../constants/styles';

export default AddLocation = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState({lat: 0, lng: 0});

    const onHandlerTitle = text => setTitle(text);

    const user = useSelector(state => state.auth.user);

    const onChangeLocation = (newLocation) => {
        setLocation(newLocation);
    }

    const onHandlerSave = () => {
        if(title == ""){
            Alert.alert(
                "Error",
                "Debes agregar un nombre al paseo",
                [
                    { text: "Aceptar", onPress: () => {}}
                ]
            );
            return 
        }

        let placeInfo = {name: title, location: {lat: location.lat,lng: location.lng} }
        

        dispatch(addPlace(placeInfo, user.id));
        
        Keyboard.dismiss();
    
        Alert.alert(
            "Paseo Agregado",
            "Su paseo ha sido agregado correctamente",
            [
                { text: "Aceptar", onPress: () => navigation.goBack() }
            ]
        );
    }

    return (
        <ScrollView>
                
                <TextInput
                    style={FormStyles.input}
                    onChangeText={onHandlerTitle}
                    value={title}
                    placeholder="Nombre"
                />

                <LocationPicker navigation={navigation} onChangeLocation={onChangeLocation} />

                <View style={FormStyles.bottonsContainer}>
                    <Button title="Cancelar" color={FormStyles.button.color} onPress={() => navigation.goBack()} />
                    <Button title="Agregar" color={FormStyles.button.color} onPress={onHandlerSave} />
                </View>
                
            
        </ScrollView>
    )
}
