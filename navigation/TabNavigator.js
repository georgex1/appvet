import React from 'react';
import { View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { NavigatorStyles } from '../constants/styles';

import PetsNavigator from './PetsNavigator';
import NotificationsNavigator from './NotificationsNavigator';
import LocationsNavigator from './LocationsNavigator';


const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      initialRouteName="ListPets"
      tabBarOptions={{
        showLabel: false,
        style: {
          ...NavigatorStyles.tabBar,
          ...NavigatorStyles.shadow,
        }
      }}
    >
        <TabStack.Screen
            name="ListPets"
            component={PetsNavigator}
            options={{
            tabBarIcon: ({ focused }) => (
                <View style={NavigatorStyles.item}>
                <FontAwesome5 name="dog" color={focused ? NavigatorStyles.focus.color : 'black'} size={24} />
                <Text>Mascotas</Text>
                </View>
            )
            }}
        />


        <TabStack.Screen
            name="Notifications"
            component={NotificationsNavigator}
            options={{
            tabBarIcon: ({ focused }) => (
                <View style={NavigatorStyles.item}>
                <FontAwesome5 name="concierge-bell" color={focused ? NavigatorStyles.focus.color : 'black'} size={24} />
                <Text>Notificaciones</Text>
                </View>
            )
            }}
        />

        <TabStack.Screen
            name="Locations"
            component={LocationsNavigator}
            options={{
            tabBarIcon: ({ focused }) => (
                <View style={NavigatorStyles.item}>
                <FontAwesome5 name="location-arrow" color={focused ? NavigatorStyles.focus.color : 'black'} size={24} />
                <Text>Paseos</Text>
                </View>
            )
            }}
        />

      
    </TabStack.Navigator>
  )
}


export default TabNavigator;