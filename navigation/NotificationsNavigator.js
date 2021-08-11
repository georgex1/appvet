import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Notifications from '../screens/Notifications';

import {headerStyles} from '../constants/styles';

const NotificationsStack = createStackNavigator();

export default Navigator = () => (
  
    <NotificationsStack.Navigator 
        initialRouteName="Notifications"
        screenOptions={{
            headerStyle: headerStyles.header,
            headerTitleStyle: headerStyles.title,
            headerTintColor: headerStyles.backButton.color,
        }}
    >

      <NotificationsStack.Screen name="Notifications" 
        component={Notifications} 
        options={{title: 'Notificaciones'}}
      />
      
      

    </NotificationsStack.Navigator>
  
);
