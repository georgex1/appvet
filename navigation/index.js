import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import LoginNavigator from './LoginNavigator';

export default () => {

  const loggedIn = useSelector(state => state.auth.user);

  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  )
}