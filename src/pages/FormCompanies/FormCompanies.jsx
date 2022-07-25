import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../assets/ApiRoutes";
import { useGetAuth } from "../../context/context";
import "./FormCompanies.scss";
// import formImg from "../../assets/images/prueba.png";
const FormCompanies = () => {

  const userLogged = useGetAuth();
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
          Authorization: `Bearer ${userLogged.token}`
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
      <section className="companyForm">
      <h1 className="companyForm__title">Registra una oferta de trabajo</h1>
          {/* <img className="employForm__img" src={formImg} alt="..."></img> */}
        <form onSubmit={handleSubmit(onSubmit)} className="companyForm__form">
        <fieldset className="companyForm__fieldset">
            <label className="companyForm__label"> Puesto Ofertado
              <input
                className="companyForm__input"
                type="text"
                name="name"
                // placeholder="Puesto Ofertado"
                {...register("name", {
                  required: "Puesto Ofertado is required",
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>{errors.name.message}</p>
              )}
            </label>
            <label className="companyForm__label">Salario
              <input
                className="companyForm__input"
                type="number"
                name="salary"
                // placeholder="Salario"
                {...register("salary")}
              />
            </label>
            <label className="companyForm__label">Descripción
              <input
                className="companyForm__input"
                type="text"
                name="description"
                // placeholder="Descripcion del puesto"
                {...register("description")}
              />
            </label>
            <label className="companyForm__label"> Requisitos
              <input
                className="companyForm__input"
                type="text"
                name="requiremets"
                // placeholder="Requisitos"
                {...register("requiremets")}
              />
            </label>
          </fieldset>
          <button  className="companyForm__button" disabled={!isValid}>
              Send
            </button>
        </form>
      </section>
    </>
  );
  
};

export default FormCompanies;
