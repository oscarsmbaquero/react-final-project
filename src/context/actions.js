import { BASE_URL } from "../assets/ApiRoutes";




const requestOptions = (sendData) => {
    return {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendData)
    }
};

const fetchUserToDatabase = async (urlPetition, reqData) => {
    
};

export const loginUser = async (dispatch, loginData) => {
    localStorage.removeItem('currentUser');


    let data;

    try {
        
        dispatch({ type: "REQ_LOGIN" });

        // const data = await fetchUserToDatabase("users/login", loginData)
        
        // debugger;
        try {
            const res = await fetch(`${BASE_URL}/users/login`, requestOptions(loginData));
             data = await res.json();
            
        } catch (error) {
          
            console.error(error)
        }
        
        if (data.data) {
            
            dispatch({ type: "LOGIN_OK", payload: data.data });
            localStorage.setItem('currentUser', JSON.stringify(data.data));
        }
        
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', error: error });
        

    }
    return data;
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
};