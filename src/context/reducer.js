const idStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : "";
const tokenStored = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";

export const initialState = {
    id: idStored,
    token: tokenStored,
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
        case "LOGIN_OK":
            return {
                id: action.payload.user,
                token: action.payload.token,
                loading: false
            };
        case "LOGIN_FAIL":
            debugger
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };


        default:
            throw new Error(`Unhandled action type: ${action.type}`);

    }
};