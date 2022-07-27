import React from "react";
import "./Home.scss";
import firstImg from "../../assets/images/firstImg.png";
import secondImg from "../../assets/images/comunityImg.png";
const Home = () => {

  return (
    <main className="home">
      <section className="home__sectionfirst">
        {/* <img className="home__frontImg" src={frontImg} alt="..."></img> */}
        <div className="home__firstText">
        <p className="home__firstp ">En&nbsp;<span>CVtae</span></p>
          <p className="home__firstp"> <span> Conecta&nbsp;</span>  empresas con personas</p>
          <p className="home__secondp"><span> Descubre&nbsp;</span>  millones de ofertas</p>
          <p className="home__secondp"> <span>Encuentra&nbsp;</span>  el sitio que te mereces</p>
        </div>
      </section>
      <section className="home__section sect-1">
        <button className="home__buttonRegister"> <img className="home__img" src={firstImg} alt="..."></img> </button>
        <div className="home__secondText">
        <p className="home__secondTextPar">
          CREA tu perfil en menos de un minuto, y DESCUBRE que no solo puedes conocer nuevas empresas, sino que también conoceras gente como tú.
        </p>
        </div>
      </section>
      <section className="home__section sect-2">
<img className="home__img" src={secondImg} alt="..."></img>
      <div className="home__secondText">
      <p className="home__secondTextPar">
          UNETE a nuestra COMUNIDAD, contamos con más de 500 personas que ya han encontrado trabajo en CVtae y que estarán encantados de contarte su EXPERIENCIA
          </p>
          </div>
      </section>
      {/* <section className="home__section sect-3">
      <img className="home__img" src={secondImg} alt="..."></img>
      <div className="home__secondText">
      <p className="home__secondTextPar">
          Unete a nuestra COMUNIDAD, contamos con más de 500 personas que ya han encontrado trabajo en CVtae y que estarán encantados de contarte su experiencia
          </p>
          </div>
      </section> */}
    </main>
  );
};

export default Home;
