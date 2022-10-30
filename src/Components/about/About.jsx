import React from "react";
import Header from "../../main/Header";
import images from "./img/background_about.png";
import "./About.scss";
import AboutDescript from "./AboutDescript";
import Footer from "../../main/Footer";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <Header />
        <div
          className="intro introAbout"
          style={{
            backgroundImage: `url(${images})`,
          }}
        ></div>

        <div className="about">
          <AboutDescript
            title={"Fiabilité"}
            text={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            }
          />
          <AboutDescript
            title={"Reespect"}
            text={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <AboutDescript
            title={"Service"}
            text={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
          />
          <AboutDescript
            title={"Sécurité"}
            text={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
