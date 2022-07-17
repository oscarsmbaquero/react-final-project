import React from "react";
import "./FormContact.scss";
import formImg from "../../assets/images/prueba.png";
import emailjs from '@emailjs/browser';
import {  useNavigate } from "react-router-dom";

const FormContact = () => {
  let navigate = useNavigate();

  const sendMail=(e)=>{
    try {
      e.preventDefault();
      console.log(e.target.name);
      emailjs.sendForm('service_esqoixc','template_lvs0put',e.target,'dso8n6rVU1ADlfbV4')
      .then(response =>console.log(response))
      navigate("/Users");
      
    } catch (error) {
      navigate("/FormContact");
    }
      
}
  return (
    <>
    <h1 className="form__title">Explícanos tu duda</h1>
    <section className="sectionForm">
      <img className="sectionForm__img" src={formImg} alt="..." />
      <form className="sectionForm__form" onSubmit={sendMail}>
        <fieldset className="sectionForm__fieldset1">
          <h2 className="sectionForm__h2">Que lo que</h2>
          {/* <div> </div> */}
          <input
            className="sectionForm__input"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre:..."
          />
          <input
            className="sectionForm__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email:..."
          />
          <input
            className="sectionForm__input"
            id="phone"
            name="phone"
            type="text"
            placeholder="Teléfono:..."
          />
          <textarea
            className="sectionForm__textarea"
            id="message"
            name="message"
            type="text"
            placeholder="Deja tu mensaje:..."
            rows='5'
            />
                    </fieldset>
          <h2 className="sectionForm__h2">De donde tu ere</h2>
            <fieldset className="sectionForm__fieldset2">
              <div className="sectionForm__divDirecc">
            <input
              className="sectionForm__input3"
              id="ciudad"
              name="ciudad"
              type="text"
              placeholder="Ciudad:..."
            />
            <input
              className="sectionForm__input3"
              id="cp"
              name="cp"
              type="text"
              placeholder="Código postal:..."
            />
            </div>
          <input
              className="sectionForm__input2"
              id="dirección"
              name="direccion"
              placeholder="Dirección:..."
                />
                          </fieldset>
        <button className="sectionForm__button">
          Enviar mensaje
        </button>


      </form>
      </section>
      </>
  );
};

export default FormContact;
