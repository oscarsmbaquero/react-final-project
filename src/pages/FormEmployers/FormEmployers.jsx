import React from "react";
import "./FormEmployers.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import formImg from "../../assets/images/prueba.png";

const FormEmployers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  let navigate = useNavigate();
  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const result = await fetch("http://localhost:4000/employers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resData = await result.json();
      navigate("/Users");
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="employForm__title">Registrate como demandante de empleo</h1>
      <section className="employForm">
        <img className="employForm__img" src={formImg} alt="..."></img>
        <form onSubmit={handleSubmit(onSubmit)} className='employForm__form'>
          <fieldset className="employForm__fieldset">
            <label>
              <input
                 className="employForm__input"
                type="text"
                name="name"
                placeholder="Nombre"
                {...register("name", {
                  required: "Nombre is required",
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>{errors.name.message}</p>
              )}
            </label>
            <label>
              <input
                className="employForm__input"
                type="text"
                name="surname"
                placeholder="Surname"
                {...register("surname")}
              />
            </label>
            <label>
              <input
                className="employForm__input"
                type="text"
                name="dni"
                placeholder="Dni"
                {...register("dni")}
              />
            </label>
            <label>
              <input
                className="employForm__input"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
            </label>
            <label>
              <input
               className="employForm__input"
                type="text"
                name="job"
                placeholder="Perfil"
                {...register("job")}
              />
            </label>
            <label>
              <input
                className="employForm__input"
                type="text"
                name="age"
                placeholder="Age"
                {...register("age")}
              />
            </label>

            <br></br>

            <button className="employForm__button" disabled={!isValid}>
              Send
            </button>
            </fieldset>
        </form>
      </section>
    </>
  );
};

export default FormEmployers;
