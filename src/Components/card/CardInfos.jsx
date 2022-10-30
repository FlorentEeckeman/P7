import React from "react";
import CardInfoDescription from "./card_Elements/CardInfoDescription";

function CardInfos({ localData }) {
  return (
    <div className="cardInfos">
      <CardInfoDescription
        key={"description"}
        title={"Description"}
        text={localData.description}
      />
      <CardInfoDescription
        key={"equipement"}
        title={"Équipements"}
        text={localData.equipments.join("\r\n")}
      />
    </div>
  );
}

export default CardInfos;
