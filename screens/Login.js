import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import {loginStyles, mainStyles, FormStyles} from '../constants/styles';

import { LoginUser } from '../store/actions/authAction';

export default Login = () => {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [screenRegister, setScreenRegister] = useState(false)

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleLoginUser  = async (type_ = 'login') => {
    
    try {
      await dispatch(LoginUser(inputEmail, inputPassword, type_));
    } catch (err) {
      Alert.alert(
        "Error",
        err.message,
        [
            { text: "OK" }
        ]
      );
    }
    
  }


  const changeLoginScreen = () => {
    setScreenRegister(!screenRegister)
  }

  const loginForm = (
    <View style={loginStyles.screen}>
        <View style={loginStyles.box}>
            <Text style={mainStyles.title1}>Login</Text>

            <TextInput placeholder="Email" style={FormStyles.input} onChangeText={text => setInputEmail(text) } value={inputEmail} />
            <TextInput secureTextEntry={true} placeholder="Contraseña" style={FormStyles.input} onChangeText={text => setInputPassword(text) } value={inputPassword} />

            <Button  title="Enviar" onPress={handleLoginUser.bind(this, 'login')} color={loginStyles.button.color} />

            <TouchableOpacity style={FormStyles.link} onPress={changeLoginScreen}>
                <Text style={FormStyles.inputText}>No tienes una cuenta? Registrate aquí</Text>
            </TouchableOpacity>
        </View>
    </View>
  )

  const registerForm = (
    <View style={loginStyles.screen}>
        <View style={loginStyles.box}>
            <Text style={mainStyles.title1}>Registrate</Text>

            <TextInput placeholder="Email" style={FormStyles.input} onChangeText={text => setInputEmail(text) } value={inputEmail} />
            <TextInput secureTextEntry={true} placeholder="Contraseña" style={FormStyles.input} onChangeText={text => setInputPassword(text) } value={inputPassword} />

            <Button  title="Enviar" onPress={handleLoginUser.bind(this, 'register')} color={loginStyles.button.color} />

            <TouchableOpacity style={FormStyles.link} onPress={changeLoginScreen}>
                <Text style={FormStyles.inputText}>Ya tienes una cuenta? Ingresa aquí</Text>
            </TouchableOpacity>
        </View>
    </View>
  )

  const showScreen = () => (
    screenRegister ? registerForm : loginForm
  )

  return (
    showScreen()
  );
}