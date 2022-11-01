import "./Card.scss";
import React, { useEffect } from "react";
import Footer from "../../main/Footer";
import Header from "../../main/Header";
import CardPhoto from "./CardPhoto";
import CardLocation from "./CardLocation";
import CardInfos from "./CardInfos";
import { useLocation, useNavigate } from "react-router-dom";

function Card() {
  const location = useLocation();
  const localData = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    // Update the document title using the browser API
    if (!localData) {
      navigate("/404");
    }
  }, [localData, navigate]);

  if (!localData) {
    return null;
  }

  return (
    <>
      <div className="cardContainer">
        <Header />
        <CardPhoto img={localData.pictures} />
        <CardLocation localData={localData} />
        <CardInfos localData={localData} />
      </div>
      <Footer />
    </>
  );
}

export default Card;
