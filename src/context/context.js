import React, { useReducer } from "react"
import { AuthReducer } from "./reducer";

const AuthState = React.createContext();
const AuthDispatch = React.createContext();

//Use Context Variable
export const useGetAuth = () => {
    const context = React.useContext(AuthState);

    return context
}

export const useDispatchAuth = () => {
    const context = React.useContext(AuthDispatch);

    return context;
}

export const AuthProvider = ({ children }) => {

    const [user , dispatch] = useReducer(AuthReducer, 'desde reducer');

    return (
        <AuthState.Provider value={user}>
            <AuthDispatch.Provider value={dispatch}>
                {children}
            </AuthDispatch.Provider>
        </AuthState.Provider>
    )

};


