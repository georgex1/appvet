export const GET_USER = "GET_USER";
export const LOGIN_USER = "LOGIN_USER";

export const getUser = () => (
    {
        type: GET_USER
    }
)

export const LoginUser = (id) => (
    {
        type: LOGIN_USER,
        id
    }
)