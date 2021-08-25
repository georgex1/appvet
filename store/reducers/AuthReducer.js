import { GET_USER, LOGIN_USER } from "../actions/authAction";

const INITIAL_STATE = {
    user: null,
    token: null
}

export default AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state, token: action.token, user: action.user
            };
        case GET_USER:
            return {...state, token: action.user.token, user: action.user.user}
        default:
            return { ...state }
    }
}