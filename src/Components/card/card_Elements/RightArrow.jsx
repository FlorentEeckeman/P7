import React from "react";

function RightArrow({ setIndex, index }) {
  return (
    <svg
      onClick={() => {
        setIndex(index + 1);
      }}
      cursor="pointer"
      viewBox="0 0 48 80"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z"
        fill="white"
      />
    </svg>
  );
}

export default RightArrow;
