import React from "react";
import Header from "../../main/Header";
import "./Error.scss";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  function navigateTo(to) {
    navigate(to);
  }
  return (
    <div className="errorContainer">
      <Header />
      <div className="error">
        <div className="mainError">404</div>
        <div className="subtitle">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <div onClick={() => navigateTo("/")} className="backHome">
          Retourner sur la page d’accueil
        </div>
      </div>
    </div>
  );
}

export default Error;
