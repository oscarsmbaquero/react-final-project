import React from "react";
import "./FormEmployers.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import formImg from "../../assets/images/prueba.png";
// import { expresiones } from "../../utils/patterns";
// import { messages } from "../../utils/patterns";
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
      <section className="employForm">
      <h1 className="employForm__title">Regístrate como demandante de empleo</h1>

        {/* <img className="employForm__img" src={formImg} alt="..."></img> */}
        <form onSubmit={handleSubmit(onSubmit)} className='employForm__form'>
          <fieldset className="employForm__fieldset">
            <label className="employForm__label">Nombre
              <input
                className="employForm__input"
                type="text"
                name="name"  
                // placeholder="Nombre"
                {...register("name", {
                  required: "Nombre is required",
                  // pattern: {
                  //   value: expresiones.nombre,
                  //   message: messages.name
                  // }
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>{errors.name.message}</p>
              )}
            </label>
            <label className="employForm__label">Apellidos
              <input
                className="employForm__input"
                type="text"
                name="surname"
                // placeholder="Apellido"
                {...register("surname")}
              />
            </label>
            <label className="employForm__label">Dni
              <input
                className="employForm__input"
                type="text"
                name="dni"
                // placeholder="Dni"
                {...register("dni")}
              />
            </label>
            <label className="employForm__label">Email
              <input
                className="employForm__input"
                type="email"
                name="email"
                // placeholder="Email"
                {...register("email")}
              />
            </label>
            <label className="employForm__label">Trabajo
              <input
               className="employForm__input"
                type="text"
                name="job"
                // placeholder="Trabajo"
                {...register("job")}
              />
            </label>
            <label className="employForm__label">Edad
              <input
                className="employForm__input"
                type="text"
                name="age"
                // placeholder="Edad"
                {...register("age")}
              />
            </label>

            <br></br>


          </fieldset>
          <button className="employForm__button" disabled={!isValid}>
              Send
            </button>
        </form>
      </section>
    </>
  );
};

export default FormEmployers;
