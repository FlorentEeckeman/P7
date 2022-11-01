import React from "react";
import Header from "../../main/Header";
import Intro from "./Intro";
import "./Home.scss";
import CardGroup from "./CardGroup";
import Footer from "../../main/Footer";
import image from "./img/background.png";

function Home({ data }) {
  return (
    <div>
      <div className="homeContainer">
        <Header />
        <Intro img={image} text={"Chez vous, partout et ailleurs"} />
        <CardGroup data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
