import { BASE_URL } from "../assets/ApiRoutes";

export const loginUser = async (dispatch, loginData) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
    };

    try {
        dispatch({ type: "REQ_LOGIN" })
        const res = await fetch(`${BASE_URL}/users/login`, requestOptions);
        const data = await res.json();
        if (data.data) {
            dispatch({ type: "LOGIN_OK", payload: data.data })
            localStorage.setItem('currentUser', JSON.stringify(data.data));
        }
        // dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        // return;
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });

    }

}

export const logout = async (dispatch) => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}