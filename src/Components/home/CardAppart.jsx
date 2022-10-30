import React from "react";
import { useNavigate } from "react-router-dom";

function CardAppart({ id, data }) {
  const navigate = useNavigate();
  function navigateTo() {
    navigate(`/page/${id}`, { state: data });
  }
  return (
    <div
      className="cardAppart"
      onClick={() => {
        navigateTo();
      }}
      style={{
        background: `url(${data.cover}) ,linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  )`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <div className="cardTitle">{data.title}</div>
    </div>
  );
}

export default CardAppart;
