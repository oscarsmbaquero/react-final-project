import React from "react";
import "./Form.scss";
import formImg from "../../assets/images/form.png";

const Form = () => {
  return (
    <section className="sectionForm">
      <img className="sectionForm__img" src={formImg} alt="..." />
      <form className="form">
        <h1 className="form__title">Explícanos tu duda</h1>
        <fieldset className="form__fieldset">
          <h2 className="form__h2">Cuentanos quién eres</h2>
          <div> </div>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre:..."
          />
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email:..."
          />
          <input
            className="form__input"
            id="phone"
            name="phone"
            type="text"
            placeholder="Teléfono:..."
          />
          <textarea
            className="form__textarea"
            id="message"
            name="message"
            type="text"
            placeholder="Deja tu mensaje:..."
            rows='5'
          />
          <h2 className="form__h2">De donde eres</h2>
          <div className="form__divDirecc">

            <input
              className="form__input"
              id="ciudad"
              name="ciudad"
              type="text"
              placeholder="Ciudad:..."
            />
            <input
              className="form__input"
              id="cp"
              name="cp"
              type="text"
              placeholder="Código postal:..."
            />
          </div>
          <input
            className="form__input"
            id="dirección"
            name="dirección"
            placeholder="Dirección:..."
          />
        </fieldset>
        <button className="form__button" type="submit">
          {" "}
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Form;
