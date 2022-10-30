import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function navigateTo(to) {
    navigate(to);
  }
  return (
    <div className="header">
      <Logo className={"logo"} />
      <div className="navbar">
        <ul>
          <li>
            <div onClick={() => navigateTo("/")}>Accueil</div>
          </li>

          <li>
            <div onClick={() => navigateTo("/about")}>A Propos</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
