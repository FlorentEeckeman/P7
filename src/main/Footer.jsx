import React from "react";
import Logo from "./Logo";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="logoFooter">
        <Logo />
      </div>
      <div className="displau">
        <div className="legalMention">© 2020 Kasa. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
