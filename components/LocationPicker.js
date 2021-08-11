import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import * as Location from 'expo-location';

import MapPreview from './MapPreview';

import {placeStyles} from '../constants/styles';

const LocationPicker = ({ navigation, onChangeLocation }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permisos insuficientes',
          'Necesita dar permisos de localización para la app',
          [{ text: 'Ok' }],
        );

        
      }

      getLocationHandler()
    })();
  }, []);


  useEffect(() => {
    onChangeLocation(pickedLocation)
  }, [pickedLocation])
  

  const getLocationHandler = async () => {
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log('location:');
      console.log(location);
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch(err) {
      Alert.alert(
        'No se pudo obtener la localización',
        'Por favor intente nuevamente.',
        [{ text: 'Ok' }],
      )
    } finally {
      setIsFetching(false);
    }
  };


  return (
    <View style={placeStyles.locationPicker}>
      <MapPreview style={placeStyles.mapPreview} location={pickedLocation}>
        {isFetching
          ? <ActivityIndicator size="large" color={placeStyles.button.color} />
          : <Text>En proceso...</Text>
        }
      </MapPreview>
      <View style={placeStyles.actions}>
        <Button
          title="Obtener Ubicación"
          color={placeStyles.button.color}
          onPress={getLocationHandler}
        />
      </View>
    </View>
  );
}


export default LocationPicker;