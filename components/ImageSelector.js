import React, { useState } from 'react';
import { View, Button, Image, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {ImageSelectorStyles, headerStyles} from '../constants/styles';


export default ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de uso de la cámara para usar esta app',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1,1],
      quality: 0.8,
    });

    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={ImageSelectorStyles.container}>
      <View style={ImageSelectorStyles.preview}>
        {!pickedUri
         ? <Text>No hay imagen seleccionada...</Text>
         : <Image style={ImageSelectorStyles.image} source={{ uri: pickedUri }} />
        }
      </View>
      <Button
        title="Cargar Imagen"
        color={ImageSelectorStyles.button.color}
        onPress={handlerTakeImage}
      />
    </View>
  )
}
