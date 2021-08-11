import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Locations from '../screens/Locations';
import AddLocation from '../screens/AddLocation';

import {headerStyles} from '../constants/styles';

const LocationsStack = createStackNavigator();

export default Navigator = () => (
  
    <LocationsStack.Navigator 
        initialRouteName="Locations"
        screenOptions={{
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.title,
            headerTintColor: headerStyles.backButton.color,
        }}
    >

      <LocationsStack.Screen name="Locations" 
        component={Locations} 
        options={{title: 'Paseos'}}
      />
      
      <LocationsStack.Screen name="addLocation" 
        component={AddLocation} 
        options={{title: 'Agregar Paseo'}}
      />
      

    </LocationsStack.Navigator>
  
);
