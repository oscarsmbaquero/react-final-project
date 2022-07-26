import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, useDispatchAuth } from '../../../context';

const loginInitialState = {
    email: "",
    password: "",
    name: "",
    surname: "",
    account_type: ""
};

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatchAuth();

    const [registerForm, setRegisterForm] = useState(loginInitialState);

    const handleRegisterForm = (event) => {
        const { name, value } = event.target;
        setRegisterForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            registerUser(dispatch, registerForm);
            setRegisterForm(loginInitialState);
            registerForm.account_type === "User" ? navigate("/Jobs")
                : navigate("/formCompanies");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="sectionLogin">
            <div className="login">
                <form className="login__form" onSubmit={handleRegister}>
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
                    <label className="login__label" htmlFor="email">email</label>
                    <input
                        className="login__input"
                        type="text"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterForm}
                        required
                    />
                    <label className="login__label" htmlFor="account_type">Accout type</label>
                    <select defaultValue={"DEFAULT"} name="account_type" onChange={handleRegisterForm} required>
                        <option value="DEFAULT" disabled >select user type</option>
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
                    <button className="login__button">Register</button>
                </form>
                <p>You already have an account. <Link to={"/users/login"}>Login</Link></p>
            </div>
        </section>
    )
}

export default Register