import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, useDispatchAuth } from "../../../context";
import "./Login.scss";
const loginInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState(loginInitialState);

  const handleLoginForm = (event) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const dispatch = useDispatchAuth();

  //enviar login al server
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      loginUser(dispatch, loginForm);
      setLoginForm(loginInitialState);
      navigate("/Jobs");
    } catch (error) { }
  };

  return (
    <section className="sectionLogin">
      <h1>Inscribite en mas de 1000 ofertas</h1>
      <div className="login">
        <form className="login__form" onSubmit={handleLogin}>
          <label className="login__label" htmlFor="email">Email</label>
          <input
            className="login__input"
            type="text"
            name="email"
            value={loginForm.email}
            onChange={handleLoginForm}
          />
          <label className="login__label" htmlFor="password">Password</label>
          <input
            className="login__input"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginForm}
          />
          <button className="login__button">Login</button>
        </form>
        <p>You don't have an account. <Link to={"/users/register"}>Register</Link></p>
      </div>
    </section>
  );
};

export default Login;