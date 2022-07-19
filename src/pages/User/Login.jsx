import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser, useDispatchAuth } from '../../context';

const loginInitialState = {
    email: "",
    password: ""
}

const Login = () => {

    const navigate = useNavigate()


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

        try {
            loginUser(dispatch, loginForm)
            setLoginForm(loginInitialState)
            navigate("/Jobs")

        } catch (error) {

        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">
                    <p>email</p>
                    <input type="text" name="email" value={loginForm.email} onChange={handleLoginForm} />
                </label>

                <label htmlFor="password">
                    <p>password</p>
                    <input type="password" name="password" value={loginForm.password} onChange={handleLoginForm} />
                </label>
                <button>Login</button>
            </form>
            <br />
            {/* <p>{ && }</p> */}
        </div>
    )
}

export default Login