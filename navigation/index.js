import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import TabNavigator from './TabNavigator';
import LoginNavigator from './LoginNavigator';

import { getUser } from '../store/actions/authAction';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {

  // const ff = async() =>{
  //   await AsyncStorage.removeItem('@user')
  // }
  
  // ff()

  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.auth);

  // console.log(loggedIn)

  //check if login in database..
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <NavigationContainer>
      {loggedIn.user != null ? <TabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  )
}