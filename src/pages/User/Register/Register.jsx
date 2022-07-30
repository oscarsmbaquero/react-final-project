import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, useDispatchAuth } from '../../../context';
import "./Register.scss"

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
        <section className="sectionRegister">
                  <h1>Conecta y descubre nuestra comunidad</h1>
            <div className="register">
                <form className="register__form" onSubmit={handleRegister}>
                <label className="register__label" htmlFor="email">Email</label>
                    <input
                        className="register__input"
                        type="text"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterForm}
                        required
                    />
                    <label className="register__label" htmlFor="account_type">Tipo de cuenta</label>
                    <select className="register__input" defaultValue={"DEFAULT"} name="account_type" onChange={handleRegisterForm} required>
                        <option value="DEFAULT" disabled >Selecciona tipo de usuario</option>
                        <option >User</option>
                        <option >Recruiter</option>
                    </select>
                    <label className="register__label" htmlFor="name">Nombre</label>
                    <input
                        className="register__input"
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterForm}
                        required
                    />
                    {registerForm.account_type ==='User'&&
                    <>
                    <label className="register__label" htmlFor="surname">Apellido</label>
                    <input
                        className="register__input"
                        type="text"
                        name="surname"
                        value={registerForm.surname}
                        onChange={handleRegisterForm}
                        // required
                    />
                    </>
                    }
                    <label className="register__label" htmlFor="password">Password</label>
                    <input
                        className="register__input"
                        type="password"
                        name="password"
                        value={registerForm.password}
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title='Un mínimo de 8 carácteres que incluya, una mayúscula, una minúscula y un número'
                        onChange={handleRegisterForm}
                        required
                    />
                    <button className="register__button">Regístrate</button>
                </form>
                <p>Si ya tienes una cuenta, ve a  <Link to={"/users/login"}>Login</Link></p>
            </div>
        </section>
    )
}

export default Register