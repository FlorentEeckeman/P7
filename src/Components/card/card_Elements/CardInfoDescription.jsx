import React from "react";
import { useState } from "react";
import DownArrow from "./DownArrow";
import UpArrow from "./UpArrow";
function CardInfoDescription({ text, title }) {
  const [about, setAbout] = useState(true);
  return (
    <div className="cardDescription">
      <div className="cardSlideBar">
        <div className="cardTitle">{title}</div>
        <div className="cardTrigger" onClick={() => setAbout(!about)}>
          {!about ? <DownArrow /> : <UpArrow />}
        </div>
      </div>
      {about ? <div className="cardTextDescription">{text}</div> : null}
    </div>
  );
}
export default CardInfoDescription;
