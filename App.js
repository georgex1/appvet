import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';

import {useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

import {Provider} from 'react-redux'
import store from './store';

import {mainStyles} from './constants/styles';

import MainNavigator from './navigation';
import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
});

export default function App() {

  const [dataLoaded] = useFonts({
    'FiraSans-Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'FiraSans-Light': require('./assets/fonts/FiraSans-Light.ttf'),
    'FiraSans-Regular': require('./assets/fonts/FiraSans-Regular.ttf')
  })

  if (!dataLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <SafeAreaView style={mainStyles.screen}><MainNavigator /></SafeAreaView>
    </Provider>
  );

}
