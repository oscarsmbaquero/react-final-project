import React from "react";
import "./Home.scss";
import formImg from "../../assets/images/prueba.png";

const Home = () => {

  return (
    <main className="home">
      <section className="home__sectionfirst">
        <p className="home__firstp">Crea un Curriculum Vitae Digital</p>
        <p className="home__secondp">Y saca el mejor provecho a tu perfil</p>
      </section>
      <section className="home__section sect-1">
        <img className="home__img" src={formImg} alt="..."></img>
        <p>
          loremDolore est pariatur proident labore aliqua anim ad. Ut irure
          minim eiusmod quis do. Velit mollit anim irure velit consectetur
          laboris sunt commodo consequat duis. Id enim et eiusmod ullamco
          eiusmod adipisicing. Nisi culpa dolore commodo nostrud eu Lorem.
        </p>
      </section>
      <section className="home__section sect-2">
        <img className="home__img" src={formImg} alt="..."></img>
        <p>
          loremDolore est pariatur proident labore aliqua anim ad. Ut irure
          minim eiusmod quis do. Velit mollit anim irure velit consectetur
          laboris sunt commodo consequat duis. Id enim et eiusmod ullamco
          eiusmod adipisicing. Nisi culpa dolore commodo nostrud eu Lorem.
        </p>
      </section>
      <section className="home__section sect-3">
        <img className="home__img" src={formImg} alt="..."></img>
        <p>
          loremDolore est pariatur proident labore aliqua anim ad. Ut irure
          minim eiusmod quis do. Velit mollit anim irure velit consectetur
          laboris sunt commodo consequat duis. Id enim et eiusmod ullamco
          eiusmod adipisicing. Nisi culpa dolore commodo nostrud eu Lorem.
        </p>
      </section>
      <section className="home__section sect-4">
        <img className="home__img" src={formImg} alt="..."></img>
        <p>
          loremDolore est pariatur proident labore aliqua anim ad. Ut irure
          minim eiusmod quis do. Velit mollit anim irure velit consectetur
          laboris sunt commodo consequat duis. Id enim et eiusmod ullamco
          eiusmod adipisicing. Nisi culpa dolore commodo nostrud eu Lorem.
        </p>
      </section>
      <h1> Final Project </h1>
      <p>Vamos chavales</p>
    </main>
  );
};

export default Home;
