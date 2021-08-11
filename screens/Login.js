import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import {loginStyles, mainStyles} from '../constants/styles';

import { LoginUser } from '../store/actions/authAction';

import { USER } from '../data/users'

export default Login = () => {

  const dispatch = useDispatch();

  const handleLoginUser = () => {
    dispatch(LoginUser(USER))
  }

  return (
    <View style={loginStyles.screen}>
        <View style={loginStyles.box}>
            <Text style={mainStyles.title1}>Login</Text>
            <Button  title="Login con Google" onPress={handleLoginUser} color={loginStyles.button.color} />
        </View>
    </View>
  );
}