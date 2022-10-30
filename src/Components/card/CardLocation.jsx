import React from "react";
import CardTag from "./CardTag";
import CardStar from "./card_Elements/CardStar";

function CardLocation({ localData }) {
  const listItems = localData.tags.map((number) => (
    <CardTag tag={number} key={number} />
  ));

  const goodPoint = [];
  for (let i = 0; i < localData.rating; i++) {
    goodPoint.push(<CardStar key={"good" + i} fill="#ff6060" />);
  }
  for (let u = 0; u < 5 - localData.rating; u++) {
    goodPoint.push(<CardStar key={"bad" + u} fill={"#E3E3E3"} />);
  }
  const words = localData.host.name.split(" ");
  return (
    <div className="cardLocation">
      <div className="cardLeftInfos">
        <div className="cardName">{localData.title}</div>
        <div className="cardCity">{localData.location}</div>
        <div className="cardTagGroup">{listItems}</div>
      </div>
      <div className="cardRightInfo">
        <div className="cardAuthor">
          <div className="cardAuthorName">
            <div className="cardAuthorFirstname">{words[0]}</div>
            <div className="cardAuthorLastname">{words[1]}</div>
          </div>
          <div
            className="cardAuthorPicture"
            style={{
              backgroundImage: `url(${localData.host.picture})`,
            }}
          ></div>
        </div>
        <div className="cardRate">{goodPoint}</div>
      </div>
    </div>
  );
}

export default CardLocation;
