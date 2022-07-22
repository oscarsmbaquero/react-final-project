import { BASE_URL } from "../assets/ApiRoutes";

const requestOptions = (sendData) => {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendData)
    }
};

/* const fetchUserToDatabase = async (reqData, urlPetition) => {
    const res = await fetch(`${BASE_URL}/${urlPetition}`, requestOptions(reqData));
    const data = await res.json();
    return data;
} */
export const loginUser = async (dispatch, loginData) => {
    localStorage.removeItem('currentUser');

    try {
        dispatch({ type: "REQ_LOGIN" });
        
        const res = await fetch(`${BASE_URL}/users/login`, requestOptions(loginData));
        const data = await res.json();

        if (data.data) {
            dispatch({ type: "LOGIN_OK", payload: data.data })
            localStorage.setItem('currentUser', JSON.stringify(data.data));
        }
        debugger
        // dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        // return;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });

    }

};




export const registerUser = async (dispatch, registerData) => {
    localStorage.removeItem('currentUser');

    try {
        dispatch({ type: "REQ_REGISTER" })
        const res = await fetch(`${BASE_URL}/users`, requestOptions(registerData));
        const data = await res.json();

        if (data.status === 201) {
            const resLogin = await fetch(`${BASE_URL}/users/login`, requestOptions(registerData));
            const dataLogin = await resLogin.json();
            dispatch({ type: "LOGIN_OK", payload: dataLogin.data })
            localStorage.setItem('currentUser', JSON.stringify(dataLogin.data));
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });
    }

}

export const logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}