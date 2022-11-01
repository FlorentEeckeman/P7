import React from "react";
import LeftArrow from "./card_Elements/LeftArrow";
import RightArrow from "./card_Elements/RightArrow";
import { useState } from "react";

function CardPhoto({ img }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="cardPhotoContainerTop">
      <div className="cardPhotoContainer">
        {img.map((img, ind) => (
          <div
            key={ind}
            className="cardPhotoContainerElement"
            style={{
              backgroundImage: `url(${img})`,
              transform: `translate(-${index}00%)`,
              transition: `transform 430ms ease-in-out`,
            }}
          ></div>
        ))}
      </div>

      <div className="CardPhoto">
        <div className="cardPhotoArrow">
          {index > 0 ? (
            <LeftArrow index={index} setIndex={setIndex} />
          ) : (
            <div></div>
          )}
          {index < img.length - 1 ? (
            <RightArrow index={index} setIndex={setIndex} />
          ) : (
            <div></div>
          )}
        </div>
        {img.length > 1 && (
          <div className="cardPhotoStatus">
            {index + 1}/{img.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardPhoto;
