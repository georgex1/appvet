import { URL_AUTH_SIGNUP, URL_AUTH_SIGNIN } from '../../constants/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN_USER = 'LOGIN_USER';
export const GET_USER = 'GET_USER';

const errorMessages = {
  INVALID_EMAIL: 'Email inválido',
  EMAIL_EXISTS: 'Email ya se encuentra registrado',
};

export const getUser = () => {
    
    return async dispatch => {
        try {
            const jsonValue = await AsyncStorage.getItem('@user')    
            const userData = (jsonValue != null) ? JSON.parse(jsonValue) : {user: null, token: null};


            dispatch({ type: GET_USER, user: userData });

        } catch (error) {
            throw error;
        }
    }
}

export const LoginUser = (email, password, type) => {
    
  return async dispatch => {
    const gurl = (type == 'login') ? URL_AUTH_SIGNIN : URL_AUTH_SIGNUP

    const response = await fetch(gurl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });


    if (!response.ok) {
        const resData = await response.json();
        const errorCode = resData.error.message;
        const errorMessage = errorCode in errorMessages
            ? errorMessages[errorCode]
            : 'Hubo un error... Comprueba los datos y vueve al intentarlo';

        throw new Error(errorMessage);

        //throw new Error(errorMessage);
        
    }
    const resData = await response.json();

    const UserData = {user: {id: resData?.localId}, token: resData?.idToken}


    const jsonValue = JSON.stringify(UserData)    
    await AsyncStorage.setItem('@user', jsonValue)

    dispatch({ type: LOGIN_USER, token: UserData.token, user: UserData.user });
  }
}


// export const GET_USER = "GET_USER";
// export const LOGIN_USER = "LOGIN_USER";

// export const getUser = () => (
//     {
//         type: GET_USER
//     }
// )

// export const LoginUser = (id) => (
//     {
//         type: LOGIN_USER,
//         id
//     }
// )