import React from "react";
import ActiveArrow from "../../main/ActiveArrow";
import { useState } from "react";
import UnactiveArrow from "../../main/UnactiveArrow";

function AboutDescript({ title, text }) {
  const [about, setAbout] = useState(true);
  return (
    <div className="aboutDescription">
      <div className="aboutSlideBar">
        <div className="aboutTitle">{title}</div>
        <div className="aboutTrigger" onClick={() => setAbout(!about)}>
          {!about ? <UnactiveArrow /> : <ActiveArrow />}
        </div>
      </div>
      {about ? <div className="aboutTextDescription">{text}</div> : null}
    </div>
  );
}

export default AboutDescript;
