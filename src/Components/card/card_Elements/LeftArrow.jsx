import React from "react";

function LeftArrow({ index, setIndex }) {
  return (
    <svg
      onClick={() => {
        setIndex(index - 1);
      }}
      viewBox="0 0 48 80"
      cursor="pointer"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.0399 7.78312L39.9199 0.703125L0.359863 40.3031L39.9599 79.9031L47.0399 72.8231L14.5199 40.3031L47.0399 7.78312Z"
        fill="white"
      />
    </svg>
  );
}

export default LeftArrow;
