const idStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : undefined;
const tokenStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : undefined;
const mailStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).email
    : undefined;
const rolStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).rol
    : undefined;


export const initialState = {
    id: idStored,
    token: tokenStored,
    email: mailStored,
    rol: rolStored,
    loading: false,
    errorMessage: null
};


export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQ_LOGIN":

            return {
                ...initialState,
                loading: true
            };
        case "REQ_REGISTER":

            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_OK":
            return {
                id: action.payload.user,
                token: action.payload.token,
                rol: action.payload.rol,
                loading: false
            };
        case "LOGIN_FAIL":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };
        case "LOGOUT":
            return {
                id: undefined,
                token: undefined,
                loading: false
            };


        default:
            throw new Error(`Unhandled action type: ${action.type}`);

    }
};