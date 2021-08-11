import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, Keyboard, Alert } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

import {addPlace} from '../store/actions/placesAction';
import LocationPicker from '../components/LocationPicker';

import { placeStyles } from '../constants/styles';

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
            <View style={placeStyles.container}>
                <Text style={placeStyles.label}>Titulo</Text>
                
                <TextInput
                    style={placeStyles.input}
                    onChangeText={onHandlerTitle}
                    value={title}
                />

                <LocationPicker navigation={navigation} onChangeLocation={onChangeLocation} />
                
                <View style={placeStyles.footer}>
                    <Button
                        title="Grabar Dirección"
                        color={placeStyles.button.color}
                        onPress={onHandlerSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
