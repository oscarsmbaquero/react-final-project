import { BASE_URL } from "../assets/ApiRoutes";

const requestOptions = (sendData) => {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendData)
    }
};

const fetchUserToDatabase = async (urlPetition, reqData) => {
    const res = await fetch(`${BASE_URL}/${urlPetition}`, requestOptions(reqData));
    const data = await res.json();
    return data;
}

export const loginUser = async (dispatch, loginData) => {
    localStorage.removeItem('currentUser');

    try {
        dispatch({ type: "REQ_LOGIN" });

        const data = await fetchUserToDatabase("users/login", loginData)

        if (data.data) {
            dispatch({ type: "LOGIN_OK", payload: data.data });
            localStorage.setItem('currentUser', JSON.stringify(data.data));
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });

    }

};

export const registerUser = async (dispatch, registerData) => {
    localStorage.removeItem('currentUser');

    try {
        dispatch({ type: "REQ_REGISTER" })
        const data = await fetchUserToDatabase("users", registerData);

        if (data.status === 201) {
            const dataLogin = await fetchUserToDatabase("users/login", registerData)
            dispatch({ type: "LOGIN_OK", payload: dataLogin.data })
            localStorage.setItem('currentUser', JSON.stringify(dataLogin.data));
        }
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });
    }

};

export const logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}