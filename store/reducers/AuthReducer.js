import { GET_USER, LOGIN_USER } from "../actions/authAction";

const INITIAL_STATE = {
    user: null
}

export default AuthReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.id}
        case GET_USER:
            return {...state}
        default:
            return { ...state }
    }
}