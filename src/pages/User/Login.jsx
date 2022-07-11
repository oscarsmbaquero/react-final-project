import React, { useState } from 'react'
import { loginUser, useDispatchAuth } from '../../context';

const loginInitialState = {
    email: "",
    password: ""
}

const Login = () => {

    const [loginForm, setLoginForm] = useState(loginInitialState);

    const handleLoginForm = (event) => {
        const { name, value } = event.target;
        setLoginForm((prevState) =>
            ({ ...prevState, [name]: value }))
    }

    const dispatch = useDispatchAuth();

    //enviar login al server
    const handleLogin = async (event) => {
        event.preventDefault();

        console.log(loginForm)
        try {
            loginUser(dispatch, loginForm)
            setLoginForm(loginInitialState)
        } catch (error) {

        }
    }

    return (
        <div>
            <div>
                <label htmlFor="email">
                    <p>email</p>
                    <input type="text" name="email" value={loginForm.email} onChange={handleLoginForm} />
                </label>

                <label htmlFor="password">
                    <p>password</p>
                    <input type="password" name="password" value={loginForm.password} onChange={handleLoginForm} />
                </label>
                <button onClick={handleLogin}>Login</button>
            </div>
            <br />
            {/* <p>{ && }</p> */}
        </div>
    )
}

export default Login