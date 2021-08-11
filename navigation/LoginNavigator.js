import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';

import {headerStyles} from '../constants/styles';

const LoginStack = createStackNavigator();

export default Navigator = () => (
  
    <LoginStack.Navigator 
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
    >

      <LoginStack.Screen name="Login" 
        component={Login} 
      />
      
      

    </LoginStack.Navigator>
  
);
