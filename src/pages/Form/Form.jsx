import React from "react";
import "./Form.scss";
import formImg from "../../assets/images/form.jpg";

const Form = () => {
  return (
    <section className="sectionForm">
      <img className="sectionForm__img" src={formImg} alt="..." />
      <form className="form">
        <h1 className="form__title">Explícanos tu duda</h1>
        <fieldset className="form__fieldset">
          <h2 className="form__h2">Datos personales</h2>
          <label className="form__label" htmlFor="name">
            Name:
            <input className="form__input" id="name" name="name" type="text" />
          </label>
          <label className="form__label" htmlFor="email">
            Email:
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
            />
          </label>
          <label className="form__label" htmlFor="telefono">
            Teléfono
            <input
              className="form__input"
              id="phone"
              name="phone"
              type="text"
            />
          </label>
          <label className="form__label" htmlFor="mensaje">
            Mensaje
            <textarea
              className="form__textarea"
              id="message"
              name="message"
              type="text"
            />
          </label>
        </fieldset>
        <fieldset className="form__fieldset">
          <h2 className="form__h2">Datos personales</h2>
          <label className="form__label" htmlFor="name">
            Name:
            <input className="form__input" id="name" name="name" type="text" />
          </label>
          <label className="form__label" htmlFor="email">
            Email:
            <input
              className="form__input"
              id="email"
              name="email"
              type="email"
            />
          </label>
          <label className="form__label" htmlFor="telefono">
            Teléfono
            <input
              className="form__input"
              id="phone"
              name="phone"
              type="TEXT"
            />
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default Form;
