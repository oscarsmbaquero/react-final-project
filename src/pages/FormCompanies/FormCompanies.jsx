import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../assets/ApiRoutes";
import "./FormCompanies.scss";
import formImg from "../../assets/images/prueba.png";
const FormCompanies = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  let navigate = useNavigate();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const result = await fetch(`${BASE_URL}/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resData = await result.json();
      navigate("/Jobs");
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="companyForm__title">Registra una oferta de trabajo</h1>
          <section className="companyForm">
          <img className="employForm__img" src={formImg} alt="..."></img>
        <form onSubmit={handleSubmit(onSubmit)} className="companyForm__form">
        <fieldset className="companyForm__fieldset">
            <label>
              <input
                className="companyForm__input"
                type="text"
                name="name"
                placeholder="Puesto Ofertado"
                {...register("name", {
                  required: "Puesto Ofertado is required",
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>{errors.name_job.message}</p>
              )}
            </label>
            <label>
              <input
                className="companyForm__input"
                type="number"
                name="salary"
                placeholder="Salario"
                {...register("salary")}
              />
            </label>
            <label>
              <input
                className="companyForm__input"
                type="text"
                name="description"
                placeholder="Descripcion del puesto"
                {...register("description")}
              />
            </label>
            <label>
              <input
                className="companyForm__input"
                type="text"
                name="requiremets"
                placeholder="Requisitos"
                {...register("requiremets")}
              />
            </label>
            <button  className="companyForm__button" disabled={!isValid}>
              Send
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default FormCompanies;
