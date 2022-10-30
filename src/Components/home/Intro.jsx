import React from "react";
function Intro({ img, text }) {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {text}
    </div>
  );
}

export default Intro;
