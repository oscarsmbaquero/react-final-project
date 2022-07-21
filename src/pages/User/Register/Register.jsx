import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser, useDispatchAuth } from '../../../context';

const loginInitialState = {
    email: "",
    password: "",
    name: "",
    surname: "",
    userType: ""
};

const Register = () => {

    const navigate = useNavigate();

    const [registerForm, setRegisterForm] = useState(loginInitialState);

    const handleRegisterForm = (event) => {
        const { name, value } = event.target;
        setRegisterForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const dispatch = useDispatchAuth();

    //enviar login al server
    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(registerForm);
        // try {
        //     loginUser(dispatch, registerForm);
        //     setRegisterForm(loginInitialState);
        //     navigate("/Jobs");
        // } catch (error) { }
    };

    return (
        <section className="sectionLogin">
            <div className="login">
                <form className="login__form" onSubmit={handleRegister}>
                    <label className="login__label" htmlFor="email">email</label>
                    <input
                        className="login__input"
                        type="text"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterForm}
                        required
                    />
                    <label className="login__label" htmlFor="name">name</label>
                    <input
                        className="login__input"
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterForm}
                        required
                    />
                    <label className="login__label" htmlFor="surname">surname</label>
                    <input
                        className="login__input"
                        type="text"
                        name="surname"
                        value={registerForm.surname}
                        onChange={handleRegisterForm}
                        required
                    />
                    <label className="login__label" htmlFor="userType">Accout type</label>
                    <select name="userType" onChange={handleRegisterForm} required>
                        <option selected disabled >select user type</option>
                        <option >User</option>
                        <option >Recruiter</option>
                    </select>

                    <label className="login__label" htmlFor="password">password</label>
                    <input
                        className="login__input"
                        type="password"
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterForm}
                        required
                    />
                    <button className="login__button">Login</button>
                </form>
                {/* <p>{ && }</p> */}
            </div>
        </section>
    )
}

export default Register