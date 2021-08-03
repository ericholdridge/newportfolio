import React from "react";
import "./Heading.scss";

const Heading = ({ headingTitle }) => {
  return (
    <div className="heading">
      <p className="sectionHeading">{headingTitle}</p>
    </div>
  );
};

export default Heading;
