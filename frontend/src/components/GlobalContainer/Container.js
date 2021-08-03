import React from "react";
// Styles
import "./Container.scss";

const Container = ({ children, className }) => (
  <div className={`globalContainer ${className}`}>{children}</div>
);

export default Container;
