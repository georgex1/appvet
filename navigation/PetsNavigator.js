import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';

import ListPets from "../screens/ListPets";
import Treatments from '../screens/Treatments';

import AddPet from '../screens/AddPet';
import AddTreatment from '../screens/AddTreatment';

import {headerStyles} from '../constants/styles';

const PetsStack = createStackNavigator();

export default Navigator = () => (
  
    <PetsStack.Navigator 
        initialRouteName="ListPets"
        screenOptions={{
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.title,
            headerTintColor: headerStyles.backButton.color,
        }}
    >

      <PetsStack.Screen name="ListPets" 
        component={ListPets} 
        options={{title: 'Mis Mascotas'}}
      />
      
      <PetsStack.Screen name="Treatments" 
        component={Treatments} 
        options={{title: 'Tratamientos'}}
      />

      <PetsStack.Screen name="AddPet" 
        component={AddPet} 
        options={{title: 'Agregar Mascota'}}
      />

      <PetsStack.Screen name="addTreatments" 
        component={AddTreatment} 
        options={{title: 'Agregar Tratamiento'}}
      />

    </PetsStack.Navigator>
  
);
