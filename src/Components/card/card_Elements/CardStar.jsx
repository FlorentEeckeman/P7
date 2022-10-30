import React from "react";

function CardStar({ fill }) {
  return (
    <svg
      className="cardStar"
      fill={fill}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill={fill}
      />
    </svg>
  );
}

export default CardStar;