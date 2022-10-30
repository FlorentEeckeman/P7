import React from "react";
import CardAppart from "./CardAppart";

function CardGroup({ data }) {
  const cardElement = data.map((card) => (
    <CardAppart key={card.id} id={card.id} data={card} />
  ));
  return <div className="cardGroup">{cardElement}</div>;
}

export default CardGroup;
